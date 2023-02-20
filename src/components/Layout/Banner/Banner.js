import React from "react";
import "./Banner.css";
import image from "../../../assets/bannerHome.png";

function Banner() {
    return (
        <section>
            <div className="filter">
                <img src={image} alt="background" />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
        </section>
    )
}
export default Banner;