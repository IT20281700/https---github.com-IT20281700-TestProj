import React, { Component } from 'react';

import axios from 'axios';




class registersupplier extends React.Component{

    constructor(props) {
        super(props);

        /*
        *setSupplierName() is a user ddefined function. React doesn't know about it.
        *so we need to bind that with library
        */
        this.setSupplierfName = this.setSupplierfName.bind(this);
        this.setSupplierlName = this.setSupplierlName.bind(this);
        this.setSuppliercompanyName = this.setSuppliercompanyName.bind(this);
        this.setSupplierPhone = this.setSupplierPhone.bind(this);
        this.setSupplierEmail = this.setSupplierEmail.bind(this);
        this.setSupplierPassword = this.setSupplierPassword.bind(this);
        this.saveSupplierData = this.saveSupplierData.bind(this);

        this.state = {

            fname: '',
            lname: '',
            cname: '',
            phone: '',
            email: '',
            passwords: '',
           
        }
    }

    //user defined method, takes event input
    setSupplierfName(e){
        this.setState({fname:e.target.value});
    }

    setSupplierlName(e) {
        this.setState({lname:e.target.value});
    }

    setSuppliercompanyName(e) {
        this.setState({cname: e.target.value});
    }

    setSupplierPhone(e) {
        this.setState({phone: e.target.value});
    }

    setSupplierEmail(e) {
        this.setState({email: e.target.value});
    }

    setSupplierPassword(e) {
        this.setState({passwords: e.target.value});
    }

    saveSupplierData(e) {
        console.log('Supplier Data', this.state);

       
        const Supplier = {
            firstname: this.state.fname, 
            lastname: this.state.lname,
            companyname: this.state.cname,
            pnum: this.state.phone,
            Email: this.state.email,
            password: this.state.passwords,
            
        }

        //send data to backend
        //3 parameters: url of bkend api, data to send and configurations(optional)
     
      if(!this.state.fname) {
          document.getElementById("id1").className = "form-control is-invalid";
          document.getElementById("fr").innerHTML = "Name cannot be empty";
          document.getElementById("fr").className = "invalid-feedback";
      }


      else if(!this.state.lname) {
        document.getElementById("id2").className = "form-control is-invalid";
        document.getElementById("ls").innerHTML = "Name cannot be empty";
        document.getElementById("ls").className = "invalid-feedback";
    }

    else if(!this.state.cname) {
      document.getElementById("id3").className = "form-control is-invalid";
      document.getElementById("cn").innerHTML = "company name cannot be empty";
      document.getElementById("cn").className = "invalid-feedback";
    }

    else if(!this.state.phone) {
      document.getElementById("id4").className = "form-control is-invalid";
      document.getElementById("pn").innerHTML = " Mobile cannot be empty";
      document.getElementById("pn").className = "invalid-feedback";
  }
  else if(this.state.phone.length != 10){
    document.getElementById("id4").className = "form-control is-invalid";
    document.getElementById("pn").innerHTML = " Invalid phone number";
    document.getElementById("pn").className = "invalid-feedback";
  }

  else if(!this.state.email) {
    document.getElementById("id5").className = "form-control is-invalid";
    document.getElementById("em").innerHTML = " Enter valid email";
    document.getElementById("em").className = "invalid-feedback";
  }
  
  // else if(this.state.email) {
  //   const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //       if(reg.test(this.state.email) ==false){
  //           this.setState({emailError:"Email Field is Invalid"});
  //           return false;
  //       }
  //       return true;
  // }


    else if(!this.state.passwords) {
      document.getElementById("id6").className = "form-control is-invalid";
      document.getElementById("ps").innerHTML = "Password cannot be empty";
      document.getElementById("ps").className = "invalid-feedback";
    }
    else if(this.state.passwords.length < 8) {
      document.getElementById("id6").className = "form-control is-invalid";
      document.getElementById("ps").innerHTML = "Password should contain at least 8 characters";
      document.getElementById("ps").className = "invalid-feedback";
      
     }

  else{
        axios.post('http://localhost:3001/Regsupplier/', Supplier)
        .then(()=> {
            alert('Data are Successfuly Inserted ');
        }).catch((err) => {
            alert(err.message);
        });
    
      }
        
    }

    

    render(){
        return(
            <div>
              <br/> <br/> <br/>
            <section className="vh-50" style={{backgroundcolor:"#eee"}}>
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                  <div className="card text-black" style={{borderradius: "25px"}}>
                    <div className="card-body p-md-5">
                      <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
          
                          <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
          
                          <form className="mx-1 mx-md-4">

                            
                          <div>
                            <label className="form-label" for="form3Example3c" >Your First Name</label>
                            <input type="text"
                            maxlength ="8" minlength="4"
                             id="id1" className="form-control"
                            value={this.state.fname}
                            onChange={this.setSupplierfName} 
                            required />
                            <div id="fr"></div>
                        </div> <br/>

                        <div>
                            <label className="form-label" for="form3Example3c">Your Last Name</label>
                            <input type="text" 
                            maxlength ="8" minlength="4"
                            id="id2" className="form-control" 
                             value={this.state.lname}
                             onChange={this.setSupplierlName} required/>
                             <div id="ls"></div>
                        </div> <br/>

                        <div>
                            <label className="form-label" for="form3Example3c">Your Company Name</label>
                            <input type="text" id="id3" className="form-control" 
                           value={this.state.cname}
                           onChange={this.setSuppliercompanyName} required/>
                           <div id="cn"></div>
                        </div> <br/>

                        <div>
                            <label className="form-label" for="form3Example3c">Your Phone Number</label>
                            <input type="text" 
                            id="id4" className="form-control" 
                            value={this.state.phone}
                            onChange={this.setSupplierPhone}  required/>
                            <div id="pn"></div>
                        </div> <br/>



                            <div>
                            <label className="form-label" for="form3Example3c">Your Email</label>
                            <input type="email" id="id5" className="form-control" 
                            pattern="[A-za-z0-9]@[A-Za-z]\.[a-zA-Z]{2,3}"
                            value={this.state.email}
                            onChange={this.setSupplierEmail} required/>
                            <div id="em"></div>
                            </div> <br/>

                            <div>
                            <label className="form-label" for="form3Example3c">Password</label>
                            <input type="password"
                             id="id6" className="form-control" 
                            value={this.state.passwords}
                            onChange={this.setSupplierPassword} required/>
                            <div id="ps"></div>
                        </div>  <br/>    
                            <div className="form-check d-flex justify-content-center mb-2">
                              <input
                                className="form-check-input me-2"
                                type="checkbox"
                                value=""
                                id="form2Example3c"
                              />
                              <label className="form-check-label" id="Agree" for="form2Example3">
                                I agree all statements in <a href="#!">Terms of service</a>
                              </label>
                            </div>
                            <br/>
                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                              <button type="button" className="btn btn-primary btn-lg" onClick={this.saveSupplierData}>Register</button>
                            </div>
          
                          </form>
          
                        </div>
                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
          
                          <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" class="img-fluid" alt="Sample image"/>
          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> 
          <br/> <br/> <br/>  
            </div>


        );
    


    }   
}

export default registersupplier;