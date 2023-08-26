import React, { useState, useRef, useMemo } from "react";
import "./style.css";
import JoditEditor from "jodit-react";


export default function CrtBlog(props) {
    const editor = useRef(null);
    const [content, setContent] = useState("");



  return (
    <div className="Crtblog-screen">
      <input
        type="text"
        placeholder="Title"
        className="Crtblog-sub-screen"
      ></input>
      <JoditEditor
        ref={editor}
        value={content}
        // config={config}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => {}}
      />
      {/* <div className="Crtblog-sub-screen"></div> */}
    </div>
  );
}
