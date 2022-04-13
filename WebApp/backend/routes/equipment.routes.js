const express = require('express');
const router = express.Router();
const upload = require("../models/Equipment/upload");

const {
    addEquipment,
    getAllEquipment,
    updateEquipment,
    deleteEquipment
} = require('../controllers/Equipment/equipment.controller');

const {
    getAllobEquipment,
    euqObtain,
    getObtainEquipment,
    deleteobtainEquipment
} = require('../controllers/Equipment/obtained_equipment.controlle');


const{
    getImages,
    deleteImages,
} = require("../controllers/Equipment/upload");

//http://localhost:3001/equipment/add
//http://localhost:3001/equipment/all
//http://localhost:3001/equipment/update/:id
//http://localhost:3001/equipment/delete/:id
//if call above url with post method addCustomer method will be called

//equipment
router.post("/add", addEquipment);
router.get("/all", getAllEquipment);
router.put("/update/:id", updateEquipment);
router.delete("/delete/:id",deleteEquipment);

//image upload
router.post("/upload", upload.single("file"), (req, res)=>{

    if(`${req.file.bucketName}`==="file"){
         return res.send("you must select a file, select Images");
    }
    else{
    const url=`http://localhost:3001/equipment/images/${req.file.filename}`;
    return res.json(url);
    }
});

router.get("/images/:filename", getImages);
router.delete("/images/delete/:filename", deleteImages);

//add nad remove
//http://localhost:3001/equipment/getall
//http://localhost:3001/equipment/obtainequ
//http://localhost:3001/equipment/getobtainequ/:id
//http://localhost:3001/equipment/deleteobtainequ/:id

router.get("/getall", getAllobEquipment);
router.post("/obtainequ", euqObtain);
router.get("/getobtainequ/:emId",getObtainEquipment);
router.delete("/deleteobtainequ/:id",deleteobtainEquipment);

module.exports = router;