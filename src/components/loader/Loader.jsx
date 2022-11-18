import React from "react";
import './loader.css'

function Loader() {
    return (
        <svg className="spinner" viewBox="0 0 50 50">
            <circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                strokeWidth="5"
                className="path"
            ></circle>
        </svg>
    );
}

export default Loader;
