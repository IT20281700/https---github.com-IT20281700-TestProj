const AssistReq = require('../../models/Customer/assistReq.model');

const RequestAssist = (req, res) => {
    const userName = req.body.userName;
    const userMobile = req.body.userMobile;
    const userAddress = req.body.userAddress;
    const latitude = Number(req.body.latitude);
    const longitude = Number(req.body.longitude);
    const urgent = Boolean(req.body.urgent);
    const problemDetail = req.body.problemDetail;

    const newAssistRequest = new AssistReq({
        userName,
        userMobile,
        userAddress,
        latitude,
        longitude,
        urgent,
        problemDetail
    });

    newAssistRequest.save().then((AssistReq) => {
        res.json(AssistReq);
    }).catch((err) => {
        res.json(err);
    })
}

const getAllAssists = (req, res) => {
    AssistReq.find().then((AssistReq) => {
        res.json(AssistReq);
    }).catch((err) => {
        res.json(err);
    })
}

const deleteAssistReq = (req, res) => {
    AssistReq.findByIdAndDelete(req.params.id)
        .then(() => res.json('Request Deleted.'))
        .catch(err => res.status(400).json('Error : ' + err));
}

module.exports = {
    RequestAssist,
    getAllAssists,
    deleteAssistReq,
}