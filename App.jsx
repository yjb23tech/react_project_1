import { createRoot } from "react-dom/client";
import NavBar from "./components/Navbar.jsx";

const App = () => {
    return (
        <div>
            <h1>Sanity Check</h1>
            <NavBar />
        </div>
    );
};

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)
