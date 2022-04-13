import React from "react";
import { Button, Row, Tabs } from "react-bootstrap";
import { Tab } from "react-bootstrap";
import "./Tabs.css";
import ScheduleTable from "../ScheduleTable/ScheduledTable";
import { Link } from "react-router-dom";
import M_vehicle_type from "../selectVehicleType/maintenance_vehicle_type";
import axios from "axios";
import genPdfMaintenance from "../Report/reportGen";

export default function MainTabs() {
  function downloadReport() {
    axios
      .get("http://localhost:3001/api/maintenance/allscheduleservices")
      .then((res) => {
        genPdfMaintenance(res.data);
        alert("Report Download successful");
      })
      .catch((err) => {
        alert("Report Generator Error");
      });
  }

  return (
    <div style={{ marginLeft: "10px", marginRight: "10px", marginTop: "25px" }}>
      <Tabs
        defaultActiveKey="vehicletypes"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="vehicletypes" title="VEHICLE TYPES">
          <h2
            style={{
              display: "flex",
              flexDirection: "Row",
              justifyContent: "center",
            }}
          >
            Vehicle Type
          </h2>
          <hr />
          <M_vehicle_type />
        </Tab>
        <Tab eventKey="scheduled" title="SCHEDULED">
          <div>
            <h2
              style={{
                display: "flex",
                flexDirection: "Row",
                justifyContent: "center",
              }}
            >
              Arrived Schedules
            </h2>
            <Link to="/AllReqs">
              <Button>Vehicle Emergency Assistant</Button>
            </Link>
            <Button
              style={{ float: "right" }}
              onClick={(e) => {
                downloadReport();
              }}
            >
              Generate Report
            </Button>
          </div>
          <hr />
          <ScheduleTable />
        </Tab>
      </Tabs>
    </div>
  );
}
