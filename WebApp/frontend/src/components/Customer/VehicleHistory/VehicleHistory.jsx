import axios from "axios";
import React, { Component } from "react";
import Pic1 from "./schedule.jpg";

class HistoryTableComponent extends React.Component {
  render() {
    return (
      <div class="card text-center">
        <div class="card-header">
          {this.props.historyData[0].serviceVehicle}
        </div>
        <div class="card-body">
          <table class="table table-hover table-dark table-bordered border-light">
            <thead>
              <tr>
                <td scope="col">Invoice No</td>
                <td scope="col">Service Date</td>
                <td scope="col">Task/Part Details</td>
                <td scope="col">Job Done By</td>
                <td scope="col">Total Amount</td>
              </tr>
            </thead>
            <tbody>
              {this.props.historyData.map((currentHistory) => {
                return (
                  <>
                    <tr>
                      <td>{currentHistory.invoiceNo}</td>
                      <td>
                        {currentHistory.serviceDate.toString().substring(0, 10)}
                      </td>
                      <td>
                        <table class="table table-dark">
                          <thead>
                            <tr>
                              <td>Item Name</td>
                              <td>Quantity</td>
                              <td>Unit Price</td>
                            </tr>
                          </thead>
                          <tbody>
                            {currentHistory.itemList.map((curItem) => {
                              return (
                                <>
                                  <tr>
                                    <td> {curItem.itemName} </td>
                                    <td> {curItem.qty} </td>
                                    <td> {curItem.unitPrice} </td>
                                  </tr>
                                </>
                              );
                            })}
                          </tbody>
                        </table>
                      </td>
                      <td>{currentHistory.jobDoneBy}</td>
                      <td>{currentHistory.totalAmount}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
        <div class="card-footer text-muted">Vehicle History</div>
      </div>
    );
  }
}

class VehicleHistory extends React.Component {
  constructor(props) {
    super(props);

    this.generateHistory = this.generateHistory.bind(this);

    this.state = {
      vehicleList: [],
      scheduleDate: "",
      scheduleTime: "",
      scheduledVehicle: "",
      historyVehi: "",
    };
  }

  componentDidMount() {
    if (localStorage.getItem("customer") != "") {
      axios
        .get(
          "http://localhost:3001/api/Customer/getCustomerVehicle/" +
            localStorage.getItem("customer")
        )
        .then((res) => {
          this.setState({ vehicleList: res.data });
        })
        .catch((err) => {
          console.log(err);
        });

      axios
        .get(
          "http://localhost:3001/api/Customer/getCustomerSchedules/" +
            localStorage.getItem("customer")
        )
        .then((res) => {
          this.setState({ scheduleDate: res.data.schDate });
          this.setState({ scheduleTime: res.data.schTime });
          this.setState({ scheduledVehicle: res.data.schVehicle });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  generateHistory(curVehicle) {
    this.setState({ historyVehi: "" });
    axios
      .get(
        "http://localhost:3001/api/Customer/getInvoiceForVehicle/" + curVehicle
      )
      .then((res) => {
        if (res.data[0] != null) {
          this.setState({
            historyVehi: <HistoryTableComponent historyData={res.data} />,
          });
        } else {
          alert("We Don't have Any Service History Under " + curVehicle);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    if (localStorage.getItem("customer") == "") {
      return (
        <div className="container">
          <br />
          <br />
          <br />
          <h2 class="p-3 mb-2 bg-light text-dark">
            Vehicle Service History and Schedules
          </h2>
          <br />
          <br />
          <p
            className="text-center"
            style={{ marginBottom: "50px", color: "red" }}
          >
            <b>
              You are Not Logged In. Please Login to See Your Vehicle History.
            </b>
          </p>
        </div>
      );
    } else {
      return (
        <div className="container">
          <br />
          <br />
          <br />
          <h2 class="p-3 mb-2 bg-light text-dark">
            Vehicle Service History and Schedules
          </h2>
          <br />
          <br />
          <div class="card float-end" style={{ width: "18rem" }}>
            <img src={Pic1} class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title text-center">Scheduled Services</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                Scheduled Vehicle : <b> {this.state.scheduledVehicle} </b>
              </li>
              <li class="list-group-item">
                Scheduled Date :{" "}
                <b>{this.state.scheduleDate?.toString().substring(0, 10)} </b>
              </li>
              <li class="list-group-item">
                Scheduled Time :{" "}
                <b style={{ color: "red" }}>{this.state.scheduleTime} </b>
              </li>
            </ul>
          </div>
          <br />

          <div class="dropdown" style={{ marginBottom: "300px" }}>
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Select Your Vehicle
            </button>
            <ul
              class="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuButton2"
            >
              {this.state.vehicleList.map((curVehicle, idx) => {
                return (
                  <div key={idx}>
                    <li>
                      <a
                        class="dropdown-item"
                        onClick={() => {
                          this.generateHistory(curVehicle);
                        }}
                      >
                        {curVehicle}
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
          <br />
          <br />
          <div>{this.state.historyVehi}</div>
          <br />
          <br />
        </div>
      );
    }
  }
}

export default VehicleHistory;
