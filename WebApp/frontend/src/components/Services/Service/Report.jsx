import jsPDF from "jspdf";
import "jspdf-autotable";

const genetatePDFService = Service => {
    const doc = new jsPDF();

    const tableColum = ["Servie Name", "Category", "Service Price", "Hour For Service"];
    const tableRow = [];

    Service.forEach(ser => {
        const serviceData = [
            ser.serName,
            ser.serCategory,
            ser.serPrice,
            ser.serHour
        ];
        tableRow.push(serviceData);
    });

    doc.text("All Services Details in Dulaj Motor System", 14, 15);
    doc.autoTable(tableColum, tableRow, {startY:20});
    doc.save('Services.pdf');
};

export default genetatePDFService;