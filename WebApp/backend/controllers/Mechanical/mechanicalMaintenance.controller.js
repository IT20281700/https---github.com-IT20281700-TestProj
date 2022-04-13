//implement bussiness logic here
//CRUD functionalities

//import mechanical maintenance model
const {
  CarModel,
  BikeModel,
  WheelModel,
  UtilityModel,
  OtherVehiTypeModel,
} = require('../../models/Mechanical/mechanicalMaintenance.model')

const ScheduleService = require('../../models/Customer/schedule.model')

//add car maintenance plan
const addCarMaintenancePlan = (req, res) => {
  // pass the data in one line
  const {
    planID,
    planName,
    spareParts,
    planDescription,
    planEstHours,
    amount,
    discount,
    total,
  } = req.body

  //create a object

  const plan1 = new CarModel({
    planID,
    planName,
    spareParts,
    planDescription,
    planEstHours,
    amount,
    discount,
    total,
  })

  plan1
    .save()
    .then((plan1) => {
      res.json(plan1)
    })
    .catch((err) => {
      res.json(err)
    })
}

//get All car maintenance plans from database
const getAllCarPlans = (req, res) => {
  //get all plans is by find() method.
  //read mongoose queries
  CarModel.find()
    .then((CarModel) => {
      res.json(CarModel)
    })
    .catch((err) => {
      res.json(err)
    })
}

//get a car maintenance plans from database by id
const getCarPlan = (req, res) => {
  //get a plans is by findById() method.
  const _id = req.params.id
  //read mongoose queries
  CarModel.findById(_id)
    .then((CarModel) => {
      res.json(CarModel)
    })
    .catch((err) => {
      res.json(err)
    })
}

//delete car maintenance plan card
const deleteCarPlan = (req, res) => {
  const _id = req.params.id
  CarModel.findByIdAndDelete(_id)
    .then((CarModel) => {
      res.json(CarModel)
    })
    .catch((err) => {
      res.json(err)
    })
}

// update car maintenance plan card
const updateCarPlan = (req, res) => {
  const _id = req.params.id
  // pass the data in one line
  const {
    planID,
    planName,
    spareParts,
    planDescription,
    planEstHours,
    amount,
    discount,
    total,
  } = req.body

  //create a object

  const updatePlan1 = {
    planID,
    planName,
    spareParts,
    planDescription,
    planEstHours,
    amount,
    discount,
    total,
  }

  CarModel.findByIdAndUpdate(_id, updatePlan1)
    .then((CarModel) => {
      res.json(CarModel)
    })
    .catch((err) => {
      res.json(err)
    })
}

// when delete the card, update the plan id
const updateCarPID = (req, res) => {
  const _id = req.params.id
  const planID = req.body

  CarModel.findOneAndUpdate({ planID: _id }, planID)
    .then(() => {
      res.json('Plan ID updated')
    })
    .catch((err) => {
      res.json(err)
    })
}

//-----------------------------

//add bike maintenance plan
const addBikeMaintenancePlan = (req, res) => {
  // pass the data in one line
  const {
    planID,
    planName,
    spareParts,
    planDescription,
    planEstHours,
    amount,
    discount,
    total,
  } = req.body

  //create a object

  const plan2 = new BikeModel({
    planID,
    planName,
    spareParts,
    planDescription,
    planEstHours,
    amount,
    discount,
    total,
  })

  plan2
    .save()
    .then((plan2) => {
      res.json(plan2)
    })
    .catch((err) => {
      res.json(err)
    })
}

//get All bike maintenance plans from database
const getAllBikePlans = (req, res) => {
  //get all plans is by find() method.
  //read mongoose queries
  BikeModel.find()
    .then((BikeModel) => {
      res.json(BikeModel)
    })
    .catch((err) => {
      res.json(err)
    })
}

//get a bike maintenance plans from database by id
const getBikePlan = (req, res) => {
  //get a plans is by findById() method.
  const _id = req.params.id
  //read mongoose queries
  BikeModel.findById(_id)
    .then((BikeModel) => {
      res.json(BikeModel)
    })
    .catch((err) => {
      res.json(err)
    })
}

//delete car maintenance plan card
const deleteBikePlan = (req, res) => {
  const _id = req.params.id
  BikeModel.findByIdAndDelete(_id)
    .then((BikeModel) => {
      res.json(BikeModel)
    })
    .catch((err) => {
      res.json(err)
    })
}

// update bike maintenance plan card
const updateBikePlan = (req, res) => {
  const _id = req.params.id
  // pass the data in one line
  const {
    planID,
    planName,
    spareParts,
    planDescription,
    planEstHours,
    amount,
    discount,
    total,
  } = req.body

  //create a object

  const updatePlan2 = {
    planID,
    planName,
    spareParts,
    planDescription,
    planEstHours,
    amount,
    discount,
    total,
  }

  BikeModel.findByIdAndUpdate(_id, updatePlan2)
    .then((BikeModel) => {
      res.json('Car Plan Updated By ' + _id)
      res.json(BikeModel)
    })
    .catch((err) => {
      res.json(err)
    })
}

