const mongoose = require('mongoose');
const cors = require('cors');
//now create the schema
const { Schema }= mongoose;

const expenditureSchema = new Schema({
    iname : String,
    amount : String,
    yDate : String,
    mDate : String,
    dDate : String,
    description : String
});

//convert schema into a model
//1st para = collection name, 2nd = schema
const expenditure = mongoose.model("expenditure", expenditureSchema);


//export our module to controller
module.exports = expenditure;
