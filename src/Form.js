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
      url: 'http://localhost:8081/memes',
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
      url: 'http://localhost:8081/memes/id',
      data:{
        url:props.img_url,
        caption:props.caption,
      }

    })
    props.fetchMeme();
  }
// -----------------------------------------------------------------------------
// const handleImageError=(ev)=>{
//   ev.target.src="https://cdn.pixabay.com/photo/2019/07/15/23/51/magnifying-4340698_1280.jpg"
// }


// axios.post('http://localhost:3000', { owner, caption, img_url }); shortform to send axios request


   
    return (
      <>
     <form id="userform" method="POST">
    <div className="formData"><label for="owner"> Meme Owner  </label>
    <input type="text" id="owner" name="owner" onChange={nameChangeHandler} value={props.name} placeholder="Enter your name"></input>
    </div>
   
    <div className="formData">
     <label for="caption" >Caption  </label>
    <input type="text" id="caption" name="caption" onChange={captionChangeHandler}  value={props.caption} placeholder="Enter caption"/>
    </div>
     <div className="formData">
     <label for="image">Image URL  </label>
    <input type="url" id="image" name="img_url" onChange={imgurlChangeHandler} value={props.img_url} placeholder="Enter image url"/>
    </div>
    {/* <div className="submit"> */}
    <button type="submit" className="submitButton" onClick={clickHandler}>Submit</button>
    {/* </div> */}
    </form> 
    <div className="temp" ></div>
    {/* <div><ul>{props.memeArray.map((memes, index) => <li key={index}>{memes.name} </li>)}</ul></div> */}
  
    
      </ >
    )
  
 
}

export default Form