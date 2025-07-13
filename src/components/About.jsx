import React from "react";
import { useState } from "react";

const About = (props) => {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  //   border: "1px solid white",
  // });

let myStyle = {

color : props.mode == "dark" ? "white" : "black",
backgroundColor : props.mode == "dark" ? "#0c0712" : "white"

}

 

  return (
    <div className="container" style={myStyle}>
      <h2 className="my-3">About Us</h2>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
             <strong>Analyze Your Text</strong> 
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body">
             TextUtils gives you a way to Analyze your text quickly and efficiently . Be it Word count , Character count
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
             Textutils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters . Thus it is suitable for writing text with word / character limit . 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
             <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
             This word counter software works in any web browser such as chrome , firefox , IE , safari , opera , it suits to count characters in facebook , blog , books , excel document , pdf document , essays etc. 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
