import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpclick = () => {
    console.log("uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("jdas");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3 my-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpclick}>
        Make Uppercase
      </button>
    </div>
  );
}

// Navbar.propTypes = { title: PropTypes.string, aboutText: PropTypes.string };
