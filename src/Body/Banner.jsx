import React from "react";
import { Link } from "react-router-dom";
function Banner() {

    return (
        <div className="banner-container">
            <div className="banner-sub-container">
                <div className="banner-title-container">
                    Hey Bro!! Video Games
                </div>
                <div className="banner-subtitle-container">
                    We BUY, SELL, & TRADE all video games!
                </div>
                <div className="banner-btn-container">
                    <Link to="about" className="shop-btn">Shop</Link>
                </div>
            </div>
        </div>
    )
}
export default Banner;