import React, { useState } from "react";

export default function UplaodFile(props) {
  const [uplaodfile, setUploadFile] = useState("");

  const handleUplaodFile = () => {
    if (uplaodfile.length > 0) {
      document.getElementById("content").innerHTML = `
                        <b>File Name :</b> ${uplaodfile[0].name} <br/> 
                        <b>File Type :</b> ${uplaodfile[0].type}<br/>
                        <b>File Size:</b> ${uplaodfile[0].size} Byte <br/>
                        <b>File Date:</b> ${uplaodfile[0].lastModifiedDate}
                    
                     `;

      if (uplaodfile[0].type === "text/plain") {
        var reader = new FileReader();
        reader.addEventListener("loadend", function () {
          props.setText(reader.result);
        });
        reader.readAsText(uplaodfile[0]);
        props.showAlert("Document uploaded successfully!!", "success");
      } else {
        props.showAlert("This type is not allowed", "danger");
      }
    } else {
      props.showAlert("Select only one document!!", "danger");
    }
  };

  const UplaodFileChange = (event) => {
    setUploadFile(event.target.files);
  };

  return (
    <div
      className="modal fade"
      id={props.upload}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Uplaod your document
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
              <h6 className="text-center">
                Note: Supported formats Plain Text only
              </h6>
            </div>
            <form>
              <div className="form-group">
                <label htmlFor="search-word" className="col-form-label">
                  Uplaod File :
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="upload-file"
                  onChange={UplaodFileChange}
                />
                <div id="content" className="my-3"></div>
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
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleUplaodFile}
            >
              Upload File
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
