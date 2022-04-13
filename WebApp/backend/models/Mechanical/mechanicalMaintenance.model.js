const mongoose = require('mongoose')

//now create the schema
const { Schema } = mongoose

// model for type car
const carMaintenancePlanSchema = new Schema({
  planID: String,
  planName: String,
  spareParts: { type: Array, default: [] },
  planDescription: String,
  planEstHours: String,
  amount: String,
  discount: String,
  total: String,
})

// model for type bike
const bikeMaintenancePlanSchema = new Schema({
  planID: String,
  planName: String,
  spareParts: { type: Array, default: [] },
  planDescription: String,
  planEstHours: String,
  amount: String,
  discount: String,
  total: String,
})

// model for type three wheel
const wheelMaintenancePlanSchema = new Schema({
  planID: String,
  planName: String,
  spareParts: { type: Array, default: [] },
  planDescription: String,
  planEstHours: String,
  amount: String,
  discount: String,
  total: String,
})

// model for type utility vehicles
const UtilityMaintenancePlanSchema = new Schema({
  planID: String,
  planName: String,
  spareParts: { type: Array, default: [] },
  planDescription: String,
  planEstHours: String,
  amount: String,
  discount: String,
  total: String,
})

// model for type other vehicles
const otherMaintenancePlanSchema = new Schema({
  planID: String,
  planName: String,
  spareParts: { type: Array, default: [] },
  planDescription: String,
  planEstHours: String,
  amount: String,
  discount: String,
  total: String,
})

//convert schema into a model
//1st para = collection name, 2nd = schema
const CarModel = mongoose.model('CarMaintenancePlan', carMaintenancePlanSchema)
const BikeModel = mongoose.model(
  'BikeMaintenancePlan',
  bikeMaintenancePlanSchema,
)
const WheelModel = mongoose.model(
  'WheelMaintenancePlan',
  wheelMaintenancePlanSchema,
)

const UtilityModel = mongoose.model(
  'UtilityMaintenancePlan',
  UtilityMaintenancePlanSchema,
)

const OtherVehiTypeModel = mongoose.model(
  'OtherMaintenancePlan',
  otherMaintenancePlanSchema,
)

//export our module to controller
module.exports = {
  CarModel,
  BikeModel,
  WheelModel,
  UtilityModel,
  OtherVehiTypeModel,
}
