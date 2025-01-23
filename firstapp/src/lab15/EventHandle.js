import React from "react";

function EventHandlingExample(){
    const handleClick = () => {
        console.log("Button clicked");
    };

    return(
        <div>
            <button onClick={handleClick}>Click Button </button>
        </div>
    )
} 

export default EventHandlingExample;