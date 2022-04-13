import './css/startPage.css';
import { useHistory } from 'react-router-dom';
import React, { Component } from 'react';

const StartPage = () => {

    const history = useHistory();

    const handleClick = () => history.push('/Services/add');
    const sFullPack = () => history.push('/Services/Small_pack_full');
    const sWashPack = () => history.push('/Services/Small_pack_wash');

    const acFullPack = () => history.push('/Services/AC_pack_full');
    const acharfPack = () => history.push('/Services/AC_pack_harf');
    const acwashPack = () => history.push('/Services/AC_pack_wash');

    const hFullPack = () => history.push('/Services/Heavy_pack_full');
    const hharfPack = () => history.push('/Services/Heavy_pack_harf');
    const hwashPack = () => history.push('/Services/Heavy_pack_wash');

        return(
            <div>
                <h1 className='cvt'>Choose Vehical Type</h1>


                <div className="container">
                    <div className="row">

                        <div className="col">

                            <div className="divs3">

                                <h2 className="vname">Small Vehicals</h2>

                                <div className="col-md-6 mb-md-0 p-md-4">
                                <img src="https://www.dpmco.com/public/images/workshop_gallery/3/bajaj-motorcycle-service-large.jpg" className="service1" alt="..."/>
                                </div>
                                
                                <div >
                                    <ul>
                                        <li><h5 className="items">Bicks</h5></li>
                                        <li><h5 className="items">Three Whelers</h5></li>
                                    </ul>
                                </div>

                                <br/>
                                <br/>
                                <br/>

                                <div className="d-grid gap-2 col-6 mx-auto">
                                    <button className="btn btn-dark" onClick={sFullPack} type="button">Full Service Packeges</button><br/>
                                    <button className="btn btn-dark" onClick={sWashPack} type="button">Body Service Packeges</button>
                                </div>

                            </div>

                        </div>

                        <div className="col order-5">

                            <div className="divs3">

                                <h2 className="vname">Heavy Vehicals And Others</h2>

                                <div className="col-md-6 mb-md-0 p-md-4">
                                <img src="https://www.bh-motors.co.uk/wp-content/uploads/2020/07/vehicle-service-malvern-1024x768.jpg" className="service1" alt="..."/>
                                </div>

                                <div >
                                    <ul>
                                        <li><h5 className="items">Trucks</h5></li>
                                        <li><h5 className="items">Buses</h5></li>
                                        <li><h5 className="items">Excavators</h5></li>
                                        <li><h5 className="items">Other Heavy Vehicals</h5></li>
                                    </ul>
                                </div>

                                <br/>
                                <div className="d-grid gap-2 col-6 mx-auto">
                                    <button className="btn btn-dark" onClick={hFullPack} type="button">Full Service Packeges</button>
                                    <button className="btn btn-dark" onClick={hharfPack} type="button">Harf Body Service</button>
                                    <button className="btn btn-dark" onClick={hwashPack} type="button">Body Service Packeges</button>
                                </div>
  

                            </div>

                        </div>

                        <div className="col order-1">

                            <div className="divs3">

                                <h2 className="vname">A/C Vehicals</h2>

                                <div className="col-md-6 mb-md-0 p-md-4">
                                <img src="https://gm-retail-app.s3.ap-south-1.amazonaws.com/service-new-images/newB.jpg" className="service1" alt="..."/>
                                </div>

                                <div >
                                    <ul>
                                        <li><h5 className="items">Cars</h5></li>
                                        <li><h5 className="items">Vans</h5></li>
                                        <li><h5 className="items">Freezer Trucks</h5></li>
                                        <li><h5 className="items">Pickup Trucks</h5></li>
                                        <li><h5 className="items">Other A/C Vehicals</h5></li>
                                    </ul>
                                </div>
                                
                                <div className="d-grid gap-2 col-6 mx-auto">
                                    <button className="btn btn-dark" onClick={acFullPack} type="button">Full Service Packeges</button>
                                    <button className="btn btn-dark" onClick={acharfPack} type="button">Harf Body Service</button>
                                    <button className="btn btn-dark" onClick={acwashPack} type="button">Body Service Packeges</button>
                                </div>

                            </div>

                            <div className="d-grid gap-2">
                                <button className="btn btn-dark" style={{marginBottom:80}}  onClick={handleClick} type="button">Service Details</button>
                            </div>

                        </div>

                    </div>
                </div>
                

                
            </div>

        );
    }

export default StartPage;

