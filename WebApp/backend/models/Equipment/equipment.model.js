
const mongoose = require('mongoose');
const cors = require('cors');

//now create the schema
const { Schema }= mongoose;

const equipmentSchema = new Schema({
    eqId : String,
    eqName : String,
    Location: String,
    photo: String,
});

//convert schema into a model
//1st para = collection name, 2nd = schema
const Equipment = mongoose.model("Equipment", equipmentSchema);

//export our module to controller
module.exports = Equipment;
