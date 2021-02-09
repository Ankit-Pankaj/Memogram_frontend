import { useState } from "react";
import "./styles.css";

function Post(props) {
  const [formVisible, setFormVisible] = useState(false);

  const clickHandler = () => {
    setFormVisible(!formVisible);
  };

  return (
    <div className="">
      <button className="post-container" onClick={clickHandler}>
      
        <img className="image" src={props.url} />
      </button>
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
