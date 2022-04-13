import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import generatePDFIncome from './Report/ReportGenerater';

class incomeReport extends React.Component{

    constructor(props){
        super(props);

        
        this.setAmount = this.setAmount.bind(this);
        this.update = this.update.bind(this);

        this.state={
            amount:'',
            income:[]
        }
    }

    setAmount(e){
        this.setState({amount:e.target.value});
    }

    componentDidMount(){
        axios.get('http://localhost:3001/Finance/allIncome')
        .then(res=>{
        this.setState({income:res.data});
    
        }).catch((err)=>{
            alert(err.message)
        });
    }

    deleteService(id, e){  
        if(window.confirm('Are You Sure Delete ??')){
            axios.delete(`http://localhost:3001/Finance/deleteIncome/${id}`)  
            .then(res => {  
                console.log(res);  
                console.log(res.data);
                window.location.reload();
            
                const Service = this.state.income.filter(item => item.id !== id);  
                this.setState({ Service });  
            })
        }
    }

    update(id, e){
        if(this.state.amount!=''){

            const Packege = {
                amount: this.state.amount,
            }
            axios.put(`http://localhost:3001/Finance/updateIncome/${id}`, Packege)
            .then(()=>{
                alert('Data Updated !');
                window.location.reload();
            }).catch((err)=>{
                alert(err.message);
            });
        }else{
            alert('Enter Update Amount !')
        }
    }

    render(){
        return(
           <div>
               

            <h1 style  = {{marginLeft: 480,fontfamily: 'Serif',fontSize: 60}}>Daily Income Report</h1>

            <div style = {{backgroundColor: 'lightgrey', margin:50, padding:50}} >
            <button type="button"className="btn btn-dark" onClick={()=>{generatePDFIncome(this.state.income)}}>All Incomes</button>
            <table style={{"borderWidth":"1px",backgroundColor:'white','borderColor':'black',marginLeft:150, 'borderStyle':'solid',width:1000}}> 
                <thead>
                    <tr style={{"borderWidth":"1px", 'borderColor':'black',backgroundColor:'grey', 'borderStyle':'solid'}}>
                        <th style={{"borderWidth":"1px",padding:10,textAlign:'center','borderColor':'black', 'borderStyle':'solid'}}>Date</th>
                        <th style={{"borderWidth":"1px",padding:10, textAlign:'center','borderColor':'black', 'borderStyle':'solid'}}>Income Amount</th>
                        <th style={{"borderWidth":"1px",padding:10,textAlign:'center', 'borderColor':'black', width:500,'borderStyle':'solid'}}>Update Amount</th>
                        <th style={{"borderWidth":"1px",padding:10, textAlign:'center','borderColor':'black', 'borderStyle':'solid'}}>Delete</th>
                    </tr>
                </thead>

                {this.state.income.map((income)=>{
                return(
                    <tbody>
                        <tr>
                            <th style={{"borderWidth":"1px",padding:10,textAlign:'center','borderColor':'black', 'borderStyle':'solid'}}>{income.yDate}-{income.mDate}-{income.dDate}</th>
                            <th style={{"borderWidth":"1px",padding:10, textAlign:'center','borderColor':'black', 'borderStyle':'solid'}}>{income.amount}</th>
                            <th style={{"borderWidth":"1px",padding:10,textAlign:'center', 'borderColor':'black', 'borderStyle':'solid'}}>
                                <input type="text" onChange={this.setAmount} placeholder={income.amount} />
                                <button style={{marginLeft:100}} type="submit" class="btn btn-secondary" onClick={(e) => this.update(income._id, e)}>Update Amount</button>
                            </th>
                            <th style={{"borderWidth":"1px",padding:10,borderColor:'black','borderStyle':'solid'}}>
                            <button style={{marginLeft:45}}type="submit"class="btn btn-primary" onClick={(e) => this.deleteService(income._id, e)}>Delete</button></th>
                        </tr>
                    </tbody>
                   
                )

                })}
                
            </table>
            
            </div>
            
           </div>
        )
    }

}

export default incomeReport;