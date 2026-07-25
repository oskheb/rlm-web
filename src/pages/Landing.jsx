import { useState } from 'react'
import logoImg from "../assets/react_logo.png"

import '../styles/Landing.css'

function Landing() {

  async function handleSubmit(formData) {
    const modelName = formData.get("model")


    if (testConnection(modelName)) {
      console.log("pass")
    } else {
      console.log("fail")
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

      const data = await response.json();
      console.log("Model response: ", data.response)
      return true //Connection success


    } catch (error) {
      console.log("Connection error: ", error.message)
      //Connection failed
    }


  }


  return (
    <main>
      <section>
        <h1>RLM</h1>
        <img src={logoImg} alt="react logo image" />
      </section>

      <form action={handleSubmit}>


        <label>
          Name of LLM Model:
          <input type="text" id="model" name="model" required />
        </label>

        <button type="submit">Connect</button>

      </form>

    </main>
  )
}

export default Landing