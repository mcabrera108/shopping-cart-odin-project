import style from "./styles/footer.module.css";

function Footer() {
    const iconStyle = {
        "color": "white",
        "margin": "0px 5px"
    }
    return (
        <>
            <div className={style.footerContainer}>
                <span className={style.copyrightTitle}>© 2023 by Hey Bro!! Video Games</span>
                <div className={style.connectContainer}>
                    <span className={style.connectHeader}>Connect With Us</span>
                    <div className={style.iconContainer}>
                        <i className="fa fa-instagram fa-2x" aria-hidden="true" style={iconStyle}></i>
                        <i className="fa fa-facebook-official fa-2x" aria-hidden="true" style={iconStyle}></i>
                        <i className="fa fa-youtube-play fa-2x" aria-hidden="true" style={iconStyle}></i>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;