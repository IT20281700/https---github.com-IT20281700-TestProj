//implement bussiness logic here
//CRUD functionalities

//import Equipment model
const Equipment = require('../../models/Equipment/equipment.model');

//add Equipment
const addEquipment = (req, res) => {

    //const eqId = req.body.eqId;
    //const eqName = req.body.eqName;
    //const location = req.body.location;
    //const photo = req.body.photo;

    //like this we can give one by one

    //or else in one line:
    const{ eqId ,eqName ,Location,photo } = req.body;

    //create a object

    const newEquipment = new Equipment({
        eqId,
        eqName,
        Location,
        photo
    });

    newEquipment.save().then((Equipment) => {
        res.json(Equipment);
    }).catch((err)=>{
        res.json(err);
    });

}


const getAllEquipment = (req, res)=> {
    
    //get all Equipments is by find() method.
    //read mongoose queries
    Equipment.find().then((Equipment)=>{
        res.json(Equipment);
    }).catch((err)=>{
        res.json(err);
    })
}



const updateEquipment = (async (req, res) => {
    let EquipmentId = req.params.id;
    const {eqId, eqName, Location,} = req.body;

    const updateEquipment = {
        eqId,
        eqName,
        Location
    }

    const update = await Equipment.findByIdAndUpdate(EquipmentId, updateEquipment)
    .then(() => {
        res.status(200).send({status: "Equipment Update"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ststus: "Error with updating data", error: err.message});
    })
})



const deleteEquipment = (async (req, res) =>{
    let EquipmentId = req.params.id;

    await Equipment.findByIdAndDelete(EquipmentId)
    .then(() => {
        res.status(200).send({status: "Equipment delete"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete Equipment"});
    })
})

module.exports = {
    addEquipment,
    getAllEquipment,
    updateEquipment,
    deleteEquipment,
}