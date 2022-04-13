const Asupplier = require('../../models/Supplier/AcceptSupplier.model');


//add new suppliers
const acceptsupplier = (req, res) => {

    // const cusName = req.body.name;
    // const pnum = Number(req.body.phoneNumber);
    // const age = Number(req.body.age);
    // const vehicle = req.body.vehicle;

    //like this we can give one by one

    //or else in one line:
    const {firstname,lastname,companyname,pnum,Email,password} = req.body;

    //create a object

    const newasupplier = new Asupplier({
        firstname,
        lastname,
        companyname,
        pnum,
        Email,
        password
    });

    newasupplier.save().then((Asupplier) => {
        res.json(Asupplier);
    }).catch((err)=>{
        res.json(err);
    });

}

const getpermenentSuppliers = (req, res)=> {
    
    //get all customers is by find() method.
    //read mongoose queries
    Asupplier.find().then((Asupplier)=>{
        res.json(Asupplier);
    }).catch((err)=>{
        res.json(err);
    })
}

const updatesupplier = (req, res)=>{

    const {firstname,lastname,companyname,pnum,Email} = req.body

    const dataset = {firstname,lastname,companyname,pnum,Email}
    
    Asupplier.findByIdAndUpdate(req.params.id,dataset)
    .then((Asupplier) => res.json(dataset))
    .catch(err => res.status(400).json('Error : ' + err));
}

const getonesupplier =(req,res) =>{
    Asupplier.findById(req.params.id)
    .then((Asupplier)=>res.json(Asupplier)
    ).catch(err => res.status(400).json('Error : ' + err))
}

const deletesupplier = (req, res) => {
    Asupplier.findByIdAndDelete(req.params.id)
        .then(() => res.json('Request Deleted.'))
        .catch(err => res.status(400).json('Error : ' + err));
}

const checkLoginSupplier = (req, res) => {
    const logEmail = req.body.logEmail;
    const logpw = req.body.logpw;

    Asupplier.find({Email:logEmail}).then((Asupplier) => {
        if((!Asupplier[0])  || (Asupplier[0].password != logpw)) {
            res.json('Invalid Username or Password');
        }
        else {
            res.json('Login Successfull');
        }
    }).catch((err) => {
        res.json(err);
    })
}


module.exports = {
    acceptsupplier,
    getpermenentSuppliers,
    updatesupplier,
    deletesupplier,
    getonesupplier,
    checkLoginSupplier
}