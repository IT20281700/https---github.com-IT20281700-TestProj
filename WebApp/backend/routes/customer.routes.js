const express = require('express');
const router = express.Router();

// const {
//     addCustomer,
//     getAllCustomers
// } = require('../controllers/customer.controller');

const {
    signUpCustomer, 
    checkLoginCustomer,
    getDetailsToEdit,
    updateCustomer,
    getCustomerVehicles,
    getAllUsers
} = require('../controllers/Customer/customer.controller');

const {
    RequestAssist,
    getAllAssists,
    deleteAssistReq
} = require('../controllers/Customer/assistReq.controller');

const {
    addServiceSchedule,
    getCustomerSchedule
} = require('../controllers/Customer/schedule.controller');

const {
    createInvoice,
    getLastInvoice,
    getInvoiceForVehicle
} = require('../controllers/Customer/invoice.controller');

//http://localhost:3001/api/Customer/add
//if call above url with post method addCustomer method will be called
//router.post("/add", addCustomer);
//router.get("/all", getAllCustomers);

router.post("/signup", signUpCustomer);
router.post("/requestAssist", RequestAssist);
router.get("/getAllReq", getAllAssists);
router.delete("/deleteAssist/:id", deleteAssistReq);
router.post("/loginme", checkLoginCustomer);
router.post("/schedule", addServiceSchedule);
router.get("/getDataToEditProfile/:id", getDetailsToEdit);
router.post("/updateCustomer", updateCustomer);
router.post("/addInvoice", createInvoice);
router.get("/getLastInvoiceNo", getLastInvoice);
router.get("/getCustomerVehicle/:id", getCustomerVehicles);
router.get("/getCustomerSchedules/:id", getCustomerSchedule);
router.get("/getInvoiceForVehicle/:id", getInvoiceForVehicle);
router.get("/getAllUsers", getAllUsers);

module.exports = router;