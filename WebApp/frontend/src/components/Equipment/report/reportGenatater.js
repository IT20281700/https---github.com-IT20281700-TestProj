import jsPDF from "jspdf";
import "jspdf-autotable";

const genaratePDFEquipment = Equipments => {
    const doc = new jsPDF();

    const tabaleColum = ["Equipment Name","Equipment ID","Location"];
    const tableRous = [];

    Equipments.forEach(equ => {
        const EquipmentData = [
            equ.eqName,
            equ.eqId,
            equ.Location
        ];
        tableRous.push(EquipmentData);
        
    });

    doc.autoTable(tabaleColum,tableRous, {starY:30});
    doc.text("All Equipment in Dulaj Motor System",14, 10);
    doc.save('EquipmentReport.pdf');
};

export default genaratePDFEquipment;