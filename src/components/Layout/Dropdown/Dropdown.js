import { useState } from "react";
import "./Dropdown.css"
import vector from "../../../assets/Vector.png";
import "../../Pages/About/About.css";

function Dropdown({ title, description }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="block">
            <div className="dropdown" id={`${title}`}>
                <div className="dropdown-block">
                    <div className="dropdown-title">{title}</div>
                    <span
                        className={`dropdown-vector ${open}`}
                        onClick={() => setOpen(!open)}
                    >
                        <img src={vector} alt="ouvrir menu" />
                    </span>
                </div>
                {open && <div className="dropdown-txt">{description}</div>}
            </div>
        </div>
    );
}
export default Dropdown;
