import React from "react";
import "./Header.css";
import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <div>
                <img src={logo} alt="kasa" className="logo" />
            </div>
            <nav>
                <ul>
                    <Link to={"/"}>
                        <li>Accueil</li>
                    </Link>
                    <Link to={"/About"}>
                        <li>A Propos</li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
}
export default Header;