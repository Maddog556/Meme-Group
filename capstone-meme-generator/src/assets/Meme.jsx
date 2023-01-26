import React from "react"
import MemeList from "./MemeList"

export default function Memes() {

    
    const [meme, setMeme] = React.useState({
        key:"index",
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg", 
        editMode:'false'
    })

    const [allMemes, setAllMemes] = React.useState([])
    const [memeList, setMemeList] = React.useState([])
    
    
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
    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    // save the meme
    function handleSave(event){
        event.preventDefault()
        console.log(meme)
        console.log(memeList)
        setMemeList(prevMemeList => {
            return[...prevMemeList,
            {
                topText: meme.topText,
                bottomText: meme.bottomText,
                randomImage: meme.randomImage,
                editMode: meme.editMode
            }]
        })
        setMeme(meme)
    }
  
    // delete the meme
    const removeElement = (index) =>{
        setMemeList(prevMemeList => {
            return prevMemeList.filter((_, i) =>  i !== index)
        })
    }
    
    //   showing the meme and buttons 
    const memelistElements = memeList.map((meme,index) =>{
    return(
        <div>
    <MemeList key = {index} {...meme} 
    
    />
    
                                            {/* making a funtcion here */}
    <button className="deleteList" onClick={() => removeElement(index)}>Delete Here</button>
   
    </div>)})
    
    
    return (
        <main>
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
            {memelistElements}
        </main>
    )
}