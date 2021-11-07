import React, { useState } from "react";
import FindAndReplace from "./FindAndReplace";
import UplaodFile from "./UplaodFile";


export default function TextForm(props) {

  const [text, setText] = useState("");

  const [modal] = useState("example");

  const [upload] = useState("uploadfile");

  const text_stack = []
  let txt = text.split(/[ ]+/);
  text_stack.push(txt);
 

  const convertupper = () => {
    let newText = text.toUpperCase();
    setText(newText);
    text.length > 0
      ? props.showAlert(
          "Converted text to upper case successfully !!",
          "success"
        )
      : props.showAlert("Please write something !!", "danger");
  };

  const convertlower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    text.length > 0
      ? props.showAlert(
          "Converted text to lower case successfully !!",
          "success"
        )
      : props.showAlert("Please write something !!", "danger");
  };

  const convertsentense = () => {
    let new_sentense = text.charAt(0).toUpperCase() + text.slice(1);
    setText(new_sentense);
    text.length > 0
      ? props.showAlert(
          "Converted text to sentense case successfully !!",
          "success"
        )
      : props.showAlert("Please write something !!", "danger");
  };

  const handlecopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied successfully !!", "success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    text.length > 0
      ? props.showAlert("Removed extra space successfully !!", "success")
      : props.showAlert("Please write something !!", "danger");
  };

  const convertTitleCase = () => {
    const arr = text.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const title_text = arr.join(" ");
    setText(title_text);
    text.length > 0
      ? props.showAlert("convert text to title case successfully !!", "success")
      : props.showAlert("Please write something !!", "danger");
  };

  const textchange = (event) => {
    setText(event.target.value);
  };

  const textclear = () => {
    let cleartext = "";
    setText(cleartext);
    text.length > 0
      ? props.showAlert("Text clear successfully !!", "success")
      : props.showAlert("Please write something !!", "danger");
  };


  const handleundo = () => {
    text_stack[0].pop();
    let c = text_stack[0].join(" ");
    setText(c)
  }

 

  return (
    
    <>
      <div className="container my-3">
        <div className="alert alert-secondary" role="alert">
          <h2 className="text-center">{props.heading}</h2>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            Text Cases
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button className="dropdown-item" onClick={convertupper}>
              UPPERCASE
            </button>
            <button className="dropdown-item" onClick={convertlower}>
              lowercase
            </button>
            <button className="dropdown-item" onClick={convertsentense}>
              Sentense case
            </button>
            <button className="dropdown-item" onClick={convertTitleCase}>
              Title Case
            </button>
          </div>
          <button className="btn btn-primary my-3 mx-1" onClick={textclear}>
          Clear
        </button>
        <button
          className="btn btn-primary my-1 mx-1"
          onClick={handlecopy}
          disabled={text.length === 0}
        >
          Copy
        </button>
        <button
          className="btn btn-primary my-1 mx-1"
          onClick={handleundo}
        >
          Undo
        </button>
        
        <button
          className="btn btn-primary my-1 mx-1"
          onClick={handleExtraSpace}
        >
          Remove Extra space
        </button>
        

        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#example" data-whatever="@mdo">Find and Replace</button>
        <button
          className="btn btn-primary my-1 mx-1"
          data-toggle="modal" data-target="#uploadfile"
        >
         Upload File
        </button>
        </div>

        <textarea
          className="form-control"
          value={text}
          onChange={textchange}
          id="mybox"
          placeholder="Write Something Here.."
          rows="8"
        ></textarea>
        <div className="row my-3">
          <div className="col my-1 ">
            <div className="card  bg-warning">
              <div className="card-body">
                <h5 className="text-white">
                  Word Count : {
                    text.split(/\s+/).filter((ele) => {
                      return ele.length !== 0;
                    }).length
                  }
                   
                </h5>
              </div>
            </div>
          </div>
          <div className="col my-1 ">
            <div className="card bg-danger ">
              <div className="card-body">
              <h5 className="text-white">Character Length : {text.length}</h5>
              </div>
            </div>
          </div>
          
          <div className="col my-1">
            <div className="card bg-info">
              <div className="card-body">
              <h5 className="text-white">Minutes to read : {0.008 * text.split(" ").length} min</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
              <div className="card-body">
                <h5 className="text-dark">Preview :</h5>
                <p className="card-text" >
                  
                  {text.length > 0
                    ? text
                    : "Enter something to see preview !! "}
                </p>
              </div>
            </div>
      </div>
      <FindAndReplace modal={modal} text={text} setText={setText} showAlert={props.showAlert}/>
      <UplaodFile upload={upload} showAlert={props.showAlert} setText={setText} />
    </>
  );
}
