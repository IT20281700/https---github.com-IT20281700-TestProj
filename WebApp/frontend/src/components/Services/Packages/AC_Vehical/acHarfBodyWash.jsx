import '../../css/acHarfBodyWash.css';
import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class acHarfBodyWash extends React.Component {

    nextPath(path) {
        this.props.history.push(path);
      }

    constructor(props){
        super(props);

        this.setPrice = this.setPrice.bind(this);
        this.setStatus = this.setStatus.bind(this);

        this.state ={
            price: '',
            status: ''
        }

        this.state = {Package:[]};

    }

    setPrice(e){
        const re = /^[+-]?\d*(?:[.,]\d*)?$/;
        if (e.target.value === '' || re.test(e.target.value)) {
        this.setState({price:e.target.value});
        }
        else{
            alert('Enter Number Only !');
        }
    }

    setStatus(e){
        this.setState({status:e.target.value});
    }
    
    componentDidMount() {
        axios.get('http://localhost:3001/Services/AC_pack_harf')
        .then(res => {
            this.setState({Package: res.data});
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    updatePackege(id, e){

        const Packege = {
            packName: 'harf body service',
            price: this.state.price,
            status: this.state.status
        }
        axios.put(`http://localhost:3001/Services/AC_pack/update/${id}`, Packege)
        .then(()=>{
            alert('Package Data Successfuly Updated !');
        }).catch((err)=>{
            alert(err.message);
        });
    }

    render() {

        return(
            <div>
                <h1 className='svfsp'>A/C Vehicals - Harf Body Service Package</h1>

                <div className="d-grid gap-2 col-6 mx-auto" style={{marginBottom:20}}>
                <button type="submit" className="btn btn-outline-dark" onClick={() => this.nextPath('/Services') }>-- Servise Page --</button>
                </div>

            <div className="maindiv">
                <h2 className="fs">Harf Body Service</h2>
                <div class="container" style={{marginTop:50, marginBottom:30}}>
                    <div class="row">
                        <div class="col" style={{marginLeft:10}}>
                            <h2 className="ser">Services :-</h2>

                                <ul className="serUl">
                                    <li>Full body wash</li>
                                    <li>Interiour full wash</li>
                                    <li>Under chachis wash</li>
                                    <li>Vaccuming</li>
                                    <li>Engine oil change</li>
                                    <li>Tires and Wheels grooming </li>
                                    <li>Exterior waxing</li>
                                    <li>Engine wash</li>
                                    <li>Windscreen Treatment</li>
                                    <li>Interiour Waxing</li>
                                </ul>

                                <br /><br />
                                <h2 className="part">Spare Parts :-</h2>

                                    <ul className="partUl">
                                        <li>Engine Oil 5L</li>
                                    </ul>

                        </div>

                        <div class="col order-5">

                        <h2 className="time">Taken Time :-</h2>

                            <div className="hour">
                            <h2 className="hour0">1 hour</h2>
                            </div>

                            {this.state.Package.map((packege) => {
                            return(
                                <div className="updiv">
                                <form onSubmit={(e) => this.updatePackege(packege._id, e)}>

                                    <h2 className="price">Packege Price :- {packege.price} /=</h2><br />
                                    <h2 className="txt">Update Price(Rs) :-</h2>
                                    <input class="form-control" type="text" placeholder={packege.price} onChange={this.setPrice} required/>

                                    <br />
                                    <h2 className="txt">Update Status :-</h2>
                                    <div className="radioDiv">
                                    
                                        <div className="form-check">
                                        <input onChange={this.setStatus} className="form-check-input" type="radio" name="status" id="status" value="Enable" required checked={this.state.status === "Enable"} />
                                        <label className="status">Enable Package</label>
                                        </div>

                                        <div className="form-check">
                                        <input onChange={this.setStatus} className="form-check-input" type="radio" name="status" id="status" value="Disable" required checked={this.state.status === "Disable"} />
                                        <label className="status">Disable Package</label>
                                        </div>
                                        
                                        <ul><li className="select">Selected Status is : {packege.status} to <b> {this.state.status}</b></li></ul>
                                        
                                    </div>
                                    <div class="d-grid gap-2 col-6 mx-auto">
                                    <button class="btn btn-dark" type="submit">Updates</button>
                                    </div>
                                </form>
                                </div>

                            );

                            })}


                        </div>
                    </div>
                </div>     

            </div>
            </div>
        );
    }
}

export default withRouter(acHarfBodyWash);

