import { useHistory } from 'react-router-dom';
import React, { Component } from 'react';
import axios from 'axios';
import ImageUploading from 'react-images-uploading';

class upImage extends React.Component {

    state = {
        url: '',
        selectedFile: null
      };

      onFileChange = event => {
        this.setState({ selectedFile: event.target.files[0] });     
      };

      onFileUpload = () => {
        const file = new FormData();
      
        file.append(
          "file",
          this.state.selectedFile,
          this.state.selectedFile.name
        );
      
        // Details of the uploaded file
        console.log(this.state.selectedFile);
      
        axios.post("http://localhost:3001/equipment/upload", file)
        .then(req=>{
                this.setState({url:req.data});
        })
      };

          // File content to be displayed after
    // file upload is complete
    fileData = () => {
    
        if (this.state.selectedFile) {
           
          return (
            <div>
                              <input type="text" value={(this.state.url)} />
              <h2>File Details:</h2>
               
  <p>File Name: {this.state.selectedFile.name}</p>
   
               
  <p>File Type: {this.state.selectedFile.type}</p>
   
               
  <p>
                Last Modified:{" "}
                {this.state.selectedFile.lastModifiedDate.toDateString()}
              </p>
   
            </div>
          );
        } else {
          return (
            <div>
              <br />
              <h4>Choose before Pressing the Upload button</h4>
            </div>
          );
        }
      };


    render() {
        return(
            <div>
            <h1>-- Image Upload --</h1>

            <br /><br />

            <input type="file" onChange={this.onFileChange}/>
            <button onClick={this.onFileUpload}>upload</button>

            {this.fileData()}
            </div>
        )
    }

}

export default upImage;