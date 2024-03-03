import React from "react";
import style from "./styles/location.module.css";


function AddressInfo(props) {
    return (
        <>
            <div className={style.addressBlock}>
                <span className={style.addressHeader}>{props.addressHeader}</span>
                <div className={style.addressNameContainer}>
                    {props.descList.map((list) => {
                        return (
                            <div className={style.address} key={list.key}>{list.desc}</div>
                        )
                    })}
                </div>
            </div>
        </>
        // <div className={style.address}>{props.description}</div>
    )
}

export default AddressInfo;