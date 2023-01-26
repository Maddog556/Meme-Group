
import React from "react";

export default function memeList(props){
    console.log(props.randomImage)


return(
        <div
        className="saved-images"
        style={{
            height: "400px", 
            width: "100%",
            backgroundImage: `url(${props.randomImage})`, 
            backgroundSize: 'cover'
        }}>
        <h1 className="saved-topText">{props.topText}</h1>
        <h1 className="saved-bottomText">{props.bottomText}</h1>
         </div>
    )
}

