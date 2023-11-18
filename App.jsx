import { createRoot } from "react-dom/client";
import NavBar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";

const App = () => {
    return (
        <div>
            <NavBar />
            <Main />
        </div>
    );
};

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)
