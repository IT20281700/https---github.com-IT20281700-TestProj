const mongoose = require('mongoose');
const cors = require('cors');

//now create the schema
const { Schema }= mongoose;

const serviceSchema = new Schema({
    serName : String,
    serCategory : String,
    serPrice : String,
    serHour : String,
    serPart : String
});

//convert schema into a model
//1st para = collection name, 2nd = schema
const Service = mongoose.model("Service", serviceSchema);

//export our module to controller
module.exports = Service;