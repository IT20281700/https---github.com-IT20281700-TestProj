import jsPDF from 'jspdf'
import 'jspdf-autotable'

const genPdfMaintenance = (SchedulesMM) => {
  const doc = new jsPDF()

  const tableColumn = [
    'Customer Name',
    'Mobile Number',
    'Vehicle',
    'Scheduled Date',
    'Scheduled Time',
    'Assigned Employee',
    'Task Type',
    'Task Details',
  ]

  const tableRows = []

  SchedulesMM.forEach((sch) => {
    const date = new Date(sch.schDate).toLocaleDateString()

    const schData = [
      sch.schName,
      sch.schMobile,
      sch.schVehicle,
      date,
      sch.scheduledTime,
      sch.assignedEmployee,
      sch.taskDetails.taskType,
      sch.taskDetails.taskList,
    ]
    tableRows.push(schData)
  })

  doc.text('All Scheduled details in Dulaj Motor System', 14, 15)
  doc.autoTable(tableColumn, tableRows, { startY: 20 })
  doc.save('ScheduledReport.pdf')
}

export default genPdfMaintenance
