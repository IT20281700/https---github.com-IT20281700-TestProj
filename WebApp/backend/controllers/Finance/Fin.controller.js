//update
const income = require("../../models/Finance/income.model");
const expenditure = require("../../models/Finance/expenditure.model");


const updateIncome = (req, res) =>{
    let IncomeId = req.params.id;
    const {amount}= req.body;

const updateIncome ={
    amount,
}

const update = income.findByIdAndUpdate(IncomeId,updateIncome)
.then(()=>{
    res.status(200).send({status:"Income Update"})
}).catch((err) => {
    console.log(err);
    res.status(500).send({ststus: "Error with updating data", error: err.message})
})
}



const updateExpenditure = (req, res) =>{
    let ExpenditureId = req.params.id;
    const {amount}= req.body;

const updateExpenditure ={
    amount,
}

expenditure.findByIdAndUpdate(ExpenditureId,updateExpenditure)
.then(()=>{
    res.status(200).send({status:"Expenditure Update"})
}).catch((err) => {
    console.log(err);
    res.status(500).send({ststus: "Error with updating data", error: err.message});
})
}




//delete
const deleteIncome = (req, res) =>{
let IncomeId = req.params.id;
income.findByIdAndDelete(IncomeId)
.then(() => {
    res.status(200).send({status: "Income delete"});
}).catch((err) => {
    console.log(err.message);
    res.status(500).send({status: "Error with delete Income"});
})
}

const deleteExpenditure = (req, res) =>{
    let ExpenditureId = req.params.id;
    expenditure.findByIdAndDelete(ExpenditureId)
    .then(() => {
        res.status(200).send({status: "Expenditure delete"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete Expenditure"});
    })
    }



module.exports = {
updateIncome,
deleteIncome,
updateExpenditure,
deleteExpenditure
}




