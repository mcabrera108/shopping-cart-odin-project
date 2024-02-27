import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav>
            <div className="logo-container">
                <img src="./src/assets/logo.png" className="logo-img" />
                <div>
                    <Link to="/" className="logo-title">Hey Bro!! Video Games</Link>
                </div>
            </div>
            <li className="nav-menu">
                <ul><Link to="/" className="nav-item-btn">Home</Link></ul>
                <ul><Link to="about" className="nav-item-btn">About</Link></ul>
                <ul><button className="nav-item-btn">Inventory</button></ul>
            </li>
            <div className="shopping-container">
                <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
            </div>
        </nav>
    )
}

export default Header;