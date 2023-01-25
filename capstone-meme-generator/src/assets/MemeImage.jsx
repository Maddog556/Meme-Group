import React from "react";




class MemeImage extends React.Component{
  state = {
    memeImage : [], 
    randomMeme: Math.floor(Math.random() * 99) + 1
  }
}