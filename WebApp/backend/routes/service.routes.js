const express = require('express');
const router = express.Router();

const {
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
    heavyVehicleService,
} = require('../controllers/Services/pack.controller');

const {
    addService,
    getAllService,
    deleteService,
} = require('../controllers/Services/insertSer.controller');

const {
    Up_Small_service, 
    Up_AC_service,
    Up_heavy_service,
} = require('../controllers/Services/updatePack.controller');

//http://localhost:3001/api/Service/add
//add and view services
router.post("/add", addService);
router.get("/all", getAllService);
router.delete("/delete/:id", deleteService);

//service packeges
router.get("/Small_pack_full", S_full_Service);
router.get("/Small_pack_wash", S_body_wash);
router.get("/AC_pack_full", AC_full_Service);
router.get("/AC_pack_harf", AC_harfbody_wash);
router.get("/AC_pack_wash", AC_body_wash);
router.get("/Heavy_pack_full", H_full_Service);
router.get("/Heavy_pack_harf", H_harfbody_wash);
router.get("/Heavy_pack_wash", H_body_wash);

//suvin added this
router.get("/allSmallPack", smallVehicleService);
router.get("/allAcPack", acVehicleService);
router.get("/allHeavyPack", heavyVehicleService);


//update service packeges
router.put("/Small_pack/update/:id", Up_Small_service);
router.put("/AC_pack/update/:id", Up_AC_service);
router.put("/Heavy_pack/update/:id", Up_heavy_service);

module.exports = router;