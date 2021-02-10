import { useState } from "react";
import "./styles.css";

function Post(props) {
  const [formVisible, setFormVisible] = useState(false);
  const [like, setLike]= useState(0);

  const clickHandler = () => {
    setFormVisible(!formVisible);
  };

  const likeHandler = ()=>{

  }
  // const theme="default95";
  return (
    <div >
      <div className="userName" >{props.name}</div>
      <button className="post-container" onClick={clickHandler}> 
      <img className="image" src={props.url} />
      </button>
      <figcaptionn>
        
          <button>Like</button>
          <button>Comment</button>
          <button>Share</button>
      
          <button onClick={clickHandler}>Edit </button>    
      </figcaptionn>
      <div className="likes">Liked by {props.likes} people</div>
      <div className="caption">
        <span className="userName" id="username">{props.name}</span>
        <span>{props.caption}</span>
      </div>
      {formVisible && (
        <div class="edit-form">
          <input type="text" placeholder="enter caption"></input>
          <input type="text" placeholder="enter url"></input>
          <button>Submit</button>
        </div>
      )}
    </div>
  );
}
export default Post;
