import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing from "./pages/Landing.jsx"


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />

            </Routes>
        </BrowserRouter>
    )
}

export default App