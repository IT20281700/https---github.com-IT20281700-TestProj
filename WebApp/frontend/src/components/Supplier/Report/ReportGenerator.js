import jsPDF from "jspdf";
import "jspdf-autotable";

const generetePDFSupplier = Suppliers =>{
        const doc = new jsPDF();

        const tableColunm = ["Company Name","First Name","Last Name","Phone Number","Email"];
        const tableRows=[];

        Suppliers.forEach(sup =>{
            const supplierData = [
                sup.companyname,
                sup.firstname,
                sup.lastname,
                sup.pnum,
                sup.Email,
            ];
            tableRows.push(supplierData);
        });

        doc.autoTable(tableColunm,tableRows,{starty:20});
        doc.text("All Suppliers in Dulaj Motor System",14,10);
        doc.save("SupplierReport.pdf");

};

export default generetePDFSupplier;
