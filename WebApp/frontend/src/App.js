import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/Customer/NavBar/NavBar";
import Header from "./components/Customer/Header/Header";
import Footer from "./components/Customer/Footer/Footer";
import Logins from "./components/Customer/Home/Logins";
import MenuComponent from "./components/Customer/MainMenu/MenuComponent";
import CogWheel from "./components/Customer/CogWheel/CogWheel";
import AboutUs from "./components/Customer/AboutUs/AboutUs";
import SignUp from "./components/Customer/SignUp/SignUp";
import ReqAssistForm from "./components/Customer/GMap/ReqAssistForm";
import AllRequests from "./components/Customer/AllReqs/AllRequests";
import ScheduleSM from "./components/Customer/Schedule/ScheduleSM";
import InvoiceCreate from "./components/Customer/InvoiceCreate/Invoice";
import VehicleHistory from "./components/Customer/VehicleHistory/VehicleHistory";

//Finance
import financeMainPage from './components/Finance/financeMainPage';
import financeAddIncome from './components/Finance/financeAddIncome';
import financeAddExpenditure from './components/Finance/financeAddExpenditure';
import dalyReport from './components/Finance/dalyReport';
import incomeReport from './components/Finance/incomeReport';
import expenditureReport from './components/Finance/expenditureReport';
import charts from './components/Finance/charts';

//Supplier
import Acceptsupplier from "./components/Supplier/AcceptNewSupplier/acceptsupplier";
import Registersupplier from "./components/Supplier/RegisterSupplier/registersupplier";
import Supplieditems from "./components/Supplier/SuppliedItems/supplieditems";
import Returneditems from "./components/Supplier/Returneditems/returneditems";
import Updatesupplier from "./components/Supplier/UpdateSupplier/updatesupplier";
import Supplierlist from "./components/Supplier/SuppliersList/supplierlist";
import Suppliedoils from "./components/Supplier/SuppliedOils/suppliedoils";

//Employee
import TabsView from "./components/Employee/Tabs/TabsView";
import EmpUpdate from "./components/Employee/EmployeeUpdate/employee_Update";
import empDelete from "./components/Employee/EmployeeDelete/employee_Delete";
import HRView from "./components/Employee/HRManagementView/HR_Management_View";
import AddEmployee from "./components/Employee/AddNewEmployee/add_new_employee";
import profile from "./components/Employee/EmployeeProfile/Employee_Profile";

import SparePartMainPage from './components/SparePart/SparePartMainPage';
import SparePartAllPage from './components/SparePart/SparePartAllPage';
import SparePartAdd from './components/SparePart/SparePartAdd';
import OilAllPage from './components/SparePart/OilAllPage';
import OilAdd from './components/SparePart/OilAdd';
import message from './components/SparePart/message';


//services
import SmainPage from "./components/Services/SmainPage";
import startPage from "./components/Services/startPage";

import insertService from "./components/Services/Service/insertService";
import viewService from "./components/Services/Service/viewService";

import fullService from "./components/Services/Packages/Small_Vehical/fullService";
import bodyService from "./components/Services/Packages/Small_Vehical/bodyService";

import acFullService from "./components/Services/Packages/AC_Vehical/acFullService";
import acHarfBodyWash from "./components/Services/Packages/AC_Vehical/acHarfBodyWash";
import acBodyService from "./components/Services/Packages/AC_Vehical/acBodyService";

import hFullService from "./components/Services/Packages/Heavy_Vehical/hFullService";
import hHarfBodyWash from "./components/Services/Packages/Heavy_Vehical/hHarfBodyWash";
import hBodyService from "./components/Services/Packages/Heavy_Vehical/hBodyService";
//Maintenance
import TabSelect from './components/Mechanical/TabSelector/tabs'
import EditPlan from './components/Mechanical/editCurrentPlans/editMaintenancePlans'
import MainTabs from './components/Mechanical/TabSelector/mainTabs'
//equipment
import mainPage from './components/Equipment/jsx/mainPage';
import ReturnEquipment from './components/Equipment/jsx/ReturnEquipment';
import ObtainEquipment from './components/Equipment/jsx/ObtainEquipment';
import AdminArea from './components/Equipment/jsx/AdminArea';
import AddEquipment from './components/Equipment/jsx/AddEquipment';
import upImage from './components/Equipment/jsx/upImage';

