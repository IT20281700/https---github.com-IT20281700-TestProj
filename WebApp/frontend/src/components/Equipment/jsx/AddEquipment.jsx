import React, { Component } from 'react';
import '../css/Add.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AddEquipment extends React.Component {

    constructor(props){
        super(props);

        this.setName = this.setName.bind(this);
        this.setId = this.setId.bind(this);
        this.setLocation = this.setLocation.bind(this);
        //this.setPhoto = this.setPhoto.bind(this);

        this.AddEquipment = this.AddEquipment.bind(this);

        this.state = {
            eqId: '',
            eqName: '',
            Location: '',
            photo: '',
            url: '',
            selectedFile: null
        }
    }

    setName(e){
        var n = /^[a-zA-Z]*$/g;
        if ((e.target.value.match(n))) {
        this.setState({eqName:e.target.value});
        }else{
            alert('Insert Letters Only !')
        }
    }

    setId(e){
        this.setState({eqId:e.target.value});
    }

    setLocation(e){
        this.setState({Location:e.target.value});
    }

    AddEquipment(e){

        const Equipment = {
            eqId: this.state.eqId,
            eqName: this.state.eqName,
            Location: this.state.Location,
            photo: this.state.url
        }

        if(Equipment.eqId!='' && Equipment.eqName!='' && Equipment.Location!='' && Equipment.photo!=''){

                axios.post('http://localhost:3001/equipment/add', Equipment)
                .then(()=>{
                    alert('Data Added !!');
                    window.location.reload();
                }).catch((err)=>{
                    alert(err.message);
                });
            }else{
                alert('Fill All Details !!');
            }
    }

    //change image
    onFileChange = event => {
        this.setState({ selectedFile: event.target.files[0] });     
      };

      //upload image
      onFileUpload = () => {
        if(this.state.selectedFile=null){
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
                    this.setState({photo:this.url});
            })
        }else{
            alert("Upload Image !")
        }
      };
    //html cord
    
        render() {
            return(
                <div>
            <br></br>
                    <h2 className="topic">Adding of Equipment</h2>
                        <div className="UPboder">
                            <div>
                                <label class="UPform">Name :-</label>
                                <input type="text" value={this.state.eqName} onChange={this.setName} class="form-control" style={{height:45, fontfamily: "'Georgia', cursive", textAlign:"center", marginLeft:70, width:800, fontSize:21}} placeholder="Equpment name" required/>
                            </div>
                            <div>
                                <br/>
                                <label class="UPform">ID :-</label>
                                <input type="text" value={this.state.eqId} onChange={this.setId} class="form-control" style={{height:45, fontfamily: "'Georgia', cursive", textAlign:"center", marginLeft:70, width:800, fontSize:21}} placeholder="Equpment id" required/>
                            </div>
                            <div>
                                <br/>
                                <label class="UPform">Location :-</label>
                                <input type="text" value={this.Location} onChange={this.setLocation} class="form-control" style={{height:45, fontfamily: "'Georgia', cursive", textAlign:"center", marginLeft:70, width:800, fontSize:21}} placeholder="Location availabale" required/>
                            </div>
                            <div>
                            <br/>
                                <label class="UPform">Uplode Image :-</label>
                                <div>

                                    <input style={{marginLeft:350,fontSize:21}} type="file" onChange={this.onFileChange}/>
                                    <br />
                                    <br />
                                    <div class="row">
                                    <button class="btn btn-dark" onClick={this.onFileUpload} style={{width:200, height:45,fontSize:22,marginLeft:165}}>uploading Image</button>
                                    <br/>
                                    <div style={{width:400, marginLeft:100}}>
                                
                                    <b style={{fontSize:20,marginLeft:-10}}><img style={{width:180,height:180}} src={this.state.url} alt="Waiting For Uploading Image "/></b>
                                    </div>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </div>
                        <div style={{marginLeft:450}}>
                            <button class="btn btn-dark" onClick={this.AddEquipment} type="button" style={{height:50, width:600, fontSize:24}}>Add Equipment</button>
                        </div>
                        <br/><br/>
    
                </div>
            )
        }
    }
    
    export default AddEquipment;