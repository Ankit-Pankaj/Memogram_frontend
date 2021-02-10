import React, { useState } from "react";
import Form from "./Form";
import PostContainer from "./Post_container";
import MemeWindow from "./MemeWindow";
import "./reset.css";
import "./win95-style.scss";

function App() {
  return (
    <div class="light">
      {/* <Form/> */}
      <MemeWindow />
      {/* <PostContainer/> */}
    </div>
  );
}

export default App;
