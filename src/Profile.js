import { useState } from "react";
import Form from "./Form";
const Profile = (props) => {
 
    const handleImageError=(ev)=>{
        console.log(ev.target.src);
        if(ev.target.src==="http://localhost:3001/"){
            ev.target.src= "https://i.imgflip.com/23fdf5.jpg"
        }
        else{

            // ev.target.src="https://img.freepik.com/free-vector/404-error-background-with-robot_23-2147763966.jpg"
            ev.target.src="https://sayingimages.com/wp-content/uploads/404-not-found-first-403-meme.jpg"
        }
    }

  const [caption, setCaption] = useState("");
  const [name, setName] = useState("");
  const [img_url, setImgurl] = useState("");

  return (
    <div class="content-section profile">
      <header id="info"></header>
      <div class="feed">
        <div class="feed-type" id="profile">
          {/* Test Feed */}
          <img src={img_url} onError={handleImageError}></img>
        </div>
      </div>
      <Form
        fetchMeme={props.fetchMeme}
        memeArray={props.memeArray}
        caption={caption}
        setCaption={setCaption}
        name={name}
        setName={setName}
        img_url={img_url}
        setImgurl={setImgurl}
      />
    </div>
  );
};

export default Profile;
