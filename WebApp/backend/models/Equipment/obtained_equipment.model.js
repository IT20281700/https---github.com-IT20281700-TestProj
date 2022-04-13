const mongoose = require('mongoose');
const cors = require('cors');

//now create the schema
const { Schema }= mongoose;

const EquObtainSchema = new Schema({
    emId : String,
    eqName : String
});

//convert schema into a model
//1st para = collection name, 2nd = schema
const EquObtain = mongoose.model("EquObtain", EquObtainSchema);

//export our module to controller
module.exports = EquObtain;
