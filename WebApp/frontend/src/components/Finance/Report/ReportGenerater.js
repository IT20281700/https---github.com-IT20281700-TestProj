import jsPDF from "jspdf";
import "jspdf-autotable";

const generatePDFIncome = Incomes => {
    const doc = new jsPDF();

    const tableColumn = ["Year","Month","Date", "Income Amount"];
    const tableRows = [];

    Incomes.forEach(inc => {
        const incomeData = [
            inc.yDate,
            inc.mDate,
            inc.dDate,
            inc.amount
        ];
        tableRows.push(incomeData);
    
});

doc.autoTable(tableColumn, tableRows, {startY:20});
doc.text("All Incomes", 14, 15);
doc.save("IncomeReport.pdf");

};

export default generatePDFIncome;








