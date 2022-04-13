//implement bussiness logic here
//CRUD functionalities

//import RegisterSupplier  model
const supplier = require('../../models/Supplier/RegisterSupplier.model');

//add new suppliers
const registersupplier = (req, res) => {

    // const cusName = req.body.name;
    // const pnum = Number(req.body.phoneNumber);
    // const age = Number(req.body.age);
    // const vehicle = req.body.vehicle;

    //like this we can give one by one

    //or else in one line:
    const {firstname,lastname,companyname,pnum,Email,password,confirmpassword} = req.body;

    //create a object

    const newregsupplier = new supplier({
        firstname,
        lastname,
        companyname,
        pnum,
        Email,
        password,
        
    });

    newregsupplier.save().then((supplier) => {
        res.json(supplier);
    }).catch((err)=>{
        res.json(err);
    });

}

const getAllSuppliers = (req, res)=> {
    
    //get all customers is by find() method.
    //read mongoose queries
    supplier.find().then((supplier)=>{
        res.json(supplier);
    }).catch((err)=>{
        res.json(err);
    })
}

const getonetempsupplier =(req,res) =>{
    supplier.findById(req.params.id)
    .then((supplier)=>res.json(supplier)
    ).catch(err => res.status(400).json('Error : ' + err))
}

const tempdeletetsupplier = (req, res) => {
    supplier.findByIdAndDelete(req.params.id)
        .then(() => res.json('Request Deleted.'))
        .catch(err => res.status(400).json('Error : ' + err));
}




module.exports = {
    registersupplier,
    getAllSuppliers,
    getonetempsupplier,
    tempdeletetsupplier
}