import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class financeAddExpenditure extends React.Component {

    constructor(props){
        super(props);

        this.setIname =this.setIname.bind(this);
        this.setAmount = this.setAmount.bind(this);
        this.setyDate = this.setyDate.bind(this);
        this.setmDate = this.setmDate.bind(this);
        this.setdDate = this.setdDate.bind(this);
        this.setDescription = this.setDescription.bind(this);
        this.submit = this.submit.bind(this);

        this.state = {
            iname:'',
            amount:'',
            yDate:'',
            mDate:'',
            dDate:'',
            description:''
        }

    }

    
    setIname(e){
        this.setState({iname:e.target.value});
    }

    setAmount(e){
        const re = /^[+-]?\d*(?:[.,]\d*)?$/;
        if (e.target.value === '' || re.test(e.target.value)) {
        this.setState({amount:e.target.value});
        }else{
            alert('Enter Number Only !');
        }
    }

    setyDate(e){
        const re = /^[+-]?\d*(?:[.,]\d*)?$/;
        if (e.target.value === '' || re.test(e.target.value)) {
        this.setState({yDate:e.target.value});
        }else{
            alert('Enter Number Only !');
        }
    }

    setmDate(e){
        const re = /^[+-]?\d*(?:[.,]\d*)?$/;
        if (e.target.value === '' || re.test(e.target.value)) {
        this.setState({mDate:e.target.value});
        }else{
            alert('Enter Number Only !');
        }
    }

    setdDate(e){
        const re = /^[+-]?\d*(?:[.,]\d*)?$/;
        if (e.target.value === '' || re.test(e.target.value)) {
        this.setState({dDate:e.target.value});
        }else{
            alert('Enter Number Only !');
        }
    }

    setDescription(e){
        this.setState({description:e.target.value});
    }    

    submit(e){

        const expenditure = {

           iname: this.state.iname,
           amount: this.state.amount,
           yDate: this.state.yDate,
           mDate: this.state.mDate,
           dDate: this.state.dDate,
           description: this.state.description

        }
        if(expenditure.iname!='' && expenditure.amount!='' && expenditure.yDate!='' && expenditure.mDate!='' && expenditure.dDate!='' && expenditure.description!=''){

            axios.post('http://localhost:3001/Finance/addexpenditure', expenditure)
            .then(()=>{
                alert('Date Added !!');
                window.location.reload();
            }).catch((err)=>{
                alert(err.message)
            });
            
        }else{
            alert('Fill All Details !')
        }
    }

    render(){
        return(
            <div> 
                <br></br>
                    <h1 style  = {{marginLeft: 480,fontfamily: 'Serif',marginLeft: 550,fontSize: 60}}>Add Expenditure</h1><br></br>
                    <div style = {{backgroundColor: 'lightgrey',marginLeft:170,width: 1200,padding: 50,marginbottom: 70,margintop: 30,height: 700}} >
                    <div>
              <div>
                                <br/>
                                <label>Name :-</label>
                                <input type="text" value={this.state.iname} onChange={this.setIname}  class="form-control" style={{height:45, fontfamily: "'Georgia', cursive", textAlign:"center", marginLeft:70, width:800, fontSize:21}}/>
                            </div>
                  
                        
                            <div>
                                <br/>
                                <label>Amount :-</label>
                                <input type="text"  class="form-control" value={this.state.amount} onChange={this.setAmount} style={{height:45, fontfamily: "'Georgia', cursive", textAlign:"center", marginLeft:70, width:800, fontSize:21}}/>
                            </div>
                            <div>
                                <br/>
                                
                                <label>Year :-</label>
                                <input type="text" value={this.state.yDate} onChange={this.setyDate} class="form-control" style={{height:45, fontfamily: "'Georgia', cursive", textAlign:"center", marginLeft:70, width:800, fontSize:21}}/>

                                <label>Month :-</label>
                                <input type="text" value={this.state.mDate} onChange={this.setmDate} class="form-control" style={{height:45, fontfamily: "'Georgia', cursive", textAlign:"center", marginLeft:70, width:800, fontSize:21}}/>
                            
                                <label>Date :-</label>
                                <input type="text" value={this.state.dDate} onChange={this.setdDate} class="form-control" style={{height:45, fontfamily: "'Georgia', cursive", textAlign:"center", marginLeft:70, width:800, fontSize:21}}/>
                            </div>
                            <div>
                                <br />
                                <label>Description :-</label><br />
                                <input type="text" value={this.state.description} onChange={this.setDescription} class="form-control" style={{height:80, fontfamily: "'Georgia', cursive", textAlign:"center", marginLeft:70, width:800, fontSize:21}}  />
                            </div>
                        
                            <br></br>
                        <div style={{marginLeft:450, marginBottom:50,}}> 
                            <button class="btn btn-dark" onClick={this.submit} type="button" style={{height:40,marginLeft:-20,width:150, fontSize:20}}>Submit</button> 
                        </div>
                        <br/><br/> <br></br>
             </div>
           <br></br> </div><br></br><br></br>
           </div> 
        )
        }
    }
export default financeAddExpenditure;