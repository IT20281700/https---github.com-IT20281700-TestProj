const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

//middleware (cors mw and 2nd is to parse json)
app.use(cors());
app.use(express.json());

//stablish mongodb connection by this method
//as 1st parameter we have to pass our mongodb link
mongoose
  .connect(
    "mongodb+srv://sliit_itp:qwerty12345@cluster0.a61gp.mongodb.net/mydatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
  )
  .then(() => {
    console.log("Mongo DB Connected");
  }).catch(err=>[
    console.log(err)
  ]);

//http://localhost:3001/api/Customer
//if someone give above url it will point to the below 2nd parameter(routes file)
const routes = require("./routes/customer.routes");
app.use("/api/Customer", routes);

const routesFinance = require('./routes/finance.routes');
app.use("/Finance", routesFinance);
const routesService = require("./routes/service.routes");
app.use("/Services", routesService);

const regsroutes = require("./routes/supplier.routes");
app.use("/Regsupplier", regsroutes);

const acceptsroutes = require("./routes/supplier.routes");
app.use("/acceptsupplier", acceptsroutes);

const employeeRoutes = require("./routes/Employee/employee.routes");
app.use("/api/Employee", employeeRoutes);

//Mechanical maintenance roots
const mechanical_routes = require("./routes/Mechanical/mechanicalMaintenance.routes");
app.use("/api/maintenance", mechanical_routes);

const eqRoutes = require('./routes/equipment.routes');
app.use("/equipment", eqRoutes);


const routesSpareParts = require('./routes/SpareParts.routes');
app.use("/SpareParts", routesSpareParts);


//this is useful when hosting the app.
//this will assign given port number by server if not assigned 5000
const PORT = process.env.PORT || 3001;

//pass that as 1st param
//2nd para is a function, it displays msg in console if server goo
app.listen(PORT, () => {
  console.log("Server is Running");
});
