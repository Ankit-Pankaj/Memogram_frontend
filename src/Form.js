import React, {useState, useEffect} from 'react';
import axios from "axios"
function Form () {

  //running on port 3001

const [caption,setCaption] = useState("default caption");
const [name, setName] = useState("");
const [img_url, setImgurl]= useState("");

const [meme,setMeme]=useState([]);

const captionChangeHandler = (event) => {
    // console.log("caption: "+event.target.value);
    setCaption(event.target.value);
}
const nameChangeHandler=(event)=>{
  // console.log("caption: "+event.target.value);
    setName(event.target.value);
}
const imgurlChangeHandler=(event)=>{
  // console.log("caption: "+event.target.value);
    setImgurl(event.target.value);
}



const clickHandler =async (event) => {
    event.preventDefault();
    console.log(event);
    await axios({
      method:'post',
      url: 'http://localhost:3000/memes',
      data:{
        name:name,
        url:img_url,
        caption:caption,
      }

    })
    setImgurl("");
    setCaption("");
    setName("");

    axios.get('http://localhost:3000/memes').then((response) => {
            console.log(response.data.data)
            let data = [];
            console.log(response.data.data.length);

            for(var i =0; i < response.data.data.length; i++){
                data.push(response.data.data[i])
            }
            // this.setState({todos: data})
            setMeme(data);
        });

  }

  useEffect(() => {
    
    axios.get('http://localhost:3000/memes').then((response) => {
      console.log(response.data.data)
      let data = [];
      console.log(response.data.data.length);

      for(var i =0; i < response.data.data.length; i++){
          data.push(response.data.data[i])
      }
      // this.setState({todos: data})
      setMeme(data);
  });
    
  },[]);

// axios.post('http://localhost:3000', { owner, caption, img_url }); shortform to send axios request


   
    return (
      <>
     <form id="userform" method="POST">
    <div><label for="owner"> Meme Owner  </label>
    <input type="text" id="owner" name="owner" onChange={nameChangeHandler} value={name} placeholder="enter your name"></input>
    </div>
   
    <div>
     <label for="caption" >Caption  </label>
    <input type="text" id="caption" name="caption" onChange={captionChangeHandler}  value={caption} placeholder={caption}/>
    </div>
     <div>
     <label for="image">Image URL  </label>
    <input type="url" id="image" name="img_url" onChange={imgurlChangeHandler} value={img_url} placeholder="enter image url"/>
    </div>
    <input type="submit" onClick={clickHandler}/>
    </form> 
    <div><ul>{meme.map((memes, index) => <li key={index}>{memes.name} </li>)}</ul></div>
  
    
      </>
    )
  
 
}

export default Form