const Invoice = require('../../models/Customer/invoice.model');

const createInvoice = (req, res) => {
    const invoiceNo = req.body.invoiceNo;
    const serviceDate = req.body.serviceDate;
    const customerName = req.body.customerName;
    const serviceVehicle = req.body.serviceVehicle;
    const jobDoneBy = req.body.jobDoneBy;
    const totalAmount = req.body.totalAmount;
    const itemList = req.body.itemList;

    const newInvoice = new Invoice({
        invoiceNo,
        serviceDate,
        customerName,
        serviceVehicle,
        jobDoneBy,
        totalAmount,
        itemList,
    });

    newInvoice.save().then((Invoice) => {
        res.json(Invoice);
    }).catch((err) => {
        res.json(err);
    })
}

const getLastInvoice = (req, res) => {
    Invoice.find().then((Invoice) => {
        res.json(Invoice[Invoice.length-1].invoiceNo);
    }).catch((err) => {
        res.json(err);
    })
}

const getInvoiceForVehicle = (req, res) => {
    const vehicle = req.params.id;

    Invoice.find({serviceVehicle:vehicle}).then((Invoice) => {
        res.json(Invoice);
    }).catch((err) => {
        res.json(err);
    })
}

module.exports = {
    createInvoice,
    getLastInvoice,
    getInvoiceForVehicle
}