import send_arrow from "../assets/send_arrow.png"

function InputBar({ onSubmitFunction }) {

    function handleSubmit(formData) {
        const prompt = formData.get("prompt")
        onSubmitFunction(prompt)
    }

    return (
        <form action={handleSubmit}>
            <input type="text" id="promptField" name="prompt" required placeholder="Ask anything" />
            <button>{<img src={send_arrow} />}</button>
        </form>
    )
}

export default InputBar