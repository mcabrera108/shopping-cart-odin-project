import React from "react";
import style from "./styles/location.module.css";

function Location() {
    const mapStyle = {
        "width": "600px",
        "height": "450px",
        "border": "0px"
    }
    return (
        <>
            <div className={style.locationContainer}>
                <div className={style.addressContainer}>
                    <span className={style.addressHeader}>Address</span>
                    <div className={style.addressNameContainer}>
                        <div className={style.address}>7979 N Eldridge Pkwy Suite 762-764,</div>
                        <div className={style.address}>Houston, TX 77041</div>
                    </div>
                </div>
                <div className={style.googleMapContainer}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.9630433340444!2d-95.61251692445201!3d29.894165474999614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d0f92fd03ab5%3A0x14c84c4c2391db24!2sHey%20Bro*21*21%20Video%20Games!5e0!3m2!1sen!2sus!4v1709236197141!5m2!1sen!2sus"
                        style={mapStyle} allowFullScreen={true} loading="async" referrerPolicy="no-referrer-when-downgrade" title="heybrovideogameslocation"></iframe>
                </div>
            </div>
        </>
    )
}
export default Location;