import React from "react";
import "./Results.css"
import NameCard from "../NameCards/NameCard";

const ResultsContainer = ( {suggestedNames} ) => {
    const suggestedNamesJSX = suggestedNames.map((suggestedName) => {
        return <NameCard key={suggestedName} Names={suggestedName}/>
    })

    return (
        <div className="ResultsContainer">
            {suggestedNamesJSX}
        </div>
    );
};

export default ResultsContainer;