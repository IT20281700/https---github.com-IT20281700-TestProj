import React, { Component } from 'react';
import './suppliedoils.css';
import axios from "axios";



class suppliedoils extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      filter:"",
       oils: [] };
  }


  componentDidMount() {
    axios
      .get("http://localhost:3001/SpareParts/all/oil")
      .then((res) => {
        //get all info about a supplier
        this.setState({ oils: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  searchText(e){
    this.setState({filter:e.target.value});
  };
  render(){

        //const data=[this.state.props]
        const so = (this.state.oils);
        console.log(so)

        let {filter,oils} = this.state;
        let datasearch = oils.filter(item=>{
            return Object.keys(item).some(key =>
              item[key].toString().toLowerCase().includes(filter.toString().toLocaleLowerCase()));
        });


        return(

          <diV>
         <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link" href="http://localhost:3000/item">Spare Parts</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Oils</a>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link" href="http://localhost:3000/return">Returned Items</a>
            </li> */}
            <div class="main"> 
                
                {/* Actual search box */}
              <div class="form-group has-search" className="main">
                <span class="fa fa-search form-control-feedback"></span>
                <input type="text" class="form-control" placeholder="Search"
                vlaue={filter}
                  onChange={this.searchText.bind(this)}
                />
              </div>
               </div>   
          </ul>
       

            <div><br/><br/>
                
            <div  className="sawrap">
            { datasearch.map(data=>{return(
            <div>
                <div  className="card" style={{width: "18rem",marginLeft:"40px",borderColor:"black"}}>
                    <img className="card-img-top" src={data.photo} alt="Card image cap" />
                    <div className="card-body" >
                    <h5 className="card-title" className="container">{data.type}</h5>
                    <p className="card-text">
                    <ul className="order">
                            <li>Brand           : {data.oBrand}</li>
                            <li>Volume Capacity : {data.oVolumetricCapacity}</li>
                            <li>Brand           : {data.sBrands}</li>
                            <li>SKU             : {data.oSKU}</li>
                            <li>Price           : {data.oPrice}</li>
                            <li>Supplied Amount      : 56</li>
                            <li>Current Availability : 30</li>
                    </ul>
                    </p>
                    <a href={`mailto:Dulajservicecenter@gmail.com?subject=Acceptence letter&body=Accepted ssupplier`} className="btn btn-primary">Add Ticket</a>    
                </div> 
            </div>

            
            </div>)})}

          
            </div><br/><br/>
          </div>
          </diV>

                
               
        );
    }
}
export default suppliedoils;