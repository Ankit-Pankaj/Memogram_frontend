import "./win95-style.scss";
import Form from './Form'
import {useState} from 'react'
import PostContainer from "./Post_container";
import Profile from "./Profile"
const MemeWindow=(props)=>{
    
    const [caption,setCaption] = useState("");
    const [name, setName] = useState("");
    const [img_url, setImgurl]= useState("");

    // const [meme,setMeme]=useState([]); // Contains all the data of memes

    // const captionChangeHandler = (event) => {
    //     // console.log("caption: "+event.target.value);
    //     setCaption(event.target.value);
    // }
    // const nameChangeHandler=(event)=>{
    // // console.log("caption: "+event.target.value);
    //     setName(event.target.value);
    // }
    // const imgurlChangeHandler=(event)=>{
    // // console.log("caption: "+event.target.value);
    //     setImgurl(event.target.value);
    // }

   
    return (
        <>
        <main className="memogram" >
  <div className="inner">
    <header className="bar">
      <h1>Memogram.exe</h1>
      <div className="buttons">
        <a className="minimize"></a>
        <a className="maximize"></a>
        <a className="close"></a>
      </div>
    </header>
    <nav className="menu">
      <ul>
        <li>
          <a href="https://github.com/Ankit-Pankaj" target="_blank">Github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ankit-pankaj-411229b3/" target="_blank">Linkedin</a>
        </li>
        <li>
          <a href="https://dribbble.com/shots/2872044-Instagram-For-Windows-95" target="_blank">Inspiration</a>
        </li>
      </ul>
    </nav>
    <div className="container">
      <input checked={true} class="menu-input" id="input-home" name="menu" type="radio"></input>
      <label className="menu-label" for="input-home">Home</label>
      <input className="menu-input" disabled={true} id="input-explore" name="menu" type="radio"></input>
      <label className="menu-label" for="input-explore">Explore</label>
      <input className="menu-input" disabled={true} id="input-camera" name="menu" type="radio"></input>
      <label className="menu-label" for="input-camera">Camera</label>
      <input className="menu-input" disabled={true} id="input-activity" name="menu" type="radio"></input>
      <label className="menu-label" for="input-activity">Activity</label>
      <input className="menu-input" id="input-profile" name="menu" type="radio"></input>
      <label className="menu-label" for="input-profile">Upload</label>
      <div className="content" style={{height:"502px", width:"312px"}}>
        <div className="content-section home">
          <div className="feed">
            <div className="feed-type" id="home"><PostContainer fetchMeme={props.fetchMeme} memeArray={props.memeArray}/></div>
          </div>
        </div>
        <div className="content-section profile">
          <header id="info"></header>
          <div className="feed">
            <div className="feed-type" id="profile"></div>
          </div>
          <Profile  fetchMeme={props.fetchMeme} memeArray={props.memeArray}/>
          {/* <Form 
            fetchMeme={props.fetchMeme} 
            memeArray={props.memeArray} 
            caption={caption} 
            setCaption={setCaption} 
            name={name} setName={setName} 
            img_url={img_url} 
            setImgurl={setImgurl}/> */}
        </div>
      </div>
    </div>
  </div>
</main>
        </>
    )
}
export default MemeWindow;