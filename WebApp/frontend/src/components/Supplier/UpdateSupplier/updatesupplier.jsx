import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import './updatesupplier.css';
import supplierlist from "../SuppliersList/supplierlist";


        function Updatesupplier (props){

            const{id} = useParams()
            const history = useHistory()
            const url = '/allsup'
            
            
            console.log(id)
            
         
            const[firstname,setfname] = useState()
            const[lastname,setlname] = useState()
            const[companyname,setcname] = useState()
            const[pnum,setpnum] = useState()
            const[Email,setEmail] = useState()



            useEffect(()=>{
                let getSupplier = () =>{
                    axios.get('http://localhost:3001/acceptsupplier/getone/'+id)
                    .then((res) =>{
                        
                        setfname(res.data.firstname)
                        setlname(res.data.lastname)
                        setcname(res.data.companyname)
                        setpnum(res.data.pnum)
                        setEmail(res.data.Email)
                    })
                }

                getSupplier()
            },[])

           
                
                    
               
            
            const update = (e) =>{
                e.preventDefault()

                const updatesupplierlist = {
                   
                    firstname,
                    lastname,
                    companyname,
                    pnum,
                    Email
                }
            

                axios.put('http://localhost:3001/acceptsupplier/update/'+id,updatesupplierlist)
                .then(()=>{
                    alert('Supplier is updated successfully')
                    history.push(url)
                   
                }).catch((err)=>{
                    console.log(err)
                })
            }
            

           
            return(
              <div>
              <section class="h-100 bg-dark">
              <form onSubmit={(e) => {update(e)}}>
              <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                  <div class="col">
                    <div class="card card-registration my-4">
                      <div class="row g-0">
                        <div class="col-xl-6 d-none d-xl-block">
                          <img
                            src="http://www.todaysmedicaldevelopments.com/fileuploads/publications/21/issues/103575/articles/images/AdobeStock_88779463_%5BConverted%5D_fmt.png"
                            alt="Sample photo"
                            class="img-fluid"
                            style={{bordetopleftradius:".15rem" ,borderbottomleftradius:".15rem",height:"750px"}}
                          />
                        </div>
                        <div class="col-xl-6">
                          <div class="card-body p-md-5 text-black">
                            <h3 class="mb-5 text-uppercase">Update Supplier's Account</h3>
            
                            <div class="form-outline mb-4">
                                <label class="form-label" for="form3Example97">Company Name</label>
                                <input type="text" id="form3Example97" class="form-control form-control-lg"
                                defaultValue={companyname}
                                onChange={(e)=> {setcname(e.target.value)}} />
                            </div>

                            <div class="form-outline mb-4">
                                <label class="form-label" for="form3Example97">First Name</label>
                                <input type="text" id="form3Example97" class="form-control form-control-lg"
                                defaultValue={firstname}
                                onChange={(e) => {setfname(e.target.value)}} />
                            </div>
            
                            <div class="form-outline mb-4">
                                <label class="form-label" for="form3Example97">Last Name</label>
                                <input type="text" id="form3Example97" class="form-control form-control-lg"
                                defaultValue={lastname}
                                onChange={(e) => {setlname(e.target.value)}} />
                            </div>

                              <div class="form-outline mb-4">
                                <label class="form-label" for="form3Example97">Phone Number</label>
                                <input type="text" id="form3Example97" class="form-control form-control-lg"
                                 defaultValue={pnum}
                                 onChange={(e) => {setpnum(e.target.value)}} />
                            </div>

                            <div class="form-outline mb-4">
                                <label class="form-label" for="form3Example97">Email</label>
                                <input type="email" id="form3Example97" class="form-control form-control-lg"
                                defaultValue={Email}
                                onChange={(e)=> {setEmail(e.target.value)}} />
                            </div>
            
                            <div class="d-flex justify-content-end pt-3">
                              <button type="submit" class="btn btn-warning btn-lg ms-2">Update</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                </form>
            </section>
            </div>
            

            );
 
};




export default Updatesupplier;