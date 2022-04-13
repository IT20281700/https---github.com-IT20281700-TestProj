//implement bussiness logic here
//CRUD functionalities

//import Services
const Service = require('../../models/Services/insertSer.model');


//add service
const addService = (req, res) => {

    // const cusName = req.body.name;
    // const pnum = Number(req.body.phoneNumber);
    // const age = Number(req.body.age);
    // const vehicle = req.body.vehicle;

    //like this we can give one by one

    //or else in one line:
    const {serName, serCategory, serPrice, serHour, serPart} = req.body;

    //create a object

    const newService = new Service({
        serName,
        serCategory,
        serPrice,
        serHour,
        serPart
    });

    newService.save().then((Service) => {
        res.json(Service);
    }).catch((err)=>{
        res.json(err);
    });

}

//get all servise
const getAllService = (req, res)=> {
    
    //get all service is by find() method.
    //read mongoose queries
    Service.find().then((Service)=>{
        res.json(Service);
    }).catch((err)=>{
        res.json(err);
    })
}

//delete service
const deleteService = (req,res) => {
    let userid = req.params.id;

    Service.findByIdAndDelete(userid).then((Service)=>{
        res.json(Service);
    }).catch((err)=>{
        res.json(err);
    })
}

module.exports = {
    addService,
    getAllService,
    deleteService,
}