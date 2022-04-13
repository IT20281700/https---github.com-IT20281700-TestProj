import jsPDF from "jspdf";
import "jspdf-autotable";

const ExgeneratePDF= Expenditure => {
    const doc = new jsPDF();

    const tableColumn = ["Year","Month","Date", "Expenditure Amount"];
    const tableRows = [];

    Expenditure.forEach(ex => {
        const expenditureData = [
            ex.yDate,
            ex.mDate,
            ex.dDate,
            ex.amount
        ];
        tableRows.push(expenditureData);
    
});

doc.autoTable(tableColumn, tableRows, {startY:20});
doc.text("All Expenditure", 14, 15);
doc.save("ExpenditureReport.pdf");

};

export default ExgeneratePDF;








