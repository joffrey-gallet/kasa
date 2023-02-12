import React from "react";
import "./Banner.css";
import image from "../../assets/Banner.png";

function Banner() {
    const text = "Chez vous, partout et ailleurs"
    return (
        <div className="banner">
            <div className="banner-bg"></div>
            <img className="banner-img" src={image} alt="bannière" />
            <span className="banner-txt">{text}</span>

        </div>
    )
}
export default Banner;