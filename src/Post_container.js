import "./styles.css";
import React, {useState, useEffect} from 'react';
import Post from "./Post.js";
import axios from "axios"
// const arr = [
//   {
//     name: "cgDude",
//     caption: "Hi it’s been a while 💚 Made a few plant purchases over the weekend that I’m thrilled to have in my collection!",
//     url: "https://scontent-del1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/146939660_711795529531353_1331707236872143758_n.jpg?_nc_ht=scontent-del1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=zNkUnn64dLkAX9kHQxo&tp=1&oh=70f58959920ab1d07609bff8854effdb&oe=604C9AB3",
//     likes:10
//   },
//   {
//     name: "Aki",
//     caption: "default caption2",
//     url:
//       "https://scontent-del1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p750x750/147450542_334493954497595_7079107515877822080_n.jpg?_nc_ht=scontent-del1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=5omqf33u-lkAX9f736C&tp=1&oh=401cca8ed5573bb148ea2c0bdf82e1d6&oe=604D1DE9",
//       likes:10
//   },
//   {
//     name: "Vishnu Kumar",
//     caption: "default caption3",
//     url: "https://scontent-del1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p750x750/147184824_483008516424779_1147338500867750321_n.jpg?_nc_ht=scontent-del1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=T9QcvbU3264AX8z7Zrp&tp=1&oh=2064be0023f6dd2669d4008b9fe64e36&oe=604C75A1",
//     likes:10
//   },
//   {
//     name: "Prashant",
//     caption: "default caption4",
//     url: "https://www.google.com/",
//     likes:10
//   },
//   {
//     name: "Pratham Singh",
//     caption: "default caption5",
//     url:
//       "https://analyticsindiamag.com/wp-content/uploads/2020/05/Screenshot-2020-05-08-at-1.07.54-PM.png",
//       likes:10
//   },
 
// ];

function PostContainer(props) {
  const [arr, setMeme]=useState([]);
  
  const clickHandler = () => {
    console.log("hi");
  };

  return (
    <div className="post-section">
      <ul>
        {props.memeArray.map((val) => (
          <li>
            <Post url={val.url} name={val.name} likes={val.likes} caption={val.caption} id={val.id}  onClick={clickHandler} />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default PostContainer;