// when delete the card, update the plan id
const updateBikePID = (req, res) => {
  const _id = req.params.id
  const planID = req.body

  BikeModel.findOneAndUpdate({ planID: _id }, planID)
    .then(() => {
      res.json('Plan ID updated')
    })
    .catch((err) => {
      res.json(err)
    })
}

//-----------------------------

//add wheel maintenance plan
const addWheelMaintenancePlan = (req, res) => {
  // pass the data in one line
  const {
    planID,
    planName,
    spareParts,
    planDescription,
    planEstHours,
    amount,
    discount,
    total,
  } = req.body

  //create a object

  const plan3 = new WheelModel({
    planID,
    planName,
    spareParts,
    planDescription,
    planEstHours,
    amount,
    discount,
    total,
  })

  plan3
    .save()
    .then((plan3) => {
      res.json(plan3)
    })
    .catch((err) => {
      res.json(err)
    })
}

//get All wheel maintenance plans from database
const getAllWheelPlans = (req, res) => {
  //get all plans is by find() method.
  //read mongoose queries
  WheelModel.find()
    .then((WheelModel) => {
      res.json(WheelModel)
    })
    .catch((err) => {
      res.json(err)
    })
}

//get a three wheel maintenance plans from database by id
const getWheelPlan = (req, res) => {
  //get a plans is by findById() method.
  const _id = req.params.id
  //read mongoose queries
  WheelModel.findById(_id)
    .then((WheelModel) => {
      res.json(WheelModel)
    })
    .catch((err) => {
      res.json(err)
    })
}

//delete car maintenance plan card
const deleteWheelPlan = (req, res) => {
  const _id = req.params.id
  WheelModel.findByIdAndDelete(_id)
    .then((WheelModel) => {
      res.json(WheelModel)
    })
    .catch((err) => {
      res.json(err)
    })
}

// update three wheel maintenance plan card
const updateWheelPlan = (req, res) => {
  const _id = req.params.id
  // pass the data in one line
  const {
    planID,
    planName,
    spareParts,
    planDescription,
    planEstHours,
    amount,
    discount,
    total,
  } = req.body

  //create a object

  const updatePlan3 = {
    planID,
    planName,
    spareParts,
    planDescription,
    planEstHours,
    amount,
    discount,
    total,
  }

  WheelModel.findByIdAndUpdate(_id, updatePlan3)
    .then((WheelModel) => {
      res.json('Car Plan Updated By ' + _id)
      res.json(WheelModel)
    })
    .catch((err) => {
      res.json(err)
    })
}

// when delete the card, update the plan id
const updateWheelPID = (req, res) => {
  const _id = req.params.id
  const planID = req.body

  WheelModel.findOneAndUpdate({ planID: _id }, planID)
    .then(() => {
      res.json('Plan ID updated')
    })
    .catch((err) => {
      res.json(err)
    })
}

//-----------------------------

//add Utility maintenance plan
const addUtilityMaintenancePlan = (req, res) => {
  // pass the data in one line
  const {
    planID,
    planName,
    spareParts,
    planDescription,
    planEstHours,
    amount,
    discount,
    total,
  } = req.body

  //create a object

  const plan3 = new UtilityModel({
    planID,
    planName,
    spareParts,
    planDescription,
    planEstHours,
    amount,
    discount,
    total,
  })

  plan3
    .save()
    .then((plan3) => {
      res.json(plan3)
    })
    .catch((err) => {
      res.json(err)
    })
}

//get All Utility maintenance plans from database
const getAllUtilityPlans = (req, res) => {
  //get all plans is by find() method.
  //read mongoose queries
  UtilityModel.find()
    .then((UtilityModel) => {
      res.json(UtilityModel)
    })
    .catch((err) => {
      res.json(err)
    })
}

//get a three Utility maintenance plans from database by id
const getUtilityPlan = (req, res) => {
  //get a plans is by findById() method.
  const _id = req.params.id
  //read mongoose queries
  UtilityModel.findById(_id)
    .then((UtilityModel) => {
      res.json(UtilityModel)
    })
    .catch((err) => {
      res.json(err)
    })
}

//delete car maintenance plan card
const deleteUtilityPlan = (req, res) => {
  const _id = req.params.id
  UtilityModel.findByIdAndDelete(_id)
    .then((UtilityModel) => {
      res.json(UtilityModel)
    })
    .catch((err) => {
      res.json(err)
    })
}

// update three Utility maintenance plan card
const updateUtilityPlan = (req, res) => {
  const _id = req.params.id
  // pass the data in one line
  const {
    planID,
    planName,
    spareParts,
    planDescription,
    planEstHours,
    amount,
    discount,
    total,
  } = req.body

  //create a object

  const updatePlan3 = {
    planID,
    planName,
    spareParts,
    planDescription,
    planEstHours,
    amount,
    discount,
    total,
  }

  UtilityModel.findByIdAndUpdate(_id, updatePlan3)
    .then((UtilityModel) => {
      res.json('Car Plan Updated By ' + _id)
      res.json(UtilityModel)
    })
    .catch((err) => {
      res.json(err)
    })
}

