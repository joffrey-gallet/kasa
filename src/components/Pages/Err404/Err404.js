import "./Err404.css";
import { Link } from "react-router-dom";

const Err404 = () => {
    return (
        <div className="container-404">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to={"/"}>
                <span>Retourner sur la page d’accueil</span>
            </Link>
        </div>
    );
};

export default Err404;