import logo from "../assets/react_logo.png"
import '../styles/chat.css'
import { useLocation } from 'react-router-dom';
import { useState } from "react";


//Component imports
import InputBar from "../components/InputBar.jsx"

import MessageBox from "../components/MessageBox.jsx"

function Chat() {

    const recievedModel = useLocation().state?.model
    const recievedAddress = useLocation().state?.address
    /*Debugging
    console.log(recievedModel)
    console.log(recievedAddress)
    */

    //Keeps track of the messages sent and recieved between the user and the model
    const [messages, setMessages] = useState([])


    //This function takes in the prompt from the user, then sends that to the selected model, then puts both inside the message array to be shown in the main section
    async function handleFormSubmit(prompt) {
        const newUserMessage = {
            text: prompt,
            direction: "right"
        }

        const newModelResponse = {
            text: await getAIResponse(prompt),
            direction: "left"
        }

        setMessages((prevMessages) => [...prevMessages, newUserMessage, newModelResponse])

    }

    async function getAIResponse(prompt) {
        const url = `${recievedAddress}/api/generate`;
        const payload = {
            model: recievedModel,
            prompt: prompt,
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
            if (!response.ok) {
                return false
            }

            const data = await response.json();
            return data.response


        } catch (error) {
            console.log("Connection error: ", error.message)
            return false
            //Connection failed
        }
    }


    return (
        <div className="chat-container">
            <header>
                <h1>RLM</h1>
                <img src={logo} />
            </header>

            <main>
                {messages.map((msg) => (
                    <MessageBox input={msg.text} direction={msg.direction} />
                ))}
            </main>

            <footer>
                <InputBar onSubmitFunction={handleFormSubmit} />
            </footer>


        </div>
    )
}

export default Chat