import React from "react";
import "./NameCard.css";

const nameCheapUrl = 'https://www.namecheap.com/domains/registration/results/?domain=';

const NameCard = ({Names}) => {
    return (
        <a 
            target="_blank"
            rel="moreferrer"
            className="link" 
            href={`${nameCheapUrl}${Names}`}>
            <div className="result-name-card">
                <p className="result-name">{Names}</p>
            </div>
        </a>
    );
};

export default NameCard;