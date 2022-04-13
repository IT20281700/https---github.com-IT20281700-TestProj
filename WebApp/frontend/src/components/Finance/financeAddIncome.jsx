import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class financeAddIncome extends React.Component {

    constructor(props){
        super(props);

        this.setCategory =this.setCategory.bind(this);
        this.setAmount = this.setAmount.bind(this);
        this.setyDate = this.setyDate.bind(this);
        this.setmDate = this.setmDate.bind(this);
        this.setdDate = this.setdDate.bind(this);
        this.setDescription = this.setDescription.bind(this);
        this.submit = this.submit.bind(this);

        this.state = {
            category:'',
            amount:'',
            yDate:'',
            mDate:'',
            dDate:'',
            description:''
        }

    }

    setCategory(e){
        this.setState({category:e.target.value});
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

        const income = {

           iCategory : this.state.category,
           amount: this.state.amount,
           yDate: this.state.yDate,
           mDate: this.state.mDate,
           dDate: this.state.dDate,
           description: this.state.description

        }
        if(income.iCategory!='' && income.amount!='' && income.yDate!='' && income.mDate!='' && income.dDate!='' && income.description!=''){

            axios.post('http://localhost:3001/Finance/addIncome', income)
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
                    <h1 style  = {{marginLeft: 480,fontfamily: 'Serif',marginLeft: 600,fontSize: 60}}>Add Income</h1><br></br>
                    <div style = {{backgroundColor: 'lightgrey',marginLeft:170,width: 1200,padding: 50,marginbottom: 70,margintop: 30,height: 700}} >
                   <div>
                  
                    <div>
                <label>Category :-</label>
                    

              <div class="form-check">
                    <input class="form-check-input" value="Service" type="radio" onChange={this.setCategory} name="flexRadioDefault"/>
                    <label class="form-check-label" for="flexRadioDefault1">
                      Services
                    </label>
                        </div>
                        
                        <div class="form-check">
                        <input class="form-check-input" Value="Maintenance" type="radio" onChange={this.setCategory} name="flexRadioDefault"/>
                        <label class="form-check-label" for="flexRadioDefault2">
                            Manintenance
                        </label>
                        </div>
                        
                        <div class="form-check">
                        <input class="form-check-input" value="Spare Sparts" type="radio" onChange={this.setCategory} name="flexRadioDefault"/>
                        <label class="form-check-label" for="flexRadioDefault2">
                            Spare Sparts
                        </label>
                        </div>
                        <label>Income Category :- {this.state.category}</label>
                        </div>
                        
                            <div>
                                <br/>
                                <label>Amount :-</label>
                                <input type="text"  class="form-control" value={this.state.amount} onChange={this.setAmount} style={{height:45,fontfamily: "'Georgia', cursive", textAlign:"center", marginLeft:70, width:800, fontSize:21}}/>
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
                        <br />
                        
                
                        <div> 
                            <button class="btn btn-dark" type="button" onClick={this.submit} style={{height:40,marginLeft:450,width:150, fontSize:20}}>Submit</button> 
                        </div>
                        <br/><br/> 
             </div>
           <br></br> </div><br></br><br></br>
           </div> 
        )
        }
    }
export default financeAddIncome;