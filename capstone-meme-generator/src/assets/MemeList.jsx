import React from "react";
import Memes from "./Meme";

export default function memeList(props){
    console.log(props.randomImage)


const [memeChange,setMemeChange] = React.useState()

    function handleChangetext(event) {
        const {name, value} = event.target
        setMemeChange(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    function editBtnState(event){
        event.preventdefault()
    
        
    }
//put if else statement here 

{/* <input 
type="text"
placeholder="Top text"
className="form--input"
name="topText"
value={meme.topText}
onChange={handleChange}
/>
<input 
type="text"
placeholder="Bottom text"
className="form--input"
name="bottomText"
value={meme.bottomText}
onChange={handleChange}
/> */}

    return(
        <div className="list">

            <h1>{props.topText}</h1>
            <img src={props.randomImage} />
            <h1>{props.bottomText}</h1>
            <button className="editbtn" onClick={editBtnState}>Edit text</button>
        </div>
    )
}