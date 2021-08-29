import React from "react";

export default function Footer({buttonContent, eneableClass}){

    return(
        <div className="bottom-bar">
            <button 
                className={`close-order sub-font white ${eneableClass}`}
            >
                {buttonContent}
            </button>
        </div>
    );
}