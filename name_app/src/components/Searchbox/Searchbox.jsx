import React from "react";
import "./Searchbox.css"

const Searchbox = () => {
    return (
        <div className="search-container">
            <input className="search-input" placeholder="Type Keywords" type="text" />
        </div>
    );
};

export default Searchbox;