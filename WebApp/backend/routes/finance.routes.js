const express = require('express');
const router = express.Router();

const {
    addIncome, 
    addexpenditure,
    getAllIncomes,
    getAllExpenditures,
    getincome,
    getexpenditure,

} = require('../controllers/Finance/acc.controller');

const {
    updateIncome, updateExpenditure,
    deleteIncome,
    deleteExpenditure,
} = require('../controllers/Finance/Fin.controller');



router.post("/addIncome", addIncome);
router.post("/addexpenditure", addexpenditure);


router.get("/allIncome", getAllIncomes);
router.get("/allExpenditure", getAllExpenditures);

router.put("/updateIncome/:id", updateIncome);
router.put("/updateExpenditure/:id", updateExpenditure);

router.get("/getIncome/:id", getincome);
router.get("/getExpenditure/:id", getexpenditure);

router.delete("/deleteIncome/:id", deleteIncome);
router.delete("/deleteExpenditure/:id", deleteExpenditure);



module.exports = router;