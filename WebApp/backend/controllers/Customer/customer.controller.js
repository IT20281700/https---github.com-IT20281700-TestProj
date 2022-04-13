//implement bussiness logic here
//CRUD functionalities

//import customer model
const Customer = require('../../models/Customer/customer.model');


const signUpCustomer = (req, res)=> {
    const cusName = req.body.cusName;
    const cusMobile = req.body.cusMobile;
    const cusNic = req.body.cusNic;
    const cusAddress = req.body.cusAddress;
    const password = req.body.password;
    const vehicle = req.body.vehicle;

    const newCustomer = new Customer({
        cusName,
        cusMobile,
        cusNic,
        cusAddress,
        password,
        vehicle
    });

    newCustomer.save().then((Customer) => {
        res.json(Customer);
    }).catch((err) => {
        res.json(err);
    })

}

const checkLoginCustomer = (req, res) => {
    const logMobile = req.body.logMobile;
    const logPassword = req.body.logpw;

    Customer.find({cusMobile:logMobile}).then((Customer) => {
        if((!Customer[0]) || (Customer[0].password != logPassword)) {
            res.json('Invalid Username or Password');
        }
        else {
            res.json('Login Successfull');
        }
    }).catch((err) => {
        res.json(err);
    })

}

const getDetailsToEdit = (req, res) => {
    const logMobile = req.params.id;

    Customer.find({cusMobile:logMobile}).then((Customer) => {
        res.json(Customer);
    }).catch((err) => {
        res.json(err);
    })
}

const updateCustomer = (req, res) => {

    Customer.findOneAndUpdate({cusMobile:req.body.oldMobile}, {$set:{password:req.body.newPassword, cusMobile:req.body.mobileNumber, vehicle:req.body.vehicleList}})
    .then(() => res.json('Good'))
    .catch(err => res.status(400).json('Error : ' +err));
}

const getCustomerVehicles = (req, res) => {
    const logMobile = req.params.id;

    Customer.find({cusMobile:logMobile}).then((Customer) => {
        res.json(Customer[0].vehicle);
    }).catch((err) => {
        res.json(err);
    })
}

const getAllUsers = (req, res) => {
    Customer.find().then((Customer) => {
        res.json(Customer);
    }).catch((err) => {
        res.json(err);
    })
}

module.exports = {
    signUpCustomer,
    checkLoginCustomer,
    getDetailsToEdit,
    updateCustomer,
    getCustomerVehicles,
    getAllUsers
}