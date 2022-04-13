import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import { BarChart, Bar, Cell, Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

class charts extends React.Component{

    constructor(props){
        super(props);

        this.setMonth = this.setMonth.bind(this);
        this.getDetails = this.getDetails.bind(this);
        this.setMonthE = this.setMonthE.bind(this);
        this.getDetailsE = this.getDetailsE.bind(this);

        this.state = {
        income:[],
        month:'',
        monthE:'',

        }

    }

    setMonthE(e){
        this.setState({monthE:e.target.value});
    }

    getDetailsE(monthE, e){
        if(monthE>0 && monthE<=12){
            axios.get(`http://localhost:3001/finance/getExpenditure/${monthE}`)
            .then(res =>{
                this.setState({expenditure:res.data});
                console.log(res.data);
            }).catch((err)=>{
                console.log(err);
            });
        }else{
            alert("Not A Valid Month");
        }
    }

    setMonth(e){
        this.setState({month:e.target.value});
    }

    getDetails(month, e){
        if(month>0 && month<=12){
            axios.get(`http://localhost:3001/finance/getIncome/${month}`)
            .then(res =>{
                this.setState({income:res.data});
                console.log(res.data);
            }).catch((err)=>{
                console.log(err);
            });
        }else{
            alert("Not A Valid Month"); 
        }
    }

    render(){
        return(
           <div>
               <h1 style  = {{marginLeft: 480,marginTop:40, fontfamily: 'Serif',fontSize: 50}}>Monthly Profit Or Loss</h1><br></br>
               

               
                 <div class="container">
                <div class="row" style={{backgroundColor:'#f6f7f7',border:'solid black', marginTop:30, marginBottom:100, padding:50}}>
                    <div class="col-6 col-sm-3">
                    <div>
                        <div >
                            <center><h1>Income</h1></center>

                            <table>
                                <tr>
                                    <td>
                                        <div>
                                            <input type="text" class="form-control" value={this.state.month} style={{height:30}}  onChange={this.setMonth}/>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <button class="btn btn-dark" type="submit" onClick={(e) => this.getDetailsE(this.state.monthE, e)}style={{height:30,width:100, fontSize:12, marginLeft:20}}type="submit" onClick={(e) => this.getDetails(this.state.month, e)}>Get Month</button>
                                        </div>
                                    </td>
                                </tr>
                            </table>

                           
        
                           

                            <div style={{marginTop:50, marginBottom:50, width:450, border:'solid purple', padding:50,  backgroundColor:'lightblue'}}>
                            <div width="100%" height="100%">
                                <LineChart width={300} height={170} data={this.state.income}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="" padding={{ left: 30, right: 30 }} />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="amount" stroke="purple" activeDot={{ r: 8 }} />
                                </LineChart>
                            </div>
                            </div>

                        </div>
                    </div>
                    </div>

                    
                    <div class="col-6 col-sm-3" style={{marginLeft:400}}>
                   
                        <div >

                            <center><h1>Expenditure</h1></center>

                            <table>
                                <tr>
                                    <td>
                                        <div>
                                            <input type="text" class="form-control" value={this.state.monthE} style={{height:30}} onChange={this.setMonthE}/>
                                        </div>
                                    </td>

                                    <td>
                                        <div>
                                            <button class="btn btn-dark" type="submit" onClick={(e) => this.getDetailsE(this.state.monthE, e)}style={{height:30,width:100, fontSize:12, marginLeft:20}}>Get Month</button>
                                        </div>

                                    </td>
                                </tr>
                            </table>
                           
                   
                           
                            <div style={{marginTop:50, marginBottom:50, width:450, border:'solid purple', padding:50,  backgroundColor:'lightblue'}}>
                            <div width="100%" height="100%" >
                                <LineChart width={300} height={170} data={this.state.expenditure}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="" padding={{ left: 30, right: 30 }} />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="amount" stroke="purple" activeDot={{ r: 8 }} />
                                </LineChart>
                            </div>
                            </div>
                        
                       </div>

                    </div>
                   
                </div>
                </div>
  
           </div>
           
        )
    }

}

export default charts;