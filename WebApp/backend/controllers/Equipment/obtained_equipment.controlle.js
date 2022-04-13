//implement bussiness logic here
//CRUD functionalities

//import Equipment model
const Equipmentobtain = require('../../models/Equipment/equipment.model');


//get all euq
const getAllobEquipment = (req, res)=> {
    
    //get all Equipments is by find() method.
    //read mongoose queries
    Equipmentobtain.find().then((Equipmentobtain)=>{
        res.json(Equipmentobtain);
    }).catch((err)=>{
        res.json(err);
    })
}

//import Equipment model
const EquObtain = require('../../models/Equipment/obtained_equipment.model');

//add Equipment
const euqObtain = (req, res) => {

    //const emId = req.body.emId;
    //const eqName = req.body.eqName;

    //like this we can give one by one

    //or else in one line:
    const{ emId ,eqName } = req.body;

    //create a object

    const newEquObtain = new EquObtain({
        emId,
        eqName
    });

    newEquObtain.save().then((EquObtain) => {
        res.json(EquObtain);
    }).catch((err)=>{
        res.json(err);
    });

}

const getObtainEquipment = (req, res) => {

    EquObtain.find({emId:req.params.emId})
    .then((EquObtain) => {
        res.json(EquObtain)
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get Employee", error: err.message})
    })
}

const deleteobtainEquipment = (async (req, res) =>{
    let EmployeeId = req.params.id;

    await EquObtain.findByIdAndDelete(EmployeeId)
    .then(() => {
        res.status(200).send({status: "Equipment delete"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete Equipment"});
    })
})

module.exports = {
    euqObtain,
    getObtainEquipment, 
    deleteobtainEquipment,
    getAllobEquipment,
     
}
