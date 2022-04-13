const express = require('express')
const router = express.Router()

const {
  //add and get all set
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

  // get all schedule details
  getAllScheduleDetails,
  updateSchedule,
} = require('../../controllers/Mechanical/mechanicalMaintenance.controller')

//http://localhost:3001/api/maintenance/AddPlans/CAR
router.post('/AddPlans/CAR', addCarMaintenancePlan)
router.get('/AllPlans/CAR', getAllCarPlans)
router.get('/PlanCard/CAR/:id', getCarPlan)
router.delete('/deletePlan/CAR/:id', deleteCarPlan)
router.put('/updatePlan/CAR/:id', updateCarPlan)
router.put('/updatePID/CAR/:id', updateCarPID)

//http://localhost:3001/api/maintenance/AddPlans/BIKE
router.post('/AddPlans/BIKE', addBikeMaintenancePlan)
router.get('/AllPlans/BIKE', getAllBikePlans)
router.get('/PlanCard/BIKE/:id', getBikePlan)
router.delete('/deletePlan/BIKE/:id', deleteBikePlan)
router.put('/updatePlan/BIKE/:id', updateBikePlan)
router.put('/updatePID/BIKE/:id', updateBikePID)

//http://localhost:3001/api/maintenance/AddPlans/THREE WHEEL
router.post('/AddPlans/THREE%20WHEEL', addWheelMaintenancePlan)
router.get('/AllPlans/THREE%20WHEEL', getAllWheelPlans)
router.get('/PlanCard/THREE%20WHEEL/:id', getWheelPlan)
router.delete('/deletePlan/THREE%20WHEEL/:id', deleteWheelPlan)
router.put('/updatePlan/THREE%20WHEEL/:id', updateWheelPlan)
router.put('/updatePID/THREE%20WHEEL/:id', updateWheelPID)

//http://localhost:3001/api/maintenance/AddPlans/UTILIY VEHICLES
router.post('/AddPlans/UTILITY%20VEHICLES', addUtilityMaintenancePlan)
router.get('/AllPlans/UTILITY%20VEHICLES', getAllUtilityPlans)
router.get('/PlanCard/UTILITY%20VEHICLES/:id', getUtilityPlan)
router.delete('/deletePlan/UTILITY%20VEHICLES/:id', deleteUtilityPlan)
router.put('/updatePlan/UTILITY%20VEHICLES/:id', updateUtilityPlan)
router.put('/updatePID/UTILITY%20VEHICLES/:id', updateUtilityPID)

//http://localhost:3001/api/maintenance/AddPlans/OTHER
router.post('/AddPlans/OTHER', addOtherMaintenancePlan)
router.get('/AllPlans/OTHER', getAllOtherPlans)
router.get('/PlanCard/OTHER/:id', getOtherPlan)
router.delete('/deletePlan/OTHER/:id', deleteOtherPlan)
router.put('/updatePlan/OTHER/:id', updateOtherPlan)
router.put('/updatePID/OTHER/:id', updateOtherPID)

//http://localhost:3001/api/maintenance/allscheduleservices
router.get('/allscheduleservices', getAllScheduleDetails)
router.put('/assignEmployee/:id', updateSchedule)

module.exports = router
