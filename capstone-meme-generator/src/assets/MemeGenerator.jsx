import React from "react";
import { useEffect, useState } from "react";



export default function Meme(){
  const apiURL = 'https://api.imgflip.com/get_memes'
  const [allMemes, setAllMemes] = useState([])
  const [textInput, setTextInput] = useState('')
  useEffect(function() {
    fetch(apiURL)
      .then((data) => data.json)
      .then((data) =>setAllMemes(data.data.memes))
      .catch((err) =>
      alert('Component not mounted')
      )
  }, []);


}














// class MemeGenerator extends React.Component{
//     state = {
//       newMeme: [], 
//       savedMeme: []
//     };
//     //componentDidMount() method to fetch
//     //images from the API
//     componentDidMount() {
//       //fetching data from the API
//       fetch('https://api.imgflip.com/get_memes')
//         //converting the promise received into JSON
//         .then(res => res.json())
//         .then(content =>
//             //updating state variables
//             this.setState({
//               allMemeImages: content.data.memes
//             })
//             );
//                 console.log('component mounted')
//           }

//           //creates and updates meme being generated
//           handleChange = e => {
//             e.preventDefault()
//             //destructuring the e.target value
//             const {name, value} = e.target;
//             //updating state variable
//             this.setState((prevState) =>({
//               newMeme:
//               {
//                 ...prevState.newMeme, 
//                 [name]: value, 
//                 name: this.props.url, 
//                 url: this.props.url, 
//                 id: this.props.id
//               }
//             }))
//           }

//         //disabled meme save button
//           isSaved = () =>{
//             while(
//               (!this.state.newMeme.topText) &&
//               (!this.state.newMeme.bottomText)){
//                 return "disabled"
//               }
//           }
//           handleSave = e =>{
//             e.preventDefault()
//             this.setState(prevState =>({
//               savedMeme: [{
//                 ...prevState.newMeme, btnTextChange: 'Edit', 
//                 textDisabled: 'disabled'
//               }, ...prevState.savedMeme]
//             }))
//             this.clearInputs()
//           }

//           clearInputs = () =>{
//             this.setState({
//                 newMeme: {
//                   bottomText: "", 
//                   topText: ""
//                 }
//               })
//           }
//           //Change edit button to a save button
//           handleBtnEdit = (id) =>{
//             const updatedMemes = this.state.savedMeme.map(item =>{
//               if(item.id === id && item.btnTextChange === 'Edit'){
//                 item.btnTextChange = 'Save'
//                 item.textDisabled = ""
//               }else if(item.id === id && item.btnTextChange === 'Save'){
//                 item.btnTextChange = 'Edit'
//                 item.textDisabled = 'disabled'
//               }
//               return item
//             })
//             handleBtnDelete = (id) =>{
//               const updatedMemes = this.state.savedMeme.filter(item => item.id !==id)
//               this.setState({savedMeme: updatedMemes})
//             }
//             handleTextEditTop = (id, updatedTextTop) =>{
//               const updatedMemes = this.state.savedMeme.map(item =>{
//                 if(item.id === id){
//                   item.topText = updatedTextTop
//                 }
//                 return item
//               })
//               this.setState(() =>({savedMeme: updatedMemes}))
//             }
//             handleTextEditBottom = (id, updatedTextBottom) =>{
//               const updatedMemes = this.state.savedMeme.map(item =>{
//                 if(item.id === id){
//                   item.bottomText = updatedTextBottom
//                 }
//                 return item
//               })
//               this.setState(() => ({savedMeme: updatedMemes}))
//     }
//               //method to submit from and create the meme
//               handleSubmit = e => {
//                 e.preventDefault()
//                 const {allMemeImages} =this.state
//                 const random = allMemeImages[Math.floor(Math.random() * allMemeImages.length)].url 
//                 this.setState({
//                   randomImages: random
//                 })
//               }
//     //generates a unique key for all saved memes
//     generateKey = (id) =>{
//       return `${id}_${Math.floor(Math.random())}`
//     }
//           }

//           //method to submit from and create the meme
//           handleSubmit = e => {
//             e.preventDefault()
//             const {allMemeImages} =this.state
//             const random = allMemeImages[Math.floor(Math.random() * allMemeImages.length)].url 
//             this.setState({
//               randomImages: random
//             })
//           }
//           render(){
//             return(
            
//               <div className="form-container">
//                 <form className="meme-form" onSubmit={this.handleSubmit}>
               
//                 <input
//                 placeholder="Enter Top Text"
//                 type='text'
//                 value = {this.state.newMeme.topText}
//                 name = 'topText'
//                 onChange={this.handleChange} />
                  
                
//                 <img src = {this.props.url}
//                   alt = {this.props.name} />

//                 <input
//                 placeholder="Enter Bottom Text"
//                 type='text'
//                 value = {this.state.bottomText}
//                 name = 'bottomText'
//                 onChange={this.handleChange} />

               
//                 <button onSubmit={this.handleSubmit}>Refresh</button>
//                 </form>
//                 <br />
//                 <div className = 'meme'>
              
//                   {this.state.randomImages === "" ? "" :
//                   <img src={this.state.randomImages} alt="meme" />}
//                 {this.state.randomImages === "" ? "" :
//                   <h2 className="top">{this.state.topText}</h2>}
//                 {this.state.randomImages === "" ? "" :
//                   <h2 className="bottom">{this.state.bottomText}</h2>}
//                 </div>
                
                
//                 <div className="save-meme-section">
//                 <SavedMemes 
//                 key={this.generateKey(id)}
//                 id = {id}
//                 item = {item}
//                 textEditTop= {this.handleTextEditTop}
//                 textEditBottom = {this.handleTextEditBottom}
//                 buttonEdit = {this.handleBtnEdit}
//                 buttonDelete = {this.handleBtnDelete}
                
                
//                 />
                
                
//                 </div>
//               </div>
//             )
//           }

// }
// export default MemeGenerator



///refresh meme image to load a new one
//user sees meme on page load
//two inputs with a submit button
//user can add created memes to a list
//user can delete memes from the list
//user can edit an existing meme