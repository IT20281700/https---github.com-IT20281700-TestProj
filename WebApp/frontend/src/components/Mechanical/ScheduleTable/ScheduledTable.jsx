import React from "react";
import "./Scheduled.css";
import { Table, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";

export default function ScheduledTable(props) {
  const [scheduledList, setscheduledList] = useState([]);
  const [scheduledTime, setScheduledTime] = useState(null);
  const [assignedEmployee, setWorker] = useState("EMP001");
  const [allEmployees, setAllEmployees] = useState([]);

  //get all scheduled list
  useEffect(() => {
    function getScheduledList() {
      axios
        .get("http://localhost:3001/api/maintenance/allscheduleservices")
        .then((res) => {
          setscheduledList(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getScheduledList();
  }, []);

  //get all employees
  useEffect(() => {
    function getAllEmployees() {
      axios
        .get("http://localhost:3001/api/Employee/all")
        .then((res) => {
          setAllEmployees(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getAllEmployees();
  }, []);

  // Schedule table update function
  const doSchedule = (_id, vehiNum) => {
    if (scheduledTime != null) {
      const dataSet = { scheduledTime, assignedEmployee };
      axios
        .put(
          "http://localhost:3001/api/maintenance/assignEmployee/" + _id,
          dataSet
        )
        .then(() => {
          alert(vehiNum + " Vehicle successfully scheduled.");
          window.location.reload();
        });
    } else {
      alert("Please allocate a time for schedule...!!!");
    }
  };

  return (
    <div style={{ marginBottom: "250px" }}>
      <Table className="scheduledTable" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Mobile Number</th>
            <th>Vehicle Number</th>
            <th>Scheduled Date</th>
            <th>Time Allocate</th>
            <th>Add Employee</th>
            <th className="btnTD">Action</th>
          </tr>
        </thead>
        <tbody>
          {scheduledList.map((data) => {
            let date = new Date(data.schDate).toLocaleDateString();
            return (
              <tr>
                <td>{data.schMobile}</td>
                <td>{data.schVehicle}</td>
                <td>{date}</td>
                <td className="ltd">
                  <input
                    className="timeallocate"
                    type="time"
                    required
                    defaultValue={data.scheduledTime}
                    onChange={(e) => {
                      setScheduledTime(e.target.value);
                    }}
                  />
                </td>
                <td className="sel-emp ltd">
                  <select
                    className="select-employee"
                    onChange={(e) => {
                      setWorker(e.target.value);
                    }}
                  >
                    {/* get selected employee name */}
                    {allEmployees.map((emps) => {
                      var d;
                      if (data.assignedEmployee == emps.eid) {
                        d = (
                          <option key={emps.eid} value={emps.eid} selected>
                            {emps.fName + " " + emps.lName}
                          </option>
                        );
                      } else {
                        d = (
                          <option key={emps.eid} value={emps.eid}>
                            {emps.fName + " " + emps.lName}
                          </option>
                        );
                      }

                      return d;
                    })}
                  </select>
                </td>
                <td className="btnTD ltd">
                  <Button
                    className="btnaddemptoschedule"
                    onClick={(e) => {
                      doSchedule(data._id, data.schVehicle);
                    }}
                  >
                    UPDATE
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
