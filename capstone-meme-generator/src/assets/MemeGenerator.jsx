import React from "react";

class MemeGenerator extends React.Component{
    state = {
      topText: "", 
      bottomText: "", 
      allMemeImages: [], 
      randomImages: ""
    };
    //componentDidMount() method to fetch
    //images from the API
    componentDidMount() {
      //fetching data from the API
      fetch('https://api.imgflip.com/get_memes')
        //converting the promise received into JSON
        .then(res => res.json())
        .then(content =>
            //updating state variables
            this.setState({
              allMemeImages: content.data.memes
            })
            );
   
          }

          //method to change input value fields
          handleChange = e => {
            //destructuring the e.target value
            const {name, value} = e.target;
            //updating state variable
            this.setState({
              [name] : value
            })
          }

          //method to submit from and create the meme
          handleSubmit = e => {
            e.preventDefault()
            const {allMemeImages} =this.state
            const random = allMemeImages[Math.floor(Math.random() * allMemeImages.length)].url 
            this.setState({
              randomImages: random
            })
          }
          render(){
            return(
              //Controlled Form
              <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
               
                <input
                placeholder="Enter Top Text"
                type='text'
                value = {this.state.topText}
                name = 'topText'
                onChange={this.handleChange} />


                <input
                placeholder="Enter Bottom Text"
                type='text'
                value = {this.state.bottomText}
                name = 'bottomText'
                onChange={this.handleChange} />

               
                <button>Generate Meme</button>
                </form>
                <br />
                <div className = 'meme'>
              
                  {this.state.randomImages === "" ? "" :
                  <img src={this.state.randomImages} alt="meme" />}
                {this.state.randomImages === "" ? "" :
                  <h2 className="top">{this.state.topText}</h2>}
                {this.state.randomImages === "" ? "" :
                  <h2 className="bottom">{this.state.bottomText}</h2>}
                </div>
              </div>
            )
          }

}
export default MemeGenerator



///refresh meme image to load a new one
//user sees meme on page load
//two inputs with a submit button
//user can add created memes to a list
//user can delete memes from the list
//user can edit an existing meme