//implement bussiness logic here
//CRUD functionalities

//import acc model
const expenditure = require('../../models/Finance/expenditure.model');
const income = require('../../models/Finance/income.model');

//add income
const addIncome = (req, res) => {

    // const category = req.body.category;
    // const amount = Number(req.body.amount);
    // const date = Number(req.body.date);
    // const description = req.body.description;

    //like this we can give one by one

    //or else in one line:
    const {iCategory, amount, yDate, mDate, dDate, description} = req.body;

    //create a object

    const newIncome = new income({
        iCategory,
        amount,
        yDate,
        mDate,
        dDate,
        description
    });

    newIncome.save().then((income) => {
        res.json(income);
    }).catch((err)=>{
        res.json(err);
    }); 

}

//add expenditure
const addexpenditure = (req, res) => {

    // const name = req.body.name;
    // const amount = Number(req.body.amount);
    // const date = Number(req.body.date);
    // const description = req.body.description;

    //like this we can give one by one

    //or else in one line:
    const {iname, amount, yDate, mDate, dDate,  description} = req.body;

    //create a object

    const newExpenditure = new expenditure({
        iname,
        amount,
        yDate,
        mDate,
        dDate,
        description
    });

    newExpenditure.save().then((expenditure) => {
        res.json(expenditure);
    }).catch((err)=>{
        res.json(err);
    });

}

const getAllIncomes = (req, res)=> {
    
    //get all incomes is by find() method.
    //read mongoose queries
    income.find().then((income)=>{
        res.json(income);
    }).catch((err)=>{
        res.json(err);
    })
}

const getAllExpenditures = (req, res)=> {
    
    //get all expenditures is by find() method.
    //read mongoose queries
    expenditure.find().then((expenditure)=>{
        res.json(expenditure);
    }).catch((err)=>{
        res.json(err);
    })
}

const getincome = (req, res) =>{
    income.find({mDate:req.params.id}).then((income)=>{
        res.json(income);
    }).catch((err)=>{
        res.json(err);
    })

}

const getexpenditure = (req, res) =>{

    expenditure.find({mDate:req.params.id}).then((expenditure)=>{
        res.json(expenditure);
    }).catch((err)=>{
        res.json(err);
    })

}


module.exports = {
    addIncome,
    addexpenditure,
    getAllIncomes,
    getAllExpenditures,
    getincome,
    getexpenditure
}