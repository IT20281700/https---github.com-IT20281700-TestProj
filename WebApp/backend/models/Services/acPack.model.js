const mongoose = require('mongoose');
const cors = require('cors');

//now create the schema
const { Schema }= mongoose;

const acpackSchema = new Schema({
    packName : String,
    price : String,
    status : String
});

//convert schema into a model
//1st para = collection name, 2nd = schema
const ACservice = mongoose.model("acvehicals", acpackSchema);

//export our module to controller
module.exports =ACservice;