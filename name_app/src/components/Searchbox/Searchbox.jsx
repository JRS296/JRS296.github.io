import React from "react";
import "./Searchbox.css"

const Searchbox = ({onInputChange}) => {
    return (
        <div className="search-container">
            <input onChange={(event) => onInputChange(event.target.value)} className="search-input" placeholder="Type Keywords" type="text" />
        </div>
    );
};

export default Searchbox;