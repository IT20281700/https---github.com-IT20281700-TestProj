//implement bussiness logic here
//CRUD functionalities

//import Services
const ACservice = require('../../models/Services/acPack.model');
const Sservice = require('../../models/Services/smallPack.model');
const Hservice = require('../../models/Services/heavyPack.model');

//get small vehical full service
const S_full_Service = (req, res)=> {

    Sservice.find(
        {
            "packName": "full service"
        }
    ).then((Sservice)=>{
        res.json(Sservice);
    }).catch((err)=>{
        res.json(err);
    })
}

//get small vehical body wash
const S_body_wash= (req, res)=> {

    Sservice.find(
        {
            "packName": "body wash"
        }
    ).then((Sservice)=>{
        res.json(Sservice);
    }).catch((err)=>{
        res.json(err);
    })
}

//get A/C vehical full service
const AC_full_Service= (req, res)=> {

    ACservice.find(
        {
            "packName": "full service"
        }
    ).then((ACservice)=>{
        res.json(ACservice);
    }).catch((err)=>{
        res.json(err);
    })
}

//get A/C vehical harf body wash
const AC_harfbody_wash= (req, res)=> {

    ACservice.find(
        {
            "packName": "harf body service"
        }
    ).then((ACservice)=>{
        res.json(ACservice);
    }).catch((err)=>{
        res.json(err);
    })
}

//get A/C vehical body wash
const AC_body_wash= (req, res)=> {

    ACservice.find(
        {
            "packName": "body wash"
        }
    ).then((ACservice)=>{
        res.json(ACservice);
    }).catch((err)=>{
        res.json(err);
    })
}

//get heavy vehical full service
const H_full_Service= (req, res)=> {

    Hservice.find(
        {
            "packName": "full service"
        }
    ).then((Hservice)=>{
        res.json(Hservice);
    }).catch((err)=>{
        res.json(err);
    })
}

//get A/C vehical harf body wash
const H_harfbody_wash= (req, res)=> {

    Hservice.find(
        {
            "packName": "harf body service"
        }
    ).then((Hservice)=>{
        res.json(Hservice);
    }).catch((err)=>{
        res.json(err);
    })
}

//get A/C vehical body wash
const H_body_wash= (req, res)=> {

    Hservice.find(
        {
            "packName": "body wash"
        }
    ).then((Hservice)=>{
        res.json(Hservice);
    }).catch((err)=>{
        res.json(err);
    })
}

const smallVehicleService = (req, res) => {
    Sservice.find().then((Sservice) => {
        res.json(Sservice);
    }).catch((err) => {
        res.json(err);
    })
}

const acVehicleService = (req, res) => {
    ACservice.find().then((ACservice) => {
        res.json(ACservice);
    }).catch((err) => {
        res.json(err);
    })
}

const heavyVehicleService = (req, res) => {
    Hservice.find().then((Hservice) => {
        res.json(Hservice);
    }).catch((err) => {
        res.json(err);
    })
}


module.exports = {
    S_full_Service,
    S_body_wash,
    AC_full_Service,
    AC_harfbody_wash,
    AC_body_wash,
    H_full_Service,
    H_harfbody_wash,
    H_body_wash,
    smallVehicleService,
    acVehicleService,
    heavyVehicleService
}