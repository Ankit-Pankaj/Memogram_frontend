import { useState } from "react";
import "./styles.css";
import axios from "axios"

function Post(props) {
  const [formVisible, setFormVisible] = useState(false); //boolean state to toogle edit form visible
  const [likes, setLikes] = useState(props.likes);    // temporary local variable likes
  
  const clickHandler = () => {                  // function to toogle formVisible
    setFormVisible(!formVisible);
  };


  // ------------------*-*-*-*- Important -*-*-*-*--------------------------------------- 

  // Here the increasing likes function uses a very smart technique to render likes on page.
  // I dont want to fetch whole data everytime I increase likes on a page so I found a smart solution for that
  // Now whenever page renders for first time it fetches data from backend and stores the value in temporary vraiable "likes".
  // Now when I click on likes button then it only only send put request to the servers but dont
  // fetch data again, instead I am increasing the local variable likes and rendering it on page.
  //  It is reducing time complexity drastically.

  // function to increase likes
  const likeHandler = async (event)=>{
    event.preventDefault();
    const url = "http://localhost:3000/memes/"+props.id;
    // console.log(url);
    // console.log(event);
    await axios({
      method:'put',
      url: url,
    })
    setLikes(likes+1);
  }

  // const editHandler=async (event)=>{
  //   event.preventDefault();
  //   // console.log(event);
  //   await axios({
  //     method:'patch',
  //     url: 'http://localhost:3000/memes/id',
  //     data:{
  //       url:"",
  //       caption:"caption",
  //     }

  //   })

  // }
  return (
    <div >
      <div className="userName" >{props.name}</div>
      <button className="post-container" onClick={clickHandler}> 
      <img className="image" src={props.url} />
      </button>
      <figcaptionn>
        
          <button onClick={likeHandler}>Like</button>
          <button>Comment</button>
          <button>Share</button>
      
          <button onClick={clickHandler}>Edit </button>    
      </figcaptionn>
      <div className="likes">Liked by {likes} people</div>
      <div className="caption">
        <span className="userName" id="username">{props.name}</span>
        <span>{props.caption}</span>
      </div>
      {formVisible && (
        <div class="edit-form">
          <input type="text" placeholder="enter caption" ></input>
          <input type="text" placeholder="enter url" ></input>
          <button onClick={likeHandler}>Submit</button>
        </div>
      )}
    </div>
  );
}
export default Post;
