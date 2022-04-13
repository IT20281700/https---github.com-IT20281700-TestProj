const express = require('express');
const router = express.Router();

const {
    registersupplier,
    getAllSuppliers,
    getonetempsupplier,
    tempdeletetsupplier
} = require('../controllers/Supplier/regsupplier.controller');


const {
    acceptsupplier,
    getpermenentSuppliers ,
    updatesupplier,
    deletesupplier,
    getonesupplier,
    checkLoginSupplier
    
} = require('../controllers/Supplier/acceptsupplier.controller');

// get spareparts details



//http://localhost:3001/api/Customer/add
//if call above url with post method addCustomer method will be called
router.post("/",registersupplier);
router.get("/all",getAllSuppliers);
router.get("/tempone/:id",getonetempsupplier);
router.delete("/tempdelete/:id",tempdeletetsupplier);
router.post("/add",acceptsupplier);
router.get("/get",getpermenentSuppliers);
router.put("/update/:id",updatesupplier);
router.delete("/delete/:id", deletesupplier);
router.get("/getone/:id",getonesupplier);
router.post("/loginme", checkLoginSupplier);



module.exports = router;