function App() {
  return (
    <Router>
      <switch>
        <Route path="/" exact component= {Header}/>
        <Route path="/" component={NavBar}/>

        <Route path="/finance" exact component={financeMainPage} />
        <Route path="/finance/Income" exact component={financeAddIncome} />
        <Route path="/finance/Expenditure" exact component={financeAddExpenditure} />
        <Route path="/finance/dalyReport" exact component={dalyReport} />
        <Route path="/finance/dalyReport/income" exact component={incomeReport} />
        <Route path="/finance/dalyReport/expenditure" exact component={expenditureReport} />
        <Route path="/finance/charts" exact component={charts} />
        <Route path="/Equipment" exact component={mainPage}/>
        <Route path="/Equipment/Ret_Equ" exact component={ReturnEquipment}/>
        <Route path="/Equipment/Obt_Equ" exact component={ObtainEquipment}/>
        <Route path="/Equipment/Admin" exact component={AdminArea}/>
        <Route path="/Equipment/Add" exact component={AddEquipment}/>
        <Route path="/Equipment/Add/image" component={upImage}/>

        <Route path="/Services" component={SmainPage} />
        <Route path="/Services" exact component={startPage} />

        <Route path="/Services/add" exact component={insertService} />
        <Route path="/Services/all" exact component={viewService} />

        <Route path="/Services/Small_pack_full" exact component={fullService} />
        <Route path="/Services/Small_pack_wash" exact component={bodyService} />

        <Route path="/Services/AC_pack_full" exact component={acFullService} />
        <Route path="/Services/AC_pack_harf" exact component={acHarfBodyWash} />
        <Route path="/Services/AC_pack_wash" exact component={acBodyService} />

        <Route path="/Services/Heavy_pack_full" exact component={hFullService}/>
        <Route path="/Services/Heavy_pack_harf" exact component={hHarfBodyWash}/>
        <Route path="/Services/Heavy_pack_wash" exact component={hBodyService}/>

        <Route path="/SpareParts" exact component={SparePartMainPage}/>
        <Route path="/SpareParts/all" exact component={SparePartAllPage}/>
        <Route path="/SpareParts/add" exact component={SparePartAdd}/>
        <Route path="/SpareParts/Oil/all" exact component={OilAllPage}/>
        <Route path="/SpareParts/Oil/add" exact component={OilAdd}/>
        <Route path="/SpareParts/message" exact component={message}/>

        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/" exact component={CogWheel} />
        <Route path="/" exact component={Logins} />
        <Route path="/CusMenu" component={MenuComponent} />
        <Route path="/Invoice" component={InvoiceCreate}/>
        <Route path="/accept" component={Acceptsupplier} />
        <Route path="/registersupplier" exact component={Registersupplier} />
        <Route path="/item" exact component={Supplieditems} />
        <Route path="/return" component={Returneditems} />
        <Route path="/update/:id" component={Updatesupplier} />
        <Route path="/allsup" exact component={Supplierlist} />
        <Route path="/oils" exact component={Suppliedoils}/>
        <Route path="/sign" component={SignUp} />
        <Route path="/GMap" component={ReqAssistForm} />
        <Route path="/ScheduleSM" component={ScheduleSM} />
        <Route path="/AllReqs" component={AllRequests} />
        <Route path="/VehicleHistory" component={VehicleHistory}/>

        {/* Employee */}
        <Route path="/tabView" component={TabsView} />
        <Route path="/empUpdate/:id" component={EmpUpdate} />
        <Route path="/empDelete/:id" component={empDelete} />
        <Route path="/hrView/:empID/:id" component={HRView} />
        <Route path="/addEmp" component={AddEmployee} />
        <Route path="/empProfile/:id" component={profile} />

        {/* Mechanical Maintenance */}
        <Route path="/MManagement" component={MainTabs} />
        <Route path="/type/:id" component={TabSelect} />
        <Route path="/editPlan/:id/:objID" component={EditPlan} />
        <Route path="/" component={Footer} />
      </switch>
    </Router>
  );
}

export default App;