// when delete the card, update the plan id
const updateUtilityPID = (req, res) => {
  const _id = req.params.id
  const planID = req.body

  UtilityModel.findOneAndUpdate({ planID: _id }, planID)
    .then(() => {
      res.json('Plan ID updated')
    })
    .catch((err) => {
      res.json(err)
    })
}

//-----------------------------

//add other maintenance plan
const addOtherMaintenancePlan = (req, res) => {
  // pass the data in one line
  const {
    planID,
    planName,
    spareParts,
    planDescription,
    planEstHours,
    amount,
    discount,
    total,
  } = req.body

  //create a object

  const plan4 = new OtherVehiTypeModel({
    planID,
    planName,
    spareParts,
    planDescription,
    planEstHours,
    amount,
    discount,
    total,
  })

  plan4
    .save()
    .then((plan4) => {
      res.json(plan4)
    })
    .catch((err) => {
      res.json(err)
    })
}

//get All other maintenance plans from database
const getAllOtherPlans = (req, res) => {
  //get all plans is by find() method.
  //read mongoose queries
  OtherVehiTypeModel.find()
    .then((OtherVehiTypeModel) => {
      res.json(OtherVehiTypeModel)
    })
    .catch((err) => {
      res.json(err)
    })
}

//get a other maintenance plans from database by id
const getOtherPlan = (req, res) => {
  //get a plans is by findById() method.
  const _id = req.params.id
  //read mongoose queries
  OtherVehiTypeModel.findById(_id)
    .then((OtherVehiTypeModel) => {
      res.json(OtherVehiTypeModel)
    })
    .catch((err) => {
      res.json(err)
    })
}

//delete car maintenance plan card
const deleteOtherPlan = (req, res) => {
  const _id = req.params.id
  OtherVehiTypeModel.findByIdAndDelete(_id)
    .then((OtherVehiTypeModel) => {
      res.json(OtherVehiTypeModel)
    })
    .catch((err) => {
      res.json(err)
    })
}

// update three wheel maintenance plan card
const updateOtherPlan = (req, res) => {
  const _id = req.params.id
  // pass the data in one line
  const {
    planID,
    planName,
    spareParts,
    planDescription,
    planEstHours,
    amount,
    discount,
    total,
  } = req.body

  //create a object

  const updatePlan4 = {
    planID,
    planName,
    spareParts,
    planDescription,
    planEstHours,
    amount,
    discount,
    total,
  }

  OtherVehiTypeModel.findByIdAndUpdate(_id, updatePlan4)
    .then((OtherVehiTypeModel) => {
      res.json('Car Plan Updated By ' + _id)
      res.json(OtherVehiTypeModel)
    })
    .catch((err) => {
      res.json(err)
    })
}

// when delete the card, update the plan id
const updateOtherPID = (req, res) => {
  const _id = req.params.id
  const planID = req.body

  OtherVehiTypeModel.findOneAndUpdate({ planID: _id }, planID)
    .then(() => {
      res.json('Plan ID updated')
    })
    .catch((err) => {
      res.json(err)
    })
}

// -----------------------------------------------------------------------
// get all Schedule details
const getAllScheduleDetails = (req, res) => {
  //get all plans is by find() method.
  //read mongoose queries
  ScheduleService.find()
    .then((ScheduleService) => {
      res.json(ScheduleService)
    })
    .catch((err) => {
      res.json(err)
    })
}

// update Schedule table with time and employee id
const updateSchedule = (req, res) => {
  let _id = req.params.id

  const { scheduledTime, assignedEmployee } = req.body
  const dataSet = { scheduledTime, assignedEmployee }

  ScheduleService.findByIdAndUpdate(_id, dataSet)
    .then((dataSet) => {
      res.json(dataSet)
    })
    .catch((err) => {
      res.json(err)
    })
}

// -----------------------------------------------------------------------

module.exports = {
  //add and getAll set
  addCarMaintenancePlan,
  getAllCarPlans,
  getCarPlan,
  addBikeMaintenancePlan,
  getAllBikePlans,
  getBikePlan,
  addWheelMaintenancePlan,
  getAllWheelPlans,
  getWheelPlan,
  addUtilityMaintenancePlan,
  getAllUtilityPlans,
  getUtilityPlan,
  addOtherMaintenancePlan,
  getAllOtherPlans,
  getOtherPlan,

  //delete by id set
  deleteCarPlan,
  deleteBikePlan,
  deleteWheelPlan,
  deleteUtilityPlan,
  deleteOtherPlan,

  // update by id
  updateCarPlan,
  updateBikePlan,
  updateWheelPlan,
  updateUtilityPlan,
  updateOtherPlan,

  //update only plan id
  updateCarPID,
  updateBikePID,
  updateWheelPID,
  updateUtilityPID,
  updateOtherPID,

  // Schedule services details
  getAllScheduleDetails,
  updateSchedule,
}
