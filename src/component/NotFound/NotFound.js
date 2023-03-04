import React from "react";
import './NotFound.css';
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="d-flex align-items-start notfound">
            <Link to="/">
                <button className="btn2 px-5 my-3 rounded-pill">Go Back to Home</button>
            </Link>
        </div>

    );
}

export default NotFound;