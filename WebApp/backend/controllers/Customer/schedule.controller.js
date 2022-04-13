const ScheduleService = require('../../models/Customer/schedule.model');

const addServiceSchedule = (req, res) => {
    const schName = req.body.schName;
    const schMobile = req.body.schMobile;
    const schVehicle = req.body.schVehicle;
    const schDate = req.body.schDate;

    const taskList = req.body.schType;
    const taskType = req.body.taskType;
    const assignedEmployee = '';
    const scheduledTime = '';

    const taskDetails = {taskType, taskList};

    const newServiceSchedule = new ScheduleService({
        schName,
        schMobile,
        schVehicle,
        schDate,
        taskDetails,
        scheduledTime,
        assignedEmployee
    });

    newServiceSchedule.save().then((ScheduleService) => {
        res.json(ScheduleService);
    }).catch((err) => {
        res.json(err);
    })
}

const getCustomerSchedule = (req, res) => {
    const logMobile = req.params.id;

    ScheduleService.find({schMobile:logMobile}).then((ScheduleService) => {
        const data = {
            schDate:ScheduleService[0].schDate,
            schTime:ScheduleService[0].scheduledTime,
            schVehicle:ScheduleService[0].schVehicle
        }

        res.json(data);

    }).catch((err) => {
        res.json(err);
    })
}

module.exports = {
    addServiceSchedule,
    getCustomerSchedule
}