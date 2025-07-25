import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="mb-2">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length == 0}
          className="btn btn-primary mx-2"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length == 0}
          className="btn btn-primary mx-2"
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        
        <button
          disabled={text.length == 0}
          className="btn btn-primary mx-2"
           onClick={handleClearClick}
        >
          Clear Text
        </button>

           <button
          disabled={text.length == 0}
          className="btn btn-primary mx-2"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        
          <button
          disabled={text.length == 0}
          className="btn btn-primary mx-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>



      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text summary</h2>

        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length != 0;
            }).length
          }{" "}
          words and {text.replace(/\s/g, "").length} characters
        </p>

        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length != 0;
            }).length}{" "}
          Minutes to Read
        </p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview here"}</p>
      </div>
    </>
  );
}
