
import React from "react";


export default function memeList(props){
    console.log(props.randomImage)

  

//put if else statement here 


return(
        <div
        className="saved-images"
        style={{
            backgroundImage: `url(${props.randomImage})`, 
            backgroundSize: 'cover'
        }}>
        <h1 className="saved-topText">{props.topText}</h1>
        <h1 className="saved-bottomText">{props.bottomText}</h1>
         </div>
    )
}


