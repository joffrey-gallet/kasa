
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import Routes from "./Routes";
import "./App.css";

import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;