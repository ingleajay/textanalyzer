import React from "react";
import { useState } from "react/cjs/react.development";


export default function FindAndReplace(props) {

  const [search_word, setSearchWord] = useState("");
  const [replace_word, setReplaceWord] = useState("");

  const Searchchange = (event) => {
    setSearchWord(event.target.value);
  };

  const Replacechange = (event) => {
    setReplaceWord(event.target.value);
  };


  const handleFindAndReplace = () => {
    props.text.length > 0
      ? props.showAlert("Replacement of word successfully !!", "success")
      : props.showAlert("Please write something !!", "danger");
    let f =  props.text.split(/\s+/);
    if(f.includes(search_word))
    {
      let k  =  props.text.split(/\s+/).toString();
      let h= k.replaceAll(search_word,replace_word);
      let newText = h.split(",");
      let final_str = newText.join(" ");
      props.setText(final_str);
    }

  }

  return (
    <>
      <div
        className="modal fade"
        id={props.modal}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Find And Replace word
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            <div className="alert alert-secondary" role="alert">
              <h6 className="text-center">Note : Please write exact word for replacement</h6>
            </div>
              <form>
                <div className="form-group">
                  <label htmlFor="search-word" className="col-form-label">
                    Search word:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="search-word"
                    value={search_word}
                    onChange={Searchchange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="replace-word" className="col-form-label">
                    Replace word:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="replace-word"
                    value={replace_word}
                    onChange={Replacechange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleFindAndReplace}>
                Replace All
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
