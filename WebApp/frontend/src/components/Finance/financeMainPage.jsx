import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class financeMainPage extends React.Component {
    nextPath(path){ 
        this.props.history.push(path)
    }
    render(){
        return(
            <div>
                    <br></br>
                    <h1 style  = {{marginLeft: 480,fontfamily: 'Serif',fontSize: 60}}>Finance Management</h1><br></br>
                    <div> 
                        <div className="d-grid gap-2"  style = {{backgroundColor: 'lightgrey',marginLeft:170,width: 1200,padding: 50,marginbottom: 30,margintop: 30,height: 700}} >
                        <button className="btn btn-dark" style={{height:70, marginBottom:50, fontSize:33, fontFamily:"Serif"}} onClick={()=> this.nextPath('/finance/Income') } type="button">Add Daily Income</button>
                        <button className="btn btn-dark" style={{height:70, marginBottom:50, fontSize:33, fontFamily:"Serif"}} onClick={()=> this.nextPath('/finance/Expenditure') } type="button">Add Daily Expenditure</button>
                        <button className="btn btn-dark" style={{height:70, marginBottom:50, fontSize:33, fontFamily:"Serif"}} onClick={()=> this.nextPath('/finance/dalyReport') } type="button">Daily Report</button>
                        <button className="btn btn-dark" style={{height:70, marginBottom:50, fontSize:33, fontFamily:"Serif"}} onClick={()=> this.nextPath('/finance/charts') } type="button">Monthly Profit Or Loss</button>
                        <button className="btn btn-dark" style={{height:70, marginBottom:50, fontSize:33, fontFamily:"Serif"}} onClick={()=> this.nextPath('/Invoice') } type="button">Invoice</button>
                        </div>
                    </div><br></br><br></br>

            </div>
        )
    }

}

export default  withRouter(financeMainPage);