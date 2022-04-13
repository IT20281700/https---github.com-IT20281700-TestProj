import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DefaultMap from "../GMap/DefaultMap";
import './AllReqs.css';

function constructLink(props) {
    var mapLink = `https://www.google.com/maps/dir/?api=1&destination=${props.cardCmpn.latitude}%2C${props.cardCmpn.longitude}&travelmode=driving`;
    return mapLink;
}

function setFlagVisible(props) {
    if(props.cardCmpn.urgent == false) {
        return "hidden";
    }
}



const CardComponent = props => (
    

    <div class="accordion-item">
    <h2 class="accordion-header" id={`heading${props.ind+1}`} style={{color:"blue"}}>
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${props.ind+1}`} aria-expanded="false" aria-controls={`collapse${props.ind+1}`}>
        Vehicle Assistance Request {props.ind + 1}



        <div style={{visibility:`${setFlagVisible(props)}`}}>
            <svg xmlns="http://www.w3.org/2000/svg" style={{color:"crimson", marginLeft:"100px"}} width="25" height="25" fill="currentColor" class="bi bi-flag-fill position-absolute top-50 start-50 translate-middle" viewBox="0 0 16 16">
                <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/>
            </svg>
        </div>



    </button>
    </h2>
    <div id={`collapse${props.ind+1}`} class="accordion-collapse collapse" aria-labelledby={`heading${props.ind+1}`} data-bs-parent="#accordionExample">
    <div class="accordion-body">

        
        {/*card start*/}
        <div class="card" style={{width: "18rem", textAlign:"left"}}>
        <div class="card-body">
            <h5 class="card-title">Issue Details</h5>
            <p class="card-text">{props.cardCmpn.problemDetail}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>Name : </b>{props.cardCmpn.userName}</li>
            <li class="list-group-item"><b>Mobile : </b>{props.cardCmpn.userMobile} </li>
            <li class="list-group-item"><b>Address : </b>{props.cardCmpn.userAddress}</li>
        </ul>
        <div class="card-body">
            <a href={constructLink(props)} class="card-link" target="_blank">
            <button type="button" class="btn btn-primary btn-sm">Directions</button></a>

            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => {props.deleteReqs(props)}} width="23" height="23" fill="currentColor" class="bi bi-trash float-end" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
        </div>
        </div>
        {/*card end*/}


            </div>
        </div>
</div>

)

class AllRequests extends React.Component {

    constructor(props) {
        super(props);
        this.state = {AssistReq:[]};
        this.deleteReqs = this.deleteReqs.bind(this);
    }

    deleteReqs(props) {
        const id = props.cardCmpn._id;
    
        axios.delete('http://localhost:3001/api/Customer/deleteAssist/'+id)
            .then(alert('Assist Request Deleted'));
        
        this.setState({
            AssistReq: this.state.AssistReq.filter(el => el._id !== id)
        })
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/Customer/getAllReq')
        .then(res => {
            this.setState({AssistReq: res.data});
        })
        .catch((err) => {
            console.log(err);
        })
    }

    AssistList() {
        return this.state.AssistReq.map((currentAssist, idx) => {
            return <CardComponent cardCmpn = {currentAssist} ind={idx} deleteReqs={this.deleteReqs} />
        })
    }

    render() {

        return(
            <div className="container">
                <br/><br/><br/>
                <h2 className="p-3 mb-2 bg-light text-dark">Vehicle Assistance Requests</h2><br/>
                <DefaultMap/>
                <br/><br/>
                <center>
                <div class="accordion" id="accordionExample" style={{maxWidth: "38rem"}} >
                    { this.AssistList() }
                    </div>
                </center>
                    <br/><br/><br/>
                </div>
        )
    }
}

export default AllRequests;