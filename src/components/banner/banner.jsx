import React from "react";

export default function Banner({title, background}) {

    const backgroundDesign = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${background})`
    }
        
    return (
        <>
            <div className="main-content__wrapper__banner" style={backgroundDesign}>
                <h1>{title}</h1>  
            </div>
        </>
    )
}