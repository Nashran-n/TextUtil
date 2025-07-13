import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!","success")
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
     props.showAlert("Converted to Lowercase!","success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container"  style={{color: props.mode==="dark"?"white":"black"}}
>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{backgroundColor: props.mode==="dark"?"black":"white",color: props.mode==="dark"?"white":"black"}}

          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
      </div>
      <div className="container my-2" style={{color: props.mode==="dark"?"white":"black"}}>
        <h2>Your Text summary</h2>

        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>

        <p>{0.008 * text.split(" ").length} Minutes to Read</p>

        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
      </div>
    </>
  );
}
