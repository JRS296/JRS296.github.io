import React from "react";
import "./Results.css"

const ResultsContainer = ( {suggestedNames} ) => {
    const suggestedNamesJSX = suggestedNames.map((suggestedName) => {
        return <p key={suggestedName}>{suggestedName}</p>;
    })

    return (
        <div className="ResultsContainer">
            {suggestedNamesJSX}
        </div>
    );
};

export default ResultsContainer;