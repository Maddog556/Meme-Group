// import React from 'react'

// export default function MemeGenerator() {
//     const [meme, setMeme] = React.useState({
//         topText: "",
//         bottomText: "",
//         randomImage: "http://i.imgflip.com/1bij.jpg" 
//     })
//     const [allMemes, setAllMemes] = React.useState([])
    
//     React.useEffect(() => {
//         fetch("https://api.imgflip.com/get_memes")
//             .then(res => res.json())
//             .then(data => setAllMemes(data.data.memes))
//     }, [])
    
//     function getMemeImage() {
//         const randomNumber = Math.floor(Math.random() * allMemes.length)
//         const url = allMemes[randomNumber].url
//         setMeme(prevMeme => ({
//             ...prevMeme,
//             randomImage: url
//         }))
        
//     }
    
//     function handleChange(event) {
//         const {name, value} = event.target
//         setMeme(prevMeme => ({
//             ...prevMeme,
//             [name]: value
//         }))
//     }
    
//     return (
//         <main>
//             <div className="form">
//                 <input 
//                     type="text"
//                     placeholder="Top text"
//                     className="form--input"
//                     name="topText"
//                     value={meme.topText}
//                     onChange={handleChange}
//                 />
//                 <input 
//                     type="text"
//                     placeholder="Bottom text"
//                     className="form--input"
//                     name="bottomText"
//                     value={meme.bottomText}
//                     onChange={handleChange}
//                 />
//                 <button 
//                     className="form--button"
//                     onClick={getMemeImage}
//                 >
//                     Get a new meme image 🖼
//                 </button>
//             </div>
//             <div className="meme">
//                 <img src={meme.randomImage} className="meme--image" />
//                 <h2 className="meme--text top">{meme.topText}</h2>
//                 <h2 className="meme--text bottom">{meme.bottomText}</h2>
//             </div>
//         </main>
//     )
// }










///refresh meme image to load a new one
//user sees meme on page load
//two inputs with a submit button
//user can add created memes to a list
//user can delete memes from the list
//user can edit an existing meme


import React from "react";
import SavedMemes from './SavedMemes'

class MemeGenerator extends React.Component {
  state = {
    newMeme: [],
    savedMeme: []
  }

  // CREATES NEW MEME IN ARRAY
  handleSave = (event) => {
    event.preventDefault()
    this.setState(prevState => ({
      savedMeme: [{
        ...prevState.newMeme,
        btnTextChange: "Edit",
        textDisabled: "disabled"
      }, ...prevState.savedMeme]
    }))
    this.clearInputs()
  }

  // CLEARS BUILDER MEME TEMPLATE AFTER SAVE 
  clearInputs = () => {
    this.setState({
      newMeme: {
        bottomText: "",
        topText: ""
      }
    })
  }

  // 1. CREATES & UPDATES MEME BEING BUILT
  handleBuildChange = (event) => {
    event.preventDefault()
    const { name, value } = event.target
    this.setState((prevState) => ({
      newMeme:
      {
        ...prevState.newMeme,
        [name]: value,
        name: this.props.name,
        url: this.props.url,
        id: this.props.id
      }
    }))
  }

  // DISABLES MEME SAVE BTN
  isSaveDisabled = () => {
    while (
      (!this.state.newMeme.topText) &&
      (!this.state.newMeme.bottomText)) {
      return "disabled"
    }
  }
  // CHANGE EDIT BTN TO SAVE
  handleBtnEdit = (id) => {
    const updatedMemes = this.state.savedMeme.map(item => {
      if (item.id === id && item.btnTextChange === "Edit") {
        item.btnTextChange = "Save"
        item.textDisabled = ""
      } else if (item.id === id && item.btnTextChange === "Save") {
        item.btnTextChange = "Edit"
        item.textDisabled = "disabled"
      }
      return item
    })
    this.setState({ savedMeme: updatedMemes })
  }
  // DELETE BTN
  handleBtnDelete = (id) => {
    const updatedMemes = this.state.savedMeme.filter(item => item.id !== id)
    this.setState({ savedMeme: updatedMemes })
  } // NO NEED event.preventDefault() DUE TO METHOD CALL FROM CHILD 

  // TEXTAREA CHANGES
  handleTextEditTop = (id, updatedTopText) => {
    const updatedMemes = this.state.savedMeme.map(item => {
      if (item.id === id) {
        item.topText = updatedTopText
      }
      return item
    })
    this.setState(() => ({ savedMeme: updatedMemes }))
  }

  handleTextEditBottom = (id, updatedBottomText) => {
    const updatedMemes = this.state.savedMeme.map(item => {
      if (item.id === id) {
        item.bottomText = updatedBottomText
      }
      return item
    })
    this.setState(() => ({ savedMeme: updatedMemes }))
  }

  // GENERATES UNIQUE KEY FOR SAVED MEMES
  generateKey = (id) => {
    return `${id}_${Math.floor(Math.random())}`;
  }

  render() {
    return (
      // MEME-BUILDER / SELECTS PIC AND ALLOWS INPUT
      <div>
        <form>
          <textarea
            placeholder="Place Text Here"
            className="topText"
            name="topText"
            onChange={this.handleBuildChange}
            value={this.state.newMeme.topText} />
          <img
            src={this.props.url}
            alt={this.props.name}
          />
          <textarea
            placeholder="Place Text Here"
            className="bottomText"
            name="bottomText"
            onChange={this.handleBuildChange}
            value={this.state.newMeme.bottomText} />
          <button
            name="refresh"
            value="true"
            className="refreshBtn"
            onMouseUp={this.props.refresh}
            onClick={this.handleBuildChange}
          >Refresh Image</button>
          <button
            className="saveBtn"
            onClick={this.handleSave}
            onMouseUp={this.props.refresh}
            disabled={this.isSaveDisabled()}>Save Meme
          </button>
        </form>
        <div className="savedSection">
          {this.state.savedMeme.map((item, id) =>
            <SavedMemes
              key={this.generateKey(id)}
              id={id}
              item={item}
              textEditTop={this.handleTextEditTop}
              textEditBottom={this.handleTextEditBottom}
              btnEdit={this.handleBtnEdit}
              btnDelete={this.handleBtnDelete} />)}
        </div>
      </div>
    )
  }
}
export default MemeGenerator