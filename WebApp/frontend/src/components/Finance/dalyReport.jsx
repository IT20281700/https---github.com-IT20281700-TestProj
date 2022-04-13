import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';


class dalyReport extends React.Component{

    nextPath(path){ 
        this.props.history.push(path)
    }

    render(){
        return(
           <div>
                <br></br>
                    <h1 style  = {{marginLeft: 600,fontfamily: 'Serif',marginRight:300,fontSize: 60}}>Daily Report</h1><br></br>
                    <div style = {{backgroundColor: 'lightgrey',marginLeft:420,width: 750,padding: 50,marginbottom: 50,margintop: 30,height: 450}} > 
                        

                  <div>
                    <button className="btn btn-dark" style={{height:70, marginBottom:-40,marginTop:70,width:500,marginLeft:80,fontSize:33, fontFamily:"Serif"}} onClick={()=> this.nextPath('/finance/Income') }type="submit" onClick={()=> this.nextPath('/finance/dalyReport/income') }>Income Report</button>
                  </div>
                <div><br></br>
                    <button className="btn btn-dark" style={{height:70, marginBottom:-150, fontSize:33,width:500,marginLeft:80, fontFamily:"Serif"}} onClick={()=> this.nextPath('/finance/Income') }type="submit" onClick={()=> this.nextPath('/finance/dalyReport/expenditure') }>Expenditure Report</button>
                </div>
                
              </div><br></br><br></br><br></br><br></br>
           </div> 
        )
    }

}

export default dalyReport;