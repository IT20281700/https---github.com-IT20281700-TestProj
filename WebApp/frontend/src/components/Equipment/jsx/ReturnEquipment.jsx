import '../css/Return.css'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ReturnEquipment extends React.Component {

    constructor(props){
        super(props);

        this.getObt = this.getObt.bind(this);
        this.setId = this.setId.bind(this);
        this.deleteObt = this.deleteObt.bind(this);

        this.state={
            obt:[],
            id:''
        }

    }

    setId(e) {
        this.setState({id:e.target.value});
    }

    getObt(id, e) {
        axios.get(`http://localhost:3001/equipment/getobtainequ/${id}`)
        .then(res => {
            this.setState({obt: res.data});
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    deleteObt(id, e){  
        if(window.confirm('Are You Sure Return Equipment??')){
            axios.delete(`http://localhost:3001/equipment/deleteobtainequ/${id}`)  
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
                <br></br>
                <h2 className="rtopic">Return Equipment</h2>

                <div className="rboder">
                
                    <div class="row">
                        <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg" style={{fontSize:24, fontFamily:"Serif"}}>Employee Id  :- </label>

                        <div class="col-sm-7">
                            <input type="text" value={this.state.id} onChange={this.setId} class="form-control" style={{height:55, fontfamily: "'Georgia', cursive"}} placeholder="XX xxxxxx" aria-label="City"/>
                        </div>
                        
                        <div class="col-auto" style={{marginLeft:60}}>
                            <button type="submit" class="btn btn-dark" onClick={(e)=> this.getObt(this.state.id, e)} style={{height:55, width:150, fontSize:24, fontfamily: "'Georgia', cursive"}}>Submit</button>
                        </div>

                    </div>

                    {this.state.obt.map((obt)=>{
                            return(
                                <div>

                                    <div class="container">
                                        <div class="row">

                                            <div class="col-6 col-sm-3" style={{width:500, marginLeft:350,}}>
                                                <div style={{marginTop:30}}>
                                                <label className="returneq1">My ID :</label><label className="requ1_1">- {obt.emId}</label><br/>
                                                <label className="returneq2">Taken Tools :</label><label className="requ1_1">- {obt.eqName}</label><br/>
                                                </div>
                                            </div>
                                            <div style={{marginLeft:200,marginTop:45}}>
                                                <button class="btn btn-dark" onClick={(e)=> this.deleteObt(obt._id, e)} type="button" style={{height:50, width:600, fontSize:24}}>Return</button>
                                            </div>
                                                                        
                                        </div>

                                    </div>  
                                </div>

                            );
                        })}

                </div>
                
                
            </div>
        )
    }
}

export default ReturnEquipment;