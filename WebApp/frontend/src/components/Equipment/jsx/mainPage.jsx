import '../css/mainPage.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { withRouter } from 'react-router-dom'; //*vena page ekakata yanavanam*

class mainPage extends React.Component {

    nextPath(path){ 
        this.props.history.push(path)
    }

    //html cord
    render() {
        return(
            <div>
               
                    <div className="butdiv">
                        <div className="d-grid gap-2">
                        <button className="btn btn-dark" style={{height:70, marginBottom:50, fontSize:33, fontFamily:"Serif"}} onClick={()=> this.nextPath('/Equipment/Obt_Equ') } type="button">Obtaining Equipments</button>
                        <button className="btn btn-dark" style={{height:70, marginBottom:50, fontSize:33, fontFamily:"Serif"}} onClick={()=> this.nextPath('/Equipment/Ret_Equ') } type="button">Return of Equipments</button>
                        <button className="btn btn-dark" style={{height:70, marginBottom:50, fontSize:33, fontFamily:"Serif"}} onClick={()=> this.nextPath('/Equipment/Admin') } type="button">Admin Area</button>
                        </div>
                    </div>
            </div>
        )
    }
}

export default withRouter(mainPage);