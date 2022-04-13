import '../css/ObtainEquipment.css'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ObtainEquipment extends React.Component {

    constructor(props){
        super(props);

        this.setObtain = this.setObtain.bind(this);
        this.setId = this.setId.bind(this);
        this.add = this.add.bind(this);

        this.state ={
            Equ:[],
            obt:'',
            id:'',
        }
    }

    setId(e){
        this.setState({id:e.target.value});
    }
    setObtain(e){
        this.setState({obt:e.target.value});
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

    add(e){
        const addObt = {
            emId: this.state.id,
            eqName: this.state.obt,
        }

        if(addObt.emId!='' && addObt.eqName!=''){

            axios.post('http://localhost:3001/equipment/obtainequ', addObt)
            .then(()=>{
                alert('Data Successfuly Inserted !');
            }).catch((err)=>{
                alert(err.message);
            });
        }else{
            alert('Add Data Correctly !');
        }
    }

    //html cord
    
        render() {
            return(
                <div>
                
                <br></br>
                <h2 className="topic"> Equipment</h2><br/>

                <div style={{paddingBottom:20,marginLeft:50}}>
                
                    <div className="row">
                        <label for="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg" style={{fontSize:24, fontFamily:"Serif",marginLeft:30}}>Employee Id  :- </label>

                        <div className="col-sm-7"style={{marginLeft:40}}>
                            <input type="text" value={this.state.id} onChange={this.setId} className="form-control" style={{height:55, fontfamily: "'Georgia', cursive",width:650}} placeholder="XX xxxxxx" aria-label="City"/>
                        </div>

                        <div className="col-auto" style={{marginLeft:-30}}>
                            <button type="submit" className="btn btn-dark" onClick={this.add} style={{height:55, width:200, fontSize:24, fontfamily: "'Georgia', cursive"}}>I got</button>
                        </div>

                                                    <div className='selectequ'><br/>
                                                    <li className="leble" style={{fontSize:25}}>Selected Equipment is :- {this.state.obt}</li><br/>
                                                    </div>

                    </div>

                            {this.state.Equ.map((equ)=>{
                                return(
                                    <div>
                                        
                                        
                                            <div className="card bg-dark text-black shadow" style={{margin:50}}>
                                                <div className="row">
                                                    <div className="col-6 col-sm-3">
                                                        <div class="card bg-success text-white shadow" style={{margin:20, height:300}}>
                                                        <img src={equ.photo} style={{width:220, height:240, margin:30,}} alt="" />
                                                        </div>
                                                    </div>

                                                        <div className="col-6 col-sm-3">
                                                        <div class="card bg-light text-white shadow" style={{padding:20, border:'black', margin:20, height:300, width:980}}>
                                                        <div className="obeq">
                                                                <label className="equ1">Name  :</label><label className="equ1_1">- {equ.eqName}</label><br/>
                                                                <label className="equ2">ID :</label><label className="equ1_2">- {equ.eqId}</label><br/>
                                                                <label className="equ3">Location available :</label><label className="equ1_2">- {equ.Location}</label><br/>
                                                                </div>

                                                                <div className="form-check" style={{width:800}}><br/>
                                                                    <input className="form-check-input" type="radio" name="serCategory" id="A/C_Vehicals" value={equ.eqName} onChange={this.setObtain} style={{marginLeft:350}}/>
                                                                    <label className="radio" style={{fontSize:24,marginLeft:50,marginTop:-11,color:'black'}} >
                                                                <b> I want</b>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        </div>
                                                </div>
                                            </div>
                                            
                                        </div>  


                                );
                            })}

                </div>
                    <br/>

                </div>
            )
        }
    }
    
    export default ObtainEquipment;