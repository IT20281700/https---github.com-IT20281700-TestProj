import jsPDF from "jspdf";
import "jspdf-autotable";

const generatePDF = Customers => {
    const doc = new jsPDF();

    const tableColumn = ["User Name", "User Mobile", "User NIC", "User Address", "User Vehicles"];
    const tableRows = [];

    Customers.forEach(cust => {
        const customerData = [
            cust.cusName,
            cust.cusMobile,
            cust.cusNic,
            cust.cusAddress,
            cust.vehicle
        ];
        tableRows.push(customerData);
    });

    doc.autoTable(tableColumn, tableRows, {startY:20});
    doc.text("All Customers in Dulaj Motor System", 14, 15);
    doc.save('CustomerReport.pdf');
};

export default generatePDF;