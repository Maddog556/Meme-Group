<<<<<<< HEAD
import React from "react";


export default function memeList(props){
    console.log(props.randomImage)



//put if else statement here 


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
=======
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
>>>>>>> 45897f443e715770d6bf3207f875c09f0fd89d38
