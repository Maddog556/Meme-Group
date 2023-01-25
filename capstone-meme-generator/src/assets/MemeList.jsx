import React from "react";


export default function memeList(props){
    console.log(props.randomImage)


    return(
        <div className="list">
            <img src={props.randomImage} />
        </div>
    )
}