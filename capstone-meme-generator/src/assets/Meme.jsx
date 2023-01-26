import React from "react"
import MemeList from "./MemeList"
import {v4 as uuidv4} from 'uuid';

export default function Memes() {
//this is meme blueprint
    const initState = {
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg", 
        id: ""
    }

    
    const [meme, setMeme] = React.useState(initState)
    

    const [allMemes, setAllMemes] = React.useState([])
    const [memeList, setMemeList] = React.useState([])
    //this is the boolean for meme
    const [isEdit, setIsEdit] = React.useState(false)
    
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    //this is for the input boxes so you can type in
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
   

    //TODO: write edit funciton. Function should update state that manages inputs, update edit mode
    function handleEdit(memeIndex){
        let memeToEdit = memeList.find((meme, index) => index === memeIndex )
        setMeme(prev => ({...memeToEdit}))
        setIsEdit(true)
    }

    // save the meme
    function handleSave(event){
        event.preventDefault()
        console.log(meme)
        console.log(memeList)
        if (isEdit === false){setMemeList(prevMemeList => {
            return[...prevMemeList,
            {
                topText: meme.topText,
                bottomText: meme.bottomText,
                randomImage: meme.randomImage,
                id: uuidv4()
            }]
        })} else if (isEdit === true){
            setMemeList(prevMemeList => {
                //map brings back a array and return newlist replacing it in prevmemelist
                let newList = prevMemeList.map(item => {
                    if (item.id === meme.id){
                        return meme
                    } else {
                        return item
                    }
                })
                return newList
            })
            setIsEdit(false)
        }
        //TODO update meme state to empty
        setMeme(initState)
    }
    
  
    // delete the meme
    const removeElement = (index) =>{
        setMemeList(prevMemeList => {
            return prevMemeList.filter((_, i) =>  i !== index)
        })
    }
    
    //   showing the meme and buttons 
    const memelistElements = memeList?.map((meme,index) =>{
    return(
        <div key={index}>
    <MemeList {...meme} 
    
    />
    
                                            {/* making a inline function */}
    <button className="deleteList" onClick={() => removeElement(index)}>Delete</button>
   <button className="editList" onClick={ () => handleEdit(index)}>Edit Text</button>
    </div>)})
    
    
    return (
        <main >
            <div className="form">
                <input 
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
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            <div> 
                <button className="saveBtn" onClick={handleSave}>Save Your Meme</button>
            </div>

            <div className="list-container">
            {memelistElements}
            </div>
            </main>
    )
}