import React, { Component } from 'react';
import '../css/viewService.css'
import genetatePDFService from './Report';
import axios from 'axios';
/*
const Service = props => (
    <tr>
        <td className="td">{props.service.serName}</td>
        <td className="td">{props.service.serCategory}</td>
        <td className="td">{props.service.serPrice}</td>
        <td className="td">{props.service.serHour}</td>
        <td className="td">{props.service.serPart}</td>

        <td className="th"> 
        <button type="button" className="btn btn-dark" onClick={this.deleteService(service.serName)}>-- Delete --</button>   
        </td>
    </tr>
)
*/
class viewService extends React.Component{

    nextPath(path) {
        this.props.history.push(path);
      }

    constructor(props){
        super(props);
        this.state = {Service:[]};
    }

    componentDidMount() {
        axios.get('http://localhost:3001/Services/all')
        .then(res => {
            this.setState({Service: res.data});
        })
        .catch((err)=>{
            console.log(err);
        });
    }
/*
    serviceList() {
        return this.state.Service.map(currentService =>{
            return <Service service = {currentService}/>;
        })
    }

*/

//delete service
deleteService(id, e){  
    if(window.confirm('Are You Sure Delete Service ??')){
        axios.delete(`http://localhost:3001/Services/delete/${id}`)  
        .then(res => {  
            console.log(res);  
            console.log(res.data);
            window.location.reload();
        
            const Service = this.state.Service.filter(item => item.id !== id);  
            this.setState({ Service });  
        })
    }
}
    

    render() {
        return(
            <div>
                <h1 className='vsd'>View Service Details</h1>

                <div className="tableDiv">
                <table className="sstable">
                    <thead>
                        <tr className="sstr">
                            <th className="ssth">Service Name</th>
                            <th className="ssth">Category</th>
                            <th className="ssth">Service Price</th>
                            <th className="ssth">Hour For Service</th>
                            <th className="ssth">Spare Parts</th>
                            <th className="ssth">Delete Service</th>
                        </tr>
                    </thead>

                    <tbody>
                    {this.state.Service.map((service) => (  
                        <tr>  
                        <td className="sstd">{service.serName}</td>  
                        <td className="sstd">{service.serCategory}</td>  
                        <td className="sstd">{service.serPrice}</td>
                        <td className="sstd">{service.serHour}</td>  
                        <td className="sstd">{service.serPart}</td>  

                        <td className="ssth">  
                            <button className="btn btn-dark" onClick={(e) => this.deleteService(service._id, e)}>Delete</button>  
                        </td>  
                        </tr>  
                    ))}  
                    </tbody>
                </table>
                </div>

                <div className="d-grid gap-2 col-6 mx-auto" style={{marginBottom:20}}>
                <button type="submit" className="btn btn-outline-dark" onClick={()=>{genetatePDFService(this.state.Service)}}>-- Genarate Service Details Report --</button>
                <button type="submit" className="btn btn-outline-dark" onClick={() => this.nextPath('/Services') }>-- Servise Page --</button>
                </div>
            
            </div>
        )
    }

}

export default viewService;