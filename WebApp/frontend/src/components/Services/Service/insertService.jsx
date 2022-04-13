import '../css/insertService.css';
import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class insertService extends React.Component{

    nextPath(path) {
        this.props.history.push(path);
      }

    constructor(props){
        super(props);

        this.setSertviceName = this.setSertviceName.bind(this);
        this.setServiceCategory = this.setServiceCategory.bind(this);
        this.setServicePrice = this.setServicePrice.bind(this);
        this.setServiceHour = this.setServiceHour.bind(this);
        this.setServiceParts = this.setServiceParts.bind(this);
        this.addService = this.addService.bind(this);

        this.state = {
            serName:'',
            serCategory:'',
            serPrice:'',
            serHour:'',
            serPart:''
        }
    }

    setSertviceName(e){
        var nameonly = /^[a-zA-Z]*$/g;
        if ((e.target.value.match(nameonly))) {
        this.setState({serName:e.target.value});
        }
        else{
            alert('Enter Letters Only !');
        }
    }

    setServiceCategory(e){
        this.setState({serCategory:e.target.value});
    }

    setServicePrice(e){
        const re = /^[+-]?\d*(?:[.,]\d*)?$/;
        if (e.target.value === '' || re.test(e.target.value)) {
        this.setState({serPrice:e.target.value});
        }
        else{
            alert('Enter Number Only !');
        }
    }

    setServiceHour(e){
        const re = /^[+-]?\d*(?:[.,]\d*)?$/;
        if (e.target.value === '' || re.test(e.target.value)) {
        this.setState({serHour:e.target.value});
        }
        else{
            alert('Enter Number Only !');
        }
    }

    setServiceParts(e){
        var nameonly = /^[a-zA-Z]*$/g;
        if ((e.target.value.match(nameonly))) {
        this.setState({serPart:e.target.value});
        }
        else{
            alert('Enter Letters Only !');
        }
    }

    addService(e){

        const Service = {
            serName: this.state.serName,
            serCategory: this.state.serCategory,
            serPrice: this.state.serPrice,
            serHour: this.state.serHour,
            serPart: this.state.serPart
        }

        if(Service.serName!='' && Service.serCategory!='' && Service.serPrice!='' && Service.serHour!=''){
                axios.post('http://localhost:3001/Services/add', Service)
            .then(()=>{
                alert('Service Data Successfuly Inserted !');
            }).catch((err)=>{
                alert(err.message);
                alert('Service Data Insert Unsuccessful !');
            });

        }else{
            alert('Fill All Details Correctly!');
        }

        
    }

    render() {
        return (
        <div>
            <h1 className='isd'>Insert Service Details</h1>
            
            <br/>
            <div className="d-grid gap-2 col-6 mx-auto">
            <button type="submit" className="btn btn-outline-dark" onClick={() => this.nextPath('/Services/all') }>-- View Inserted Services --</button>
            </div>

            <div className="maindiv">

                <form>

                <div className="mb-3">
                    <label className="leble">Service Name :-</label>
                    <input type="text" className="form-control" placeholder="Enter Service Name" onChange={this.setSertviceName} required/>
                </div><br/>

                <label className="leble">Select Category :-</label>

                <div className="radioDiv">
                    
                    <div className="form-check">
                        <input onChange={this.setServiceCategory} className="form-check-input" type="radio" name="serCategory" value="Small Vehicals" checked={this.state.serCategory === "Small Vehicals"} required/>
                        <label className="radio">
                            Small Vehicals
                        </label>
                    </div>

                    <div className="form-check">
                        <input onChange={this.setServiceCategory} className="form-check-input" type="radio" name="serCategory" value="A/C Vehicals" checked={this.state.serCategory === "A/C Vehicals"} required/>
                        <label className="radio">
                            A/C Vehicals
                        </label>
                    </div>

                    <div className="form-check">
                        <input onChange={this.setServiceCategory} className="form-check-input" type="radio" name="serCategory" value="Heavy Vehicals And Others" checked={this.state.serCategory === "Heavy Vehicals And Others"} required/>
                        <label className="radio">
                            Heavy Vehicals And Others
                        </label>
                    </div>

                    <div><ul>
                     <li className="leble">Selected Service is : {this.state.serCategory}</li>
                     </ul>
                    </div>
                </div>

                <br/>

                <div className="mb-3">
                    <label className="leble">Service Price (Rs) :-</label>
                    <input type="text" className="form-control" placeholder="Enter Service Price" required onChange={this.setServicePrice} />
                </div><br/>

                <div className="mb-3">
                    <label className="leble">Taken Time (Hour) :-</label>
                    <input type="number" step="0.25" className="form-control" placeholder="Enter Taken Time" required onChange={this.setServiceHour} />
                </div><br/>

                <div className="mb-3">
                    <label className="leble">Required Spare Part :-</label>
                    <input type="text" className="form-control" placeholder="Enter Required Spare Part" onChange={this.setServiceParts}/>
                </div><br/>

                <br/>
                <div className="d-grid gap-2">
                <button type="submit" className="btn btn-dark" onClick={this.addService}>-- Insert Service --</button>
                </div>

                <br/>
                </form>

            </div> 
        </div>     
        );
    }

}

export default withRouter(insertService);