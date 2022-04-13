
import React, { Component } from 'react';
import { withRouter } from 'react-router'
import generetePDFSupplier from '../Report/ReportGenerator';
import { Link, useParams, useHistory } from "react-router-dom";


import './supplierlist.css';
import axios from 'axios';





const Supplier = props => {
    
        function Delete(_id){
            var result = window.confirm('Confirm to delete this supplier')
            if(result==true){
            axios.delete('http://localhost:3001/acceptsupplier/delete/'+_id)
        .then(()=> {
            alert('Supplier deleted successfully');
        }).catch((err) => {
            alert(err.message);
        });
    }
    }

        
        const { _id } = useParams()
        const url = '/update/'

        const data=[props]
        
        

    return(
    <tr>
        <th className="csan" scope="row">{props.supplier.companyname}</th>
     
        <td className="csan">{props.supplier.firstname}</td>
        <td className="csan">{props.supplier.lastname}</td>
        <td className="csan">{props.supplier.pnum}</td>
        <td className="csan">{props.supplier.Email}</td>

        <td className="csan" >

        
        {data.map((upsupplier) => (
                <Link to={url+props.supplier._id}>
         <button type="button" className="btn btn-primary" style={{marginRight:"20px"}}
        >Update</button></Link>
        ))}

            <button type="button" className="btn btn-primary" style={{backgroundColor:"gray"}} onClick={(e) => {
             Delete(props.supplier._id);
          }}>Delete</button>

          
        </td>
    </tr>
);
};



class supplierlist extends React.Component{

    constructor(props){
        super(props);
        this.state = {Supplier:[]};
    }

    componentDidMount() {
        axios.get('http://localhost:3001/acceptsupplier/get')
            .then(res => {
                //get all info about a supplier
                this.setState({Supplier: res.data});
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    SupplierList() {
        return this.state.Supplier.map(currentsupplier => {
            return <Supplier supplier = {currentsupplier}/>;
        })
    }

    render(){
        return(
            <div><br/><br/>
            <table  class="chamoditable table table-hover">
                <thead className="thead-dark">
                    <tr  className="table-dark">
                    <th className="csan" scope="col">Company Name</th>
                    <th className="csan" scope="col"> First Name</th>
                    <th className="csan" scope="col"> Last Name</th>
                    <th  className="csan"scope="col">Phone Number</th>
                    <th  className="csan"scope="col">Email Address</th> 
                    <th  className="csan"scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                     {this.SupplierList() }
                </tbody>
                </table><br/>
                <button type="button" className="btn btn-primary" style={{backgroundColor:"#000000",marginLeft:"1120px"}}
                onClick = {()=>{
                    generetePDFSupplier(this.state.Supplier);
                }}
                >Generate Report</button>
                <br/><br/>

                </div>
        );
        
    }
}

export default supplierlist;