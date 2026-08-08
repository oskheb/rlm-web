import { useState } from 'react'
import logoImg from "../assets/react_logo.png"
import { useNavigate } from 'react-router-dom';

import '../styles/landing.css'

function Landing() {

  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [showMessage, setshowMessage] = useState(false);

  async function handleSubmit(formData) {
    const modelName = formData.get("model")
    setMessage("Loading...")
    setshowMessage(true);


    if (await testConnection(modelName)) {
      console.log("pass")
      navigate("/chat", { state: { model: modelName } });
    } else {
      console.log("fail")
      setMessage("An error has occured, please make sure the Ollama API is running and you have the correct model name")
      setshowMessage(true);

    }

  }

  async function testConnection(modelName) {



    //testing that we have a connection to the ollama API
    const url = 'http://localhost:11434/api/generate';
    const payload = {
      model: modelName,
      prompt: 'respond with only the word hello',
      stream: false
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      //Catches response errors
      if (await !response.ok) {
        return false
      }

      const data = await response.json();
      console.log("Model response: ", data.response)
      return true //Connection success


    } catch (error) {
      console.log("Connection error: ", error.message)
      return false
      //Connection failed
    }


  }


  return (
    <div className="landing-page">
      <section>
        <h1>RLM</h1>
        <img src={logoImg} alt="react logo image" />
      </section>



      <form action={handleSubmit}>
        {showMessage && <h2>{message}</h2>}


        <label>
          Name of LLM Model:
          <input type="text" id="model" name="model" required />
        </label>

        <button type="submit">Connect</button>

      </form>

    </div>
  )
}

export default Landing