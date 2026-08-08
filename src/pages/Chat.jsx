import logo from "../assets/react_logo.png"
import '../styles/chat.css'
import { useLocation } from 'react-router-dom';


//Component imports
import InputBar from "../components/InputBar.jsx"

function Chat() {
    const recievedModel = useLocation().state?.model
    console.log(recievedModel)

    return (
        <div className="chat-container">
            <header>
                <h1>RLM</h1>
                <img src={logo} />
            </header>

            <main>
                <h1>placeholder</h1>
            </main>

            <footer>
                <InputBar />
            </footer>


        </div>
    )
}

export default Chat