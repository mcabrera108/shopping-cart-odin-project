import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav>
            <div className="logo-container">
                <img src="https://github.com/mcabrera108/shopping-cart-odin-project/blob/main/src/assets/logo.png?raw=true" alt="heybrovideogameslogo" className="logo-img" />
                <div>
                    <Link to="/" className="logo-title">Hey Bro!! Video Games</Link>
                </div>
            </div>
            <ul className="nav-menu">
                <li><Link to="/" className="nav-item-btn">Home</Link></li>
                <li><Link to="about" className="nav-item-btn">About</Link></li>
                <li><button className="nav-item-btn">Shop</button></li>
            </ul>
            <div className="shopping-icon-container">
                <i className="fa fa-shopping-cart fa-2x" style={{ color: "white" }} aria-hidden="true"></i>
            </div>
        </nav>
    )
}

export default Header;