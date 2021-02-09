import "./win95-style.scss";

import PostContainer from "./Post_container";
const MemeWindow=()=>{
    const arr = [
        {
          name: "name1",
          caption: "default caption1",
          url: "https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg"
        },
        {
          name: "name2",
          caption: "default caption2",
          url:
            "https://static.mommypoppins.com/styles/image620x420/s3/school_meme_3_0.jpg"
        },
        {
          name: "name3",
          caption: "default caption3",
          url: "https://www.iqmetrix.com/hubfs/Meme%2021.jpg"
        },
        {
          name: "name4",
          caption: "default caption4",
          url: "https://www.dictionary.com/e/wp-content/uploads/2018/03/dank-meme.jpg"
        },
        {
          name: "name5",
          caption: "default caption5",
          url:
            "https://analyticsindiamag.com/wp-content/uploads/2020/05/Screenshot-2020-05-08-at-1.07.54-PM.png"
        },
        {
          name: "name6",
          caption: "default caption6",
          url:
            "https://global-uploads.webflow.com/5f4dd3623430990e705ccbba/5f7f7c8e6edbbd779a48bf71_22601782810_cbe3ede5f5_o.focus-none.original.jpeg"
        },
        {
          name: "name7",
          caption: "default caption7",
          url:
            "https://www.maketecheasier.com/assets/uploads/2020/08/funny-memes-this-week-eighth-grade.jpg"
        }
      ];
      
    return (
        <>
        <main class="instagram" >
  <div class="inner">
    <header class="bar">
      <h1>Memogram.exe</h1>
      <div class="buttons">
        <a class="minimize"></a>
        <a class="maximize"></a>
        <a class="close"></a>
      </div>
    </header>
    <nav class="menu">
      <ul>
        <li>
          <a href="https://codepen.io/" target="_blank">Codepen</a>
        </li>
        <li>
          <a href="https://codepen.io/louh/pen/oZJQvm" target="_blank">Scrollbars</a>
        </li>
        <li>
          <a href="https://dribbble.com/shots/2872044-Instagram-For-Windows-95" target="_blank">Inspiration</a>
        </li>
      </ul>
    </nav>
    <div class="container">
      <input checked={true} class="menu-input" id="input-home" name="menu" type="radio"></input>
      <label class="menu-label" for="input-home">Home</label>
      <input class="menu-input" disabled={true} id="input-explore" name="menu" type="radio"></input>
      <label class="menu-label" for="input-explore">Explore</label>
      <input class="menu-input" disabled={true} id="input-camera" name="menu" type="radio"></input>
      <label class="menu-label" for="input-camera">Camera</label>
      <input class="menu-input" disabled={true} id="input-activity" name="menu" type="radio"></input>
      <label class="menu-label" for="input-activity">Activity</label>
      <input class="menu-input" id="input-profile" name="menu" type="radio"></input>
      <label class="menu-label" for="input-profile">Profile</label>
      <div class="content" style={{height:"502px", width:"312px"}}>
        <div class="content-section home">
          <div class="feed">
            <div class="feed-type" id="home"><PostContainer/></div>
          </div>
        </div>
        <div class="content-section profile">
          <header id="info"></header>
          <div class="feed">
            <div class="feed-type" id="profile"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
        </>
    )
}
export default MemeWindow;