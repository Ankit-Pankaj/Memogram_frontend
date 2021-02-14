import React, { useState,useEffect } from "react";
import Form from "./Form";
import PostContainer from "./Post_container";
import MemeWindow from "./MemeWindow";
import "./reset.css";
import "./win95-style.scss";
import axios from "axios"

function App() {
  
  const [meme,setMeme]=useState([]);
  
  const fetchMeme= async ()=>{

      await axios.get('https://memogram-backend.herokuapp.com/memes').then((response) => {
        // console.log(response.data.data)
        let data = [];
        // console.log(response.data.data.length);
  
        for(var i =0; i < response.data.data.length; i++){
            data.push(response.data.data[i])
        }
        // this.setState({todos: data})
        setMeme(data);
    });     

  }

  useEffect(() => {
    fetchMeme();

    },[]);

  return (
    <div className="light">
      {/* <Form a={fetchMeme} b={meme} /> */}
      <MemeWindow fetchMeme={fetchMeme} memeArray={meme}/>
      {/* <PostContainer a={fetchMeme} b={meme}/> */}
    </div>
  );
}

export default App;
