import React from "react";


export default function memeList(props){
    console.log(props.randomImage)



//put if else statement here 


    return(
        <div className="list">

            <h1>{props.topText}</h1>
            <img src={props.randomImage} />
            <h1>{props.bottomText}</h1>
            
        </div>
    )
}