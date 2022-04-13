import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import ExgeneratePDF from './Report/ExReportGenerate';

class incomeReport extends React.Component{

    constructor(props){
        super(props);

        this.setAmount = this.setAmount.bind(this);
        this.update = this.update.bind(this);

        this.state={
            amount:'',
            ex:[]
        }
    }

    setAmount(e){
        this.setState({amount:e.target.value});
    }

    componentDidMount(){
        axios.get('http://localhost:3001/Finance/allExpenditure')
        .then(res=>{
            this.setState({ex:res.data});
        }).catch((err)=>{
            alert(err.message)
        });
    }

    deleteService(id, e){  
        if(window.confirm('Are You Sure Delete ??')){
            axios.delete(`http://localhost:3001/Finance/deleteExpenditure/${id}`)  
            .then(res => {  
                console.log(res);  
                console.log(res.data);
                window.location.reload();
            
                const Service = this.state.ex.filter(item => item.id !== id);  
                this.setState({ Service });  
            })
        }
    }

    update(id, e){
        if(this.state.amount!=''){

            const Packege = {
                amount: this.state.amount,
            }
            axios.put(`http://localhost:3001/Finance/updateExpenditure/${id}`, Packege)
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

            <h1 style  = {{marginLeft: 480,fontfamily: 'Serif',fontSize: 60}}>Daily Expenditure Report</h1>
            <div style = {{backgroundColor: 'lightgrey', margin:50, padding:50}} >
            <button type="button"className="btn btn-dark" onClick={()=>{ExgeneratePDF(this.state.ex)}}>All Expenditure</button>
            <table style={{"borderWidth":"1px",backgroundColor:'white','borderColor':'black',marginLeft:150, 'borderStyle':'solid',width:1000}}> 
                <thead>
                    <tr style={{"borderWidth":"1px", 'borderColor':'black',backgroundColor:'grey', 'borderStyle':'solid'}}>
                        <th style={{"borderWidth":"1px",padding:10,textAlign:'center', 'borderColor':'black', 'borderStyle':'solid'}}>Date</th>
                        <th style={{"borderWidth":"1px", padding:10,textAlign:'center','borderColor':'black', 'borderStyle':'solid'}}>Expenditure Amount</th>
                        <th style={{"borderWidth":"1px", padding:10,textAlign:'center','borderColor':'black',width:500, 'borderStyle':'solid'}}>Update Amount</th>
                        <th style={{"borderWidth":"1px", padding:10,textAlign:'center','borderColor':'black', 'borderStyle':'solid'}}>Delete</th>
                    </tr>
                </thead>

                {this.state.ex.map((ex)=>{
                return(
                    <tbody>
                        <tr>
                            <th style={{"borderWidth":"1px", padding:10,textAlign:'center', 'borderColor':'black', 'borderStyle':'solid'}}>{ex.yDate}-{ex.mDate}-{ex.dDate}</th>
                            <th style={{"borderWidth":"1px", padding:10,textAlign:'center', 'borderColor':'black', 'borderStyle':'solid'}}>{ex.amount}</th>
                            <th style={{"borderWidth":"1px", padding:10,textAlign:'center', 'borderColor':'black', 'borderStyle':'solid'}}>
                                <input type="text" onChange={this.setAmount} placeholder={ex.amount} />
                                <button style={{marginLeft:100}}type="submit"class="btn btn-secondary" onClick={(e) => this.update(ex._id, e)}>Update Amount</button>
                            </th>
                            <th style={{"borderWidth":"1px", 'borderColor':'black', 'borderStyle':'solid'}}>
                            <button style={{marginLeft:45}} type="submit" class="btn btn-primary" onClick={(e) => this.deleteService(ex._id, e)}>Delete</button></th>
                        </tr>
                    </tbody>
                   
                )

                })}
                
            </table>
            </div>
            <br></br>
           </div>
        )
    }

}

export default incomeReport;