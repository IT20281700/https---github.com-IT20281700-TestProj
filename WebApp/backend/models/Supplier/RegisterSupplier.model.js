const mongoose = require('mongoose');
const cors = require('cors');

//now create the schema
const { Schema }= mongoose;

const regsupplier = new Schema({
    firstname : String,
    lastname : String,
    companyname : String,
    pnum : Number,
    Email : String,
    password : String,
   
});

//convert schema into a model
//1st para = collection name, 2nd = schema
const Rsupplier = mongoose.model("Registeredsupplier",regsupplier);

//export our module to controller
module.exports = Rsupplier ;