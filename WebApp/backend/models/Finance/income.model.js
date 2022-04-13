const mongoose = require('mongoose');
const cors = require('cors');
//now create the schema
const { Schema }= mongoose;

const incomeSchema = new Schema({
    iCategory : String,
    amount : String,
    yDate : String,
    mDate : String,
    dDate : String,
    description : String
})

//convert schema into a model
//1st para = collection name, 2nd = schema
const income = mongoose.model("Income", incomeSchema);

module.exports = income;