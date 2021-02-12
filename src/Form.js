import React, {useState, useEffect} from 'react';
import "./win95-style.scss";
import axios from "axios";
//running on port 3001


function Form (props) {

// const [caption,setCaption] = useState("");
// const [name, setName] = useState("");
// const [img_url, setImgurl]= useState("");

const [meme,setMeme]=useState([]); // Contains all the data of memes

const captionChangeHandler = (event) => {
    // console.log("caption: "+event.target.value);
    props.setCaption(event.target.value);
}
const nameChangeHandler=(event)=>{
  // console.log("caption: "+event.target.value);
    props.setName(event.target.value);
}
const imgurlChangeHandler=(event)=>{
  // console.log("caption: "+event.target.value);
    props.setImgurl(event.target.value);
}


// -----------------------------------------------------------------------------
const clickHandler =async (event) => {
    event.preventDefault();
    console.log(event);
    await axios({
      method:'post',
      url: 'http://localhost:3000/memes',
      data:{
        name:props.name,
        url:props.img_url,
        caption:props.caption,
      }

    })
    props.setImgurl("");
    props.setCaption("");
    props.setName("");

    // axios.get('http://localhost:3000/memes').then((response) => {
    //         console.log(response.data.data)
    //         let data = [];
    //         console.log(response.data.data.length);

    //         for(var i =0; i < response.data.data.length; i++){
    //             data.push(response.data.data[i])
    //         }
    //         // this.setState({todos: data})
    //         setMeme(data);
    //     });
    // console.log(props);
    props.fetchMeme();
  }
  // ---------------------------------------------------------------------------
  const editHandler=async (event)=>{
    event.preventDefault();
    // console.log(event);
    await axios({
      method:'patch',
      url: 'http://localhost:3000/memes/id',
      data:{
        url:props.img_url,
        caption:props.caption,
      }

    })

  }
// -----------------------------------------------------------------------------
// const handleImageError=(ev)=>{
//   ev.target.src="https://www.meme-arsenal.com/memes/c9e6371faa3b57eaee1d35595ca8e910.jpg"
// }


// axios.post('http://localhost:3000', { owner, caption, img_url }); shortform to send axios request


   
    return (
      <>
     <form id="userform" method="POST">
    <div><label for="owner"> Meme Owner  </label>
    <input type="text" id="owner" name="owner" onChange={nameChangeHandler} value={props.name} placeholder="Enter your name"></input>
    </div>
   
    <div>
     <label for="caption" >Caption  </label>
    <input type="text" id="caption" name="caption" onChange={captionChangeHandler}  value={props.caption} placeholder="Enter caption"/>
    </div>
     <div>
     <label for="image">Image URL  </label>
    <input type="url" id="image" name="img_url" onChange={imgurlChangeHandler} value={props.img_url} placeholder="Enter image url"/>
    </div>
    <input type="submit" onClick={clickHandler}/>
    </form> 
    <div className="temp" ></div>
    {/* <div><ul>{props.memeArray.map((memes, index) => <li key={index}>{memes.name} </li>)}</ul></div> */}
  
    
      </ >
    )
  
 
}

export default Form