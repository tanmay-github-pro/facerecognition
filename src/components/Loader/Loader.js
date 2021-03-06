import React from "react";
import './Loader.css';

const Loader = () => {
    return (
        <div className="loader-div-container">
            <div className="loader">
                <span></span>
                <span></span>
                <span></span>
                <h2>Loading...</h2>
            </div>
        </div>
    );
}

export default Loader;
