const ACservice = require('../../models/Services/acPack.model');
const Sservice = require('../../models/Services/smallPack.model');
const Hservice = require('../../models/Services/heavyPack.model');

//update small vehicals
const Up_Small_service = (req, res) => {
    let serviceId = req.params.id;
    const {packName, price, status} = req.body;

    const updateService = {
        packName,
        price,
        status,
    }

    Sservice.findByIdAndUpdate(serviceId, updateService).then((Sservice)=>{
        res.json(updateService);
    }).catch((err)=>{
        res.json(err);
    })
}

//update A/C vehicals
const Up_AC_service = (req, res) => {
    let serviceId = req.params.id;
    const {packName, price, status} = req.body;

    const updateService = {
        packName,
        price,
        status,
    }

    ACservice.findByIdAndUpdate(serviceId, updateService).then((ACservice)=>{
        res.json(updateService);
    }).catch((err)=>{
        res.json(err);
    })
}

//update heavy vehicals
const Up_heavy_service = (req, res) => {
    let serviceId = req.params.id;
    const {packName, price, status} = req.body;

    const updateService = {
        packName,
        price,
        status,
    }

    Hservice.findByIdAndUpdate(serviceId, updateService).then((Hservice)=>{
        res.json(updateService);
    }).catch((err)=>{
        res.json(err);
    })
}

module.exports ={
    Up_Small_service,
    Up_AC_service,
    Up_heavy_service,
}