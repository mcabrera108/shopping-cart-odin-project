import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import image_1 from "../assets/heybrovideogames_1.jpg";
import image_2 from "../assets/heybrovideogames_2.jpg";
import image_3 from "../assets/heybrovideogames_3.jpeg";

function Banner() {
    const imageList = [
        image_1,
        image_2,
        image_3,
    ]

    const slideStyle = (image) => {

        return {
            "background": `url(${image})`,
            "backgroundSize": "cover",
            "backgroundPosition": "center",
            "backgroundRepeat": "no-repeat",
            "filter": "blur(4px)",
        }

    }
    return (
        <>
            <Fade arrows={false}>
                <div className="each-slide-effect">
                    <div style={slideStyle(imageList[0])} title="banner-img-1">
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={slideStyle(imageList[1])} title="banner-img-2">
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={slideStyle(imageList[2])} title="banner-img-3">
                    </div>
                </div>
            </Fade>
            <div className="banner-sub-container">
                <div className="banner-title-container">
                    Hey Bro!! Video Games
                </div>
                <div className="banner-subtitle-container">
                    We BUY, SELL, & TRADE all video games!
                </div>
                <div className="banner-btn-container">
                    <Link className="shop-btn" to="about">Shop</Link>
                </div>
            </div>
        </>

    )
}
export default Banner;