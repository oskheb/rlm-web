import logo from "../assets/react_logo.png"
import '../styles/chat.css'

//Component imports
import InputBar from "../components/InputBar.jsx"

function Chat() {
    return (
        <>
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


        </>
    )
}

export default Chat