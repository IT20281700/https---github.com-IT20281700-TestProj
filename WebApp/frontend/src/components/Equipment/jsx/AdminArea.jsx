import '../css/AdminArea.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import genaratePDFEquipment from '../report/reportGenatater';

class AdminArea extends React.Component {

    
    nextPath(path){ 
        this.props.history.push(path)
    }

    constructor(props){
        super(props);

        this.setName = this.setName.bind(this);
        this.setId = this.setId.bind(this);
        this.setLocation = this.setLocation.bind(this);

        this.state={
            eqName:'',
            eqId:'',
            Location:''
        }

        this.state={Equ:[]};
    }

    setName(e){
        this.setState({eqName:e.target.value});
    }

    setId(e){
        this.setState({eqId:e.target.value});
    }

    setLocation(e){
        this.setState({Location:e.target.value});
    }

    componentDidMount() {
        axios.get('http://localhost:3001/equipment/getall')
        .then(res => {
            this.setState({Equ: res.data});
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    updatePackege(id, e){

        const Packege = {
            eqId: this.state.eqId,
            eqName: this.state.eqName,
            Location: this.state.Location
        }
        axios.put(`http://localhost:3001/equipment/update/${id}`, Packege)
        .then(()=>{
            alert('Updated !');
        }).catch((err)=>{
            alert(err.message);
        });
    }

    deleteService(id, e){  
        if(window.confirm('Are You Sure Delete Equipment ??')){
            axios.delete(`http://localhost:3001/equipment/delete/${id}`)  
            .then(res => {  
                console.log(res);  
                console.log(res.data);
                window.location.reload();
            
                const equ = this.state.Equ.filter(item => item.id !== id);  
                this.setState({ equ });  
            })
        }
    }
    //html cord
    
        render() {
            return(
                <div>
                
                    <h2 className="topic">Equipment</h2>
 
                        <button  className="btn btn-info" type="submit" onClick={()=> this.nextPath('/Equipment/Add')} style={{height:60, width:280, fontSize:24, fontfamily: "'Georgia', cursive",marginLeft:40}}>Add New Equipment</button>
                        <button  className="btn btn-info" type="submit" onClick={()=> {genaratePDFEquipment(this.state.Equ)}} style={{height:60, width:280, fontSize:24, fontfamily: "'Georgia', cursive",marginLeft:850}}>Genarate PDF Report</button>

                        {this.state.Equ.map((equ)=>{
                            return(
                                <div>

                                    <div class="container"><br/>
                                    <div className="boderadmin">
                                        <div class="row">
                                            <div class="col-6 col-sm-3">
                                               
                                                    <img src={equ.photo} style={{width:200, height:260, margin:28, marginLeft:23,marginTop:33}} alt="" />
                                                 
                                            </div>

                                            <div class="col-6 col-sm-3">
                                                <div className="admineq" style={{width:500}}>  
                                                            <label className="adminequ1">Name  :</label><label className="aequ1_1">- {equ.eqName}</label><br/>
                                                            <label className="adminequ2">ID :</label><label className="aequ1_2">- {equ.eqId}</label><br/>
                                                            <label className="adminequ3">Location available :</label><label className="aequ1_2">- {equ.Location}</label><br/>
                                                </div>

                                                    <div class="d-grid gap-2 d-md-flex justify-content-md-center" style={{marginTop:10}}>
                                                        <button class="btn btn-dark" onClick={(e) => this.deleteService(equ._id, e)} type="button" style={{height:45, width:160, fontSize:20, fontfamily: "'Georgia', cursive"}}>Delete</button>
                                                    </div>
                                            </div>

                                            <div class="col-6 col-sm-3" style={{backgroundColor:'gray',marginLeft:90,width:507,height:328}}>
                                                <form onSubmit={(e) => this.updatePackege(equ._id, e)}>
                                                    <div>
                                                        <label className="aequ1" htmlFor="">Name :-</label>
                                                        <input className="admininput" type="text" onChange={this.setName} placeholder={equ.eqName} required />
                                                    </div>

                                                    <div>
                                                        <label className="aequ2" htmlFor="">ID :-</label>
                                                        <input className="admininput" type="text" onChange={this.setId} placeholder={equ.eqId} required />
                                                    </div>

                                                    <div>
                                                        <label className="aequ3" htmlFor="">Location available :-</label>
                                                        <input className="admininput" type="text" onChange={this.setLocation} placeholder={equ.Location} required />
                                                    </div>
                                                    <br/>
                                                    <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                                        <button class="btn btn-dark" type="submit" style={{height:45, width:160, fontSize:20, fontfamily: "'Georgia', cursive"}}>Update</button>
                                                    </div>
                                                </form>
                                            </div>
                                        
                                        </div>
                                    </div>
                                    <br/>
                                    </div>  
                                </div>

                            );
                        })}
  
                    
    
                </div>
            )
        }
    }
    
    export default withRouter(AdminArea);