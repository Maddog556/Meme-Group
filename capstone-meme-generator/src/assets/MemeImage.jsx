import React from "react";
import axios from 'axios'



class MemeImage extends React.Component{
  state = {
    memeImage : [], 
    randomMeme: Math.floor(Math.random() * 99) + 1
  }
}