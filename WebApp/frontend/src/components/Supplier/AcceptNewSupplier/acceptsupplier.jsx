import React, { Component } from "react";
import "../SuppliersList/supplierlist.css";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";



const Supplier = (props) => {

        function Delete(_id){
          
          axios.delete('http://localhost:3001/Regsupplier/tempdelete/'+_id)
      .then(()=> {
          console.log('Supplier deleted successfully');
      }).catch((err) => {
          console.log(err.message);
      });
    }

    function Acceptsupplier(details){
       

        const Supplier = {
            id : details._id,
            firstname: details.firstname, 
            lastname: details.lastname,
            companyname: details.companyname,
            pnum: details.pnum,
            Email:details.Email,
            password: details.password
        }
        console.log(Supplier.id)
         window.confirm('Do you want to sent an email')
        axios.post('http://localhost:3001/acceptsupplier/add', Supplier)
        .then(()=> {
            alert('Supplier Data Successfuly Inserted');  
            
        }).catch((err) => {
            alert(err.message)
        });

        Delete(details._id)

        

    }

  const data=[props]

  return (
    <tr>
      <th className="csan" scope="row">{props.supplier.companyname}</th>
      <td className="csan">{props.supplier.firstname}</td>
      <td className="csan">{props.supplier.pnum}</td>
      <td className="csan">{props.supplier.Email}</td>

      <td className="csan">

     
      {data.map(() => (
         <a href={`mailto:${props.supplier.Email}?subject=Acceptence letter&body=Accepted ssupplier `}>     
        <button 
          type="button"
          className="btn btn-outline-dark"
          style={{ marginRight: "20px" }}
          onClick={(e) => {
            Acceptsupplier(props.supplier);
          }}
          >
           Accept
        </button></a>))}
        
      </td>
    </tr>
  );
};

class acceptsupplier extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Supplier: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/Regsupplier/all")
      .then((res) => {
        //get all info about a supplier
        this.setState({ Supplier: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  SupplierList() {
    return this.state.Supplier.map((currentsupplier) => {
      return <Supplier supplier={currentsupplier} />;
    });
  }

  render() {
    return (
      <div><br/><br/>
        <table className="chamoditable table">
          <thead className="thead-dark">
            <tr className="table-secondary">
              <th className="csan" scope="col">Company Name</th>
              <th className="csan" scope="col">Supplier Name</th>
              <th className="csan" scope="col">Phone Number</th>
              <th className="csan" scope="col">Email Address</th>
              <th className="csan" scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.SupplierList()}
            {console.log(this.SupplierList())}
          </tbody>
        </table>
        <br/><br/>
      </div>
    );
  }
}
export default acceptsupplier;
