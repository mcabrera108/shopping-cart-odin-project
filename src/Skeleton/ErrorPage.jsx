import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <div>
            <h2>Error 404. Invalid URL address <Link to="/">Click here</Link></h2>
        </div>
    )
}

export default ErrorPage;