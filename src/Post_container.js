import "./styles.css";
import Post from "./Post.js";
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

function PostContainer() {
  const clickHandler = () => {
    console.log("hi");
  };

  return (
    <div className="post-section">
      <ul>
        {arr.map((val) => (
          <li>
            <Post url={val.url} name={val.name} onClick={clickHandler} />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default PostContainer;
