import React, { Component, useState } from 'react';
import './supplieditem.css';
import axios from "axios";


class supplieditems extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      filter:"",
      spareparts: [] };
  }


  componentDidMount() {
    axios
      .get("http://localhost:3001/SpareParts/all")
      .then((res) => {
        //get all info about a supplier
        this.setState({ spareparts: res.data });
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
        const sp = (this.state.spareparts);
        console.log(sp)

        let {filter,spareparts} = this.state;
        let datasearch = spareparts.filter(item=>{
            return Object.keys(item).some(key =>
              item[key].toString().toLowerCase().includes(filter.toString().toLocaleLowerCase()));
        });
        return(



          <diV>
          <div>
         <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Spare Parts</a>
            </li>
            <li class="nav-item">
              <a class="nav-link"  href="http://localhost:3000/oils">Oils</a>
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
          </div>
            <div><br/><br/>
                
            <div  className="sawrap">
            {datasearch.map(data=>{return(
            <div>
                <div  className="card CScard" style={{width: "18rem",marginLeft:"40px",borderColor:"black"}}>
                    <img className="card-img-top" src={data.photo} alt="Card image cap" height="200px"/>
                    <div className="card-body">
                    <h5 className="card-title">{data.sName}</h5>
                    <p className="card-text">
                    <ul className="order">
                            <li>Model        : {data.sModel}</li>
                            <li>Company Name : {data.sMakes}</li>
                            <li>Brand        : {data.sBrands}</li>
                            <li>Model        : {data.sModel}</li>
                            <li>Price        : {data.sPrice}</li>
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

export default supplieditems;