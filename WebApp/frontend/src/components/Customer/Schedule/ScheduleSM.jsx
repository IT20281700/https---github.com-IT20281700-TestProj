import axios from "axios";
import React, { Component, useState } from "react";
import "./Schedule.css";

class SmallFulls extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      schDate: new Date(),
      schName: "",
      schVehicle: "",
      schMobile: "",
      schType: [],
    };

    this.setSchDate = this.setSchDate.bind(this);
    this.setSchName = this.setSchName.bind(this);
    this.setSchMobile = this.setSchMobile.bind(this);
    this.setSchVehicle = this.setSchVehicle.bind(this);

    this.submitSchedule = this.submitSchedule.bind(this);
  }

  setSchDate(e) {
    this.setState({ schDate: e.target.value });
  }

  setSchMobile(e) {
    this.setState({ schMobile: e.target.value });
  }

  setSchName(e) {
    this.setState({ schName: e.target.value });
  }

  setSchVehicle(e) {
    this.setState({ schVehicle: e.target.value.toUpperCase() });
  }

  submitSchedule(e) {
    this.state.schType[0] = "Full Service";

    const data = {
      schName: this.state.schName,
      schMobile: this.state.schMobile,
      schVehicle: this.state.schVehicle,
      schDate: this.state.schDate,
      schType: this.state.schType,
      taskType: "Service",
    };

    axios
      .post("http://localhost:3001/api/Customer/schedule", data)
      .then(() => {
        alert("Scheduled Successfully");
        window.location = "/CusMenu";
      })
      .catch((err) => {
        alert(err);
      });
  }

  render() {
    return (
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Full Service Package</h5>
          <br />
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Full Body Wash
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Engine Oil Change
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Tires Grooming
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              External Waxing
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Brake Cable Change
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Clutch Cable Change
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Brake Liner Change
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Greasing
            </label>
          </div>
          <br />
          <div class="card-header">
            Total Value : {this.props.smFull[0].price} /=
          </div>
          <div class="card-header">Time Taken : 1.5 Hours</div>
          <br />

          <form onSubmit={this.submitSchedule}>
            <div class="input-group form-group">
              <span class="input-group-text" id="basic-addon1">
                +94
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="712345678 *"
                value={this.state.schMobile}
                pattern="[0-9]{9}"
                onChange={this.setSchMobile}
                aria-label="712345678 *"
                aria-describedby="basic-addon1"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Your Name *"
                value={this.state.schName}
                pattern="[A-Za-z]{5,}"
                onChange={this.setSchName}
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="BFR-3333 *"
                pattern="[A-Z0-9]{2,3}-[0-9]{4}"
                value={this.state.schVehicle}
                onChange={this.setSchVehicle}
                required
              />
            </div>
            <input
              class="form-control"
              type="date"
              placeholder="Default input"
              value={this.state.schDate}
              onChange={this.setSchDate}
              aria-label="default input example"
              required
            />
            <br />
            <button class="btn btn-primary btn-sm">Schedule Service</button>
          </form>
        </div>
      </div>
    );
  }
}

class SmallBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      schDate: new Date(),
      schName: "",
      schVehicle: "",
      schMobile: "",
      schType: [],
    };

    this.setSchDate = this.setSchDate.bind(this);
    this.setSchName = this.setSchName.bind(this);
    this.setSchMobile = this.setSchMobile.bind(this);
    this.setSchVehicle = this.setSchVehicle.bind(this);

    this.submitSchedule = this.submitSchedule.bind(this);
  }

  setSchDate(e) {
    this.setState({ schDate: e.target.value });
  }

  setSchMobile(e) {
    this.setState({ schMobile: e.target.value });
  }

  setSchName(e) {
    this.setState({ schName: e.target.value });
  }

  setSchVehicle(e) {
    this.setState({ schVehicle: e.target.value.toUpperCase() });
  }

  submitSchedule(e) {
    this.state.schType[0] = "Body Service";

    const data = {
      schName: this.state.schName,
      schMobile: this.state.schMobile,
      schVehicle: this.state.schVehicle,
      schDate: this.state.schDate,
      schType: this.state.schType,
      taskType: "Service",
    };

    axios
      .post("http://localhost:3001/api/Customer/schedule", data)
      .then(() => {
        alert("Scheduled Successfully");
        window.location = "/CusMenu";
      })
      .catch((err) => {
        alert(err);
      });
  }

  render() {
    return (
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Body Service Package</h5>
          <br />
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Full Body Wash
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Tires Grooming
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              External Waxing
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Greasing
            </label>
          </div>
          <br />
          <div class="card-header">
            Total Value : {this.props.smBody[1].price} /=
          </div>
          <div class="card-header">Time Taken : 0.5 Hours</div>
          <br />

          <form onSubmit={this.submitSchedule}>
            <div class="input-group form-group">
              <span class="input-group-text" id="basic-addon1">
                +94
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="712345678 *"
                value={this.state.schMobile}
                pattern="[0-9]{9}"
                onChange={this.setSchMobile}
                aria-label="712345678 *"
                aria-describedby="basic-addon1"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Your Name *"
                value={this.state.schName}
                pattern="[A-Za-z]{5,}"
                onChange={this.setSchName}
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="BFR-3333 *"
                pattern="[A-Z0-9]{2,3}-[0-9]{4}"
                value={this.state.schVehicle}
                onChange={this.setSchVehicle}
                required
              />
            </div>
            <input
              class="form-control"
              type="date"
              placeholder="Default input"
              value={this.state.schDate}
              onChange={this.setSchDate}
              aria-label="default input example"
              required
            />
            <br />
            <button class="btn btn-primary btn-sm">Schedule Service</button>
          </form>
        </div>
      </div>
    );
  }
}

class SmallCustoms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      customServices: [],
      schDate: new Date(),
      schName: "",
      schVehicle: "",
      schMobile: "",

      totalPrice: 0,
      totalTime: 0.0,
    };

    this.setCustomList = this.setCustomList.bind(this);
    this.setSchDate = this.setSchDate.bind(this);
    this.setSchName = this.setSchName.bind(this);
    this.setSchMobile = this.setSchMobile.bind(this);
    this.setSchVehicle = this.setSchVehicle.bind(this);
    this.submitSchedule = this.submitSchedule.bind(this);
  }

  setSchDate(e) {
    this.setState({ schDate: e.target.value });
  }

  setSchMobile(e) {
    this.setState({ schMobile: e.target.value });
  }

  setSchName(e) {
    this.setState({ schName: e.target.value });
  }

  setSchVehicle(e) {
    this.setState({ schVehicle: e.target.value.toUpperCase() });
  }

  setCustomList(e, id, price, time) {
    if (document.getElementById(id).checked == true) {
      const newVal = e.target.value;
      const list = [...this.state.customServices];

      list[list.length] = newVal;
      this.setState({ customServices: list });

      this.setState({ totalPrice: this.state.totalPrice + parseInt(price) });
      this.setState({ totalTime: this.state.totalTime + parseFloat(time) });
    } else if (document.getElementById(id).checked == false) {
      const newVal = e.target.value;
      const list = [...this.state.customServices];

      list.map((currentItem, i) => {
        if (currentItem == newVal) {
          list.splice(i, 1);
        }
      });
      this.setState({ customServices: list });
      this.setState({ totalPrice: this.state.totalPrice - parseInt(price) });
      this.setState({ totalTime: this.state.totalTime - time });
    }
  }

  submitSchedule(e) {
    const data = {
      schName: this.state.schName,
      schMobile: this.state.schMobile,
      schVehicle: this.state.schVehicle,
      schDate: this.state.schDate,
      schType: this.state.customServices,
      taskType: "Service",
    };

    axios
      .post("http://localhost:3001/api/Customer/schedule", data)
      .then(() => {
        alert("Scheduled Successfully");
        window.location = "/CusMenu";
      })
      .catch((err) => {
        alert(err);
      });
  }

  render() {
    return (
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Customized Service Package</h5>
          <br />
          {this.props.cuzServices.map((currentCuz, idx) => {
            if (currentCuz.serCategory == "Small Vehicals") {
              return (
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id={`flexCheckDefault${idx + 20}`}
                    value={currentCuz.serName}
                    onChange={(e) => {
                      this.setCustomList(
                        e,
                        `flexCheckDefault${idx + 20}`,
                        `${currentCuz.serPrice}`,
                        `${currentCuz.serHour}`
                      );
                    }}
                  />
                  <label
                    class="form-check-label"
                    for={`flexCheckDefault${idx + 20}`}
                  >
                    {currentCuz.serName}
                  </label>
                </div>
              );
            }
          })}
          <br />
          <div class="card-header">
            Total Value : {this.state.totalPrice} /=
          </div>
          <div class="card-header">
            Time Taken : {this.state.totalTime} Hours
          </div>
          <br />

          <form onSubmit={this.submitSchedule}>
            <div class="input-group form-group">
              <span class="input-group-text" id="basic-addon1">
                +94
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="712345678 *"
                value={this.state.schMobile}
                pattern="[0-9]{9}"
                onChange={this.setSchMobile}
                aria-label="712345678 *"
                aria-describedby="basic-addon1"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Your Name *"
                value={this.state.schName}
                pattern="[A-Za-z]{5,}"
                onChange={this.setSchName}
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="BFR-3333 *"
                pattern="[A-Z0-9]{2,3}-[0-9]{4}"
                value={this.state.schVehicle}
                onChange={this.setSchVehicle}
                required
              />
            </div>
            <input
              class="form-control"
              type="date"
              placeholder="Default input"
              value={this.state.schDate}
              onChange={this.setSchDate}
              aria-label="default input example"
              required
            />
            <br />
            <button class="btn btn-primary btn-sm">Schedule Service</button>
          </form>
        </div>
      </div>
    );
  }
}

class SmallServicesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.displaySmallFull = this.displaySmallFull.bind(this);
    this.displaySmallBody = this.displaySmallBody.bind(this);
    this.displaySmallCustom = this.displaySmallCustom.bind(this);

    this.fullDisable = this.fullDisable.bind(this);
    this.bodyDisable = this.bodyDisable.bind(this);

    this.state = {
      smallfull: "",
      smallbody: "",
      smallcustom: "",
    };
  }

  displaySmallFull() {
    this.setState({ smallbody: "" });
    this.setState({ smallcustom: "" });
    this.setState({ smallfull: <SmallFulls smFull={this.props.smallData} /> });
  }

  displaySmallBody() {
    this.setState({ smallfull: "" });
    this.setState({ smallcustom: "" });
    this.setState({ smallbody: <SmallBody smBody={this.props.smallData} /> });
  }

  displaySmallCustom() {
    this.setState({ smallbody: "" });
    this.setState({ smallfull: "" });
    this.setState({
      smallcustom: <SmallCustoms cuzServices={this.props.allServiceData} />,
    });
  }

  fullDisable() {
    if (this.props.smallData[0].status == "Enable") {
      return false;
    } else {
      return true;
    }
  }

  bodyDisable() {
    if (this.props.smallData[1].status == "Enable") {
      return false;
    } else {
      return true;
    }
  }

  render() {
    return (
      <div>
        <div className="taskSelect">
          <h6>Available Services</h6>
          <br />
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              onChange={this.displaySmallFull}
              disabled={this.fullDisable()}
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Full Service Package
            </label>
          </div>
          <br />

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              onChange={this.displaySmallBody}
              disabled={this.bodyDisable()}
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Body Service Package
            </label>
          </div>
          <br />

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault3"
              onChange={this.displaySmallCustom}
            />
            <label class="form-check-label" for="flexRadioDefault3">
              Customize Package
            </label>
          </div>
          <br />
        </div>
        <br />
        <br />
        <div>{this.state.smallfull}</div>
        <div>{this.state.smallbody}</div>
        <div>{this.state.smallcustom}</div>
      </div>
    );
  }
}

class ACFulls extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      schDate: new Date(),
      schName: "",
      schVehicle: "",
      schMobile: "",
      schType: [],
    };

    this.setSchDate = this.setSchDate.bind(this);
    this.setSchName = this.setSchName.bind(this);
    this.setSchMobile = this.setSchMobile.bind(this);
    this.setSchVehicle = this.setSchVehicle.bind(this);

    this.submitSchedule = this.submitSchedule.bind(this);
  }

  setSchDate(e) {
    this.setState({ schDate: e.target.value });
  }

  setSchMobile(e) {
    this.setState({ schMobile: e.target.value });
  }

  setSchName(e) {
    this.setState({ schName: e.target.value });
  }

  setSchVehicle(e) {
    this.setState({ schVehicle: e.target.value.toUpperCase() });
  }

  submitSchedule(e) {
    this.state.schType[0] = "Full Service";

    const data = {
      schName: this.state.schName,
      schMobile: this.state.schMobile,
      schVehicle: this.state.schVehicle,
      schDate: this.state.schDate,
      schType: this.state.schType,
      taskType: "Service",
    };

    axios
      .post("http://localhost:3001/api/Customer/schedule", data)
      .then(() => {
        alert("Scheduled Successfully");
        window.location = "/CusMenu";
      })
      .catch((err) => {
        alert(err);
      });
  }

  render() {
    return (
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Full Service Package</h5>
          <br />
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Full Body Wash
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Interiour Full Wash
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Under Chassis Wash
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Vaccuming
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Engine Oil Change
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Petral/Diesal Filter Change
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Oil Filter Change
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Air Filter Change
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Filling A/C Gas
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Tires and Wheels Grooming
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Exterior Waxing
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Engine Wash
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Windscreen Treatment
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Interior Waxing
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Engine Tune-Up
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Back Liner Change
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Allignment Repearing
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Greasing
            </label>
          </div>
          <br />
          <div class="card-header">
            Total Value : {this.props.acFull[0].price} /=
          </div>
          <div class="card-header">Time Taken : 1.5 Hours</div>
          <br />

          <form onSubmit={this.submitSchedule}>
            <div class="input-group form-group">
              <span class="input-group-text" id="basic-addon1">
                +94
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="712345678 *"
                value={this.state.schMobile}
                pattern="[0-9]{9}"
                onChange={this.setSchMobile}
                aria-label="712345678 *"
                aria-describedby="basic-addon1"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Your Name *"
                value={this.state.schName}
                pattern="[A-Za-z]{5,}"
                onChange={this.setSchName}
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="BFR-3333 *"
                pattern="[A-Z0-9]{2,3}-[0-9]{4}"
                value={this.state.schVehicle}
                onChange={this.setSchVehicle}
                required
              />
            </div>
            <input
              class="form-control"
              type="date"
              placeholder="Default input"
              value={this.state.schDate}
              onChange={this.setSchDate}
              aria-label="default input example"
              required
            />
            <br />
            <button class="btn btn-primary btn-sm">Schedule Service</button>
          </form>
        </div>
      </div>
    );
  }
}

class ACHalf extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      schDate: new Date(),
      schName: "",
      schVehicle: "",
      schMobile: "",
      schType: [],
    };

    this.setSchDate = this.setSchDate.bind(this);
    this.setSchName = this.setSchName.bind(this);
    this.setSchMobile = this.setSchMobile.bind(this);
    this.setSchVehicle = this.setSchVehicle.bind(this);

    this.submitSchedule = this.submitSchedule.bind(this);
  }

  setSchDate(e) {
    this.setState({ schDate: e.target.value });
  }

  setSchMobile(e) {
    this.setState({ schMobile: e.target.value });
  }

  setSchName(e) {
    this.setState({ schName: e.target.value });
  }

  setSchVehicle(e) {
    this.setState({ schVehicle: e.target.value.toUpperCase() });
  }

  submitSchedule(e) {
    this.state.schType[0] = "Half Service";

    const data = {
      schName: this.state.schName,
      schMobile: this.state.schMobile,
      schVehicle: this.state.schVehicle,
      schDate: this.state.schDate,
      schType: this.state.schType,
      taskType: "Service",
    };

    axios
      .post("http://localhost:3001/api/Customer/schedule", data)
      .then(() => {
        alert("Scheduled Successfully");
        window.location = "/CusMenu";
      })
      .catch((err) => {
        alert(err);
      });
  }

  render() {
    return (
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Half Service Package</h5>
          <br />
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Full Body Wash
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Interior Full Wash
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Under Chassis Wash
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Vaccuming
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Engine Oil Change
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Tires and Wheels Grooming
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Exterior Waxing
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Windscreen Treatment
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Engine Wash
            </label>
          </div>
          <br />
          <div class="card-header">
            Total Value : {this.props.acHalf[1].price} /=
          </div>
          <div class="card-header">Time Taken : 1 Hour</div>
          <br />

          <form onSubmit={this.submitSchedule}>
            <div class="input-group form-group">
              <span class="input-group-text" id="basic-addon1">
                +94
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="712345678 *"
                value={this.state.schMobile}
                pattern="[0-9]{9}"
                onChange={this.setSchMobile}
                aria-label="712345678 *"
                aria-describedby="basic-addon1"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Your Name *"
                value={this.state.schName}
                pattern="[A-Za-z]{5,}"
                onChange={this.setSchName}
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="BFR-3333 *"
                pattern="[A-Z0-9]{2,3}-[0-9]{4}"
                value={this.state.schVehicle}
                onChange={this.setSchVehicle}
                required
              />
            </div>
            <input
              class="form-control"
              type="date"
              placeholder="Default input"
              value={this.state.schDate}
              onChange={this.setSchDate}
              aria-label="default input example"
              required
            />
            <br />
            <button class="btn btn-primary btn-sm">Schedule Service</button>
          </form>
        </div>
      </div>
    );
  }
}

class ACBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      schDate: new Date(),
      schName: "",
      schVehicle: "",
      schMobile: "",
      schType: [],
    };

    this.setSchDate = this.setSchDate.bind(this);
    this.setSchName = this.setSchName.bind(this);
    this.setSchMobile = this.setSchMobile.bind(this);
    this.setSchVehicle = this.setSchVehicle.bind(this);

    this.submitSchedule = this.submitSchedule.bind(this);
  }

  setSchDate(e) {
    this.setState({ schDate: e.target.value });
  }

  setSchMobile(e) {
    this.setState({ schMobile: e.target.value });
  }

  setSchName(e) {
    this.setState({ schName: e.target.value });
  }

  setSchVehicle(e) {
    this.setState({ schVehicle: e.target.value.toUpperCase() });
  }

  submitSchedule(e) {
    this.state.schType[0] = "Body Service";

    const data = {
      schName: this.state.schName,
      schMobile: this.state.schMobile,
      schVehicle: this.state.schVehicle,
      schDate: this.state.schDate,
      schType: this.state.schType,
      taskType: "Service",
    };

    axios
      .post("http://localhost:3001/api/Customer/schedule", data)
      .then(() => {
        alert("Scheduled Successfully");
        window.location = "/CusMenu";
      })
      .catch((err) => {
        alert(err);
      });
  }

  render() {
    return (
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Body Wash Package</h5>
          <br />
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Full Body Wash
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Under Chassis Wash
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Vaccuming
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Greasing
            </label>
          </div>
          <br />
          <div class="card-header">
            Total Value : {this.props.acBody[2].price} /=
          </div>
          <div class="card-header">Time Taken : 0.5 Hour</div>
          <br />

          <form onSubmit={this.submitSchedule}>
            <div class="input-group form-group">
              <span class="input-group-text" id="basic-addon1">
                +94
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="712345678 *"
                value={this.state.schMobile}
                pattern="[0-9]{9}"
                onChange={this.setSchMobile}
                aria-label="712345678 *"
                aria-describedby="basic-addon1"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Your Name *"
                value={this.state.schName}
                pattern="[A-Za-z]{5,}"
                onChange={this.setSchName}
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="BFR-3333 *"
                pattern="[A-Z0-9]{2,3}-[0-9]{4}"
                value={this.state.schVehicle}
                onChange={this.setSchVehicle}
                required
              />
            </div>
            <input
              class="form-control"
              type="date"
              placeholder="Default input"
              value={this.state.schDate}
              onChange={this.setSchDate}
              aria-label="default input example"
              required
            />
            <br />
            <button class="btn btn-primary btn-sm">Schedule Service</button>
          </form>
        </div>
      </div>
    );
  }
}

class ACCustoms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      customServices: [],
      schDate: new Date(),
      schName: "",
      schVehicle: "",
      schMobile: "",

      totalPrice: 0,
      totalTime: 0.0,
    };

    this.setCustomList = this.setCustomList.bind(this);
    this.setSchDate = this.setSchDate.bind(this);
    this.setSchName = this.setSchName.bind(this);
    this.setSchMobile = this.setSchMobile.bind(this);
    this.setSchVehicle = this.setSchVehicle.bind(this);
    this.submitSchedule = this.submitSchedule.bind(this);
  }

  setSchDate(e) {
    this.setState({ schDate: e.target.value });
  }

  setSchMobile(e) {
    this.setState({ schMobile: e.target.value });
  }

  setSchName(e) {
    this.setState({ schName: e.target.value });
  }

  setSchVehicle(e) {
    this.setState({ schVehicle: e.target.value.toUpperCase() });
  }

  setCustomList(e, id, price, time) {
    if (document.getElementById(id).checked == true) {
      const newVal = e.target.value;
      const list = [...this.state.customServices];

      list[list.length] = newVal;
      this.setState({ customServices: list });

      this.setState({ totalPrice: this.state.totalPrice + parseInt(price) });
      this.setState({ totalTime: this.state.totalTime + parseFloat(time) });
    } else if (document.getElementById(id).checked == false) {
      const newVal = e.target.value;
      const list = [...this.state.customServices];

      list.map((currentItem, i) => {
        if (currentItem == newVal) {
          list.splice(i, 1);
        }
      });
      this.setState({ customServices: list });
      this.setState({ totalPrice: this.state.totalPrice - parseInt(price) });
      this.setState({ totalTime: this.state.totalTime - time });
    }
  }

  submitSchedule(e) {
    const data = {
      schName: this.state.schName,
      schMobile: this.state.schMobile,
      schVehicle: this.state.schVehicle,
      schDate: this.state.schDate,
      schType: this.state.customServices,
      taskType: "Service",
    };

    axios
      .post("http://localhost:3001/api/Customer/schedule", data)
      .then(() => {
        alert("Scheduled Successfully");
        window.location = "/CusMenu";
      })
      .catch((err) => {
        alert(err);
      });
  }

  render() {
    return (
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Customized Service Package</h5>
          <br />
          {this.props.cuzServices.map((currentCuz, idx) => {
            if (currentCuz.serCategory == "A/C Vehicals") {
              return (
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id={`flexCheckDefault${idx + 20}`}
                    value={currentCuz.serName}
                    onChange={(e) => {
                      this.setCustomList(
                        e,
                        `flexCheckDefault${idx + 20}`,
                        `${currentCuz.serPrice}`,
                        `${currentCuz.serHour}`
                      );
                    }}
                  />
                  <label
                    class="form-check-label"
                    for={`flexCheckDefault${idx + 20}`}
                  >
                    {currentCuz.serName}
                  </label>
                </div>
              );
            }
          })}
          <br />
          <div class="card-header">
            Total Value : {this.state.totalPrice} /=
          </div>
          <div class="card-header">
            Time Taken : {this.state.totalTime} Hours
          </div>
          <br />

          <form onSubmit={this.submitSchedule}>
            <div class="input-group form-group">
              <span class="input-group-text" id="basic-addon1">
                +94
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="712345678 *"
                value={this.state.schMobile}
                pattern="[0-9]{9}"
                onChange={this.setSchMobile}
                aria-label="712345678 *"
                aria-describedby="basic-addon1"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Your Name *"
                value={this.state.schName}
                pattern="[A-Za-z]{5,}"
                onChange={this.setSchName}
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="BFR-3333 *"
                pattern="[A-Z0-9]{2,3}-[0-9]{4}"
                value={this.state.schVehicle}
                onChange={this.setSchVehicle}
                required
              />
            </div>
            <input
              class="form-control"
              type="date"
              placeholder="Default input"
              value={this.state.schDate}
              onChange={this.setSchDate}
              aria-label="default input example"
              required
            />
            <br />
            <button class="btn btn-primary btn-sm">Schedule Service</button>
          </form>
        </div>
      </div>
    );
  }
}

class ACServicesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.displayACFull = this.displayACFull.bind(this);
    this.displayACHalf = this.displayACHalf.bind(this);
    this.displayACBody = this.displayACBody.bind(this);
    this.displayACCustom = this.displayACCustom.bind(this);

    this.fullDisable = this.fullDisable.bind(this);
    this.halfDisable = this.halfDisable.bind(this);
    this.bodyDisable = this.bodyDisable.bind(this);

    this.state = {
      acfull: "",
      achalf: "",
      acbody: "",
      accustom: "",
    };
  }

  displayACFull() {
    this.setState({ achalf: "" });
    this.setState({ acbody: "" });
    this.setState({ accustom: "" });
    this.setState({ acfull: <ACFulls acFull={this.props.acData} /> });
  }

  displayACHalf() {
    this.setState({ acfull: "" });
    this.setState({ acbody: "" });
    this.setState({ accustom: "" });
    this.setState({ achalf: <ACHalf acHalf={this.props.acData} /> });
  }

  displayACBody() {
    this.setState({ achalf: "" });
    this.setState({ acfull: "" });
    this.setState({ accustom: "" });
    this.setState({ acbody: <ACBody acBody={this.props.acData} /> });
  }

  displayACCustom() {
    this.setState({ achalf: "" });
    this.setState({ acbody: "" });
    this.setState({ acfull: "" });
    this.setState({
      accustom: <ACCustoms cuzServices={this.props.allServiceData} />,
    });
  }

  fullDisable() {
    if (this.props.acData[0].status == "Enable") {
      return false;
    } else {
      return true;
    }
  }

  halfDisable() {
    if (this.props.acData[1].status == "Enable") {
      return false;
    } else {
      return true;
    }
  }

  bodyDisable() {
    if (this.props.acData[2].status == "Enable") {
      return false;
    } else {
      return true;
    }
  }

  render() {
    return (
      <div>
        <div className="taskSelect">
          <h6>Available Services</h6>
          <br />
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault4"
              onChange={this.displayACFull}
              disabled={this.fullDisable()}
            />
            <label class="form-check-label" for="flexRadioDefault4">
              Full Service Package
            </label>
          </div>
          <br />

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault5"
              onChange={this.displayACHalf}
              disabled={this.halfDisable()}
            />
            <label class="form-check-label" for="flexRadioDefault5">
              Half Body Service Package
            </label>
          </div>
          <br />

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault6"
              onChange={this.displayACBody}
              disabled={this.bodyDisable()}
            />
            <label class="form-check-label" for="flexRadioDefault6">
              Body Service Package
            </label>
          </div>
          <br />

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault7"
              onChange={this.displayACCustom}
            />
            <label class="form-check-label" for="flexRadioDefault7">
              Customize Package
            </label>
          </div>
          <br />
        </div>
        <br />
        <br />
        <div>{this.state.acfull}</div>
        <div>{this.state.achalf}</div>
        <div>{this.state.acbody}</div>
        <div>{this.state.accustom}</div>
      </div>
    );
  }
}

class HeavyFulls extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      schDate: new Date(),
      schName: "",
      schVehicle: "",
      schMobile: "",
      schType: [],
    };

    this.setSchDate = this.setSchDate.bind(this);
    this.setSchName = this.setSchName.bind(this);
    this.setSchMobile = this.setSchMobile.bind(this);
    this.setSchVehicle = this.setSchVehicle.bind(this);

    this.submitSchedule = this.submitSchedule.bind(this);
  }

  setSchDate(e) {
    this.setState({ schDate: e.target.value });
  }

  setSchMobile(e) {
    this.setState({ schMobile: e.target.value });
  }

  setSchName(e) {
    this.setState({ schName: e.target.value });
  }

  setSchVehicle(e) {
    this.setState({ schVehicle: e.target.value.toUpperCase() });
  }

  submitSchedule(e) {
    this.state.schType[0] = "Full Service";

    const data = {
      schName: this.state.schName,
      schMobile: this.state.schMobile,
      schVehicle: this.state.schVehicle,
      schDate: this.state.schDate,
      schType: this.state.schType,
      taskType: "Service",
    };

    axios
      .post("http://localhost:3001/api/Customer/schedule", data)
      .then(() => {
        alert("Scheduled Successfully");
        window.location = "/CusMenu";
      })
      .catch((err) => {
        alert(err);
      });
  }

  render() {
    return (
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Full Service Package</h5>
          <br />
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Full Body Wash
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Interiour Full Wash
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Under Chassis Wash
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Vaccuming
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Engine Oil Change
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Petral/Diesal Filter Change
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Oil Filter Change
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Air Filter Change
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Tires and Wheels Grooming
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Exterior Waxing
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Engine Wash
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Windscreen Treatment
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Interior Waxing
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Engine Tune-Up
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Back Liner Change
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Allignment Repearing
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Greasing
            </label>
          </div>
          <br />
          <div class="card-header">
            Total Value : {this.props.heavyFull[0].price} /=
          </div>
          <div class="card-header">Time Taken : 1.5 Hours</div>
          <br />

          <form onSubmit={this.submitSchedule}>
            <div class="input-group form-group">
              <span class="input-group-text" id="basic-addon1">
                +94
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="712345678 *"
                value={this.state.schMobile}
                pattern="[0-9]{9}"
                onChange={this.setSchMobile}
                aria-label="712345678 *"
                aria-describedby="basic-addon1"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Your Name *"
                value={this.state.schName}
                pattern="[A-Za-z]{5,}"
                onChange={this.setSchName}
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="BFR-3333 *"
                pattern="[A-Z0-9]{2,3}-[0-9]{4}"
                value={this.state.schVehicle}
                onChange={this.setSchVehicle}
                required
              />
            </div>
            <input
              class="form-control"
              type="date"
              placeholder="Default input"
              value={this.state.schDate}
              onChange={this.setSchDate}
              aria-label="default input example"
              required
            />
            <br />
            <button class="btn btn-primary btn-sm">Schedule Service</button>
          </form>
        </div>
      </div>
    );
  }
}

class HeavyHalf extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      schDate: new Date(),
      schName: "",
      schVehicle: "",
      schMobile: "",
      schType: [],
    };

    this.setSchDate = this.setSchDate.bind(this);
    this.setSchName = this.setSchName.bind(this);
    this.setSchMobile = this.setSchMobile.bind(this);
    this.setSchVehicle = this.setSchVehicle.bind(this);

    this.submitSchedule = this.submitSchedule.bind(this);
  }

  setSchDate(e) {
    this.setState({ schDate: e.target.value });
  }

  setSchMobile(e) {
    this.setState({ schMobile: e.target.value });
  }

  setSchName(e) {
    this.setState({ schName: e.target.value });
  }

  setSchVehicle(e) {
    this.setState({ schVehicle: e.target.value.toUpperCase() });
  }

  submitSchedule(e) {
    this.state.schType[0] = "Half Service";

    const data = {
      schName: this.state.schName,
      schMobile: this.state.schMobile,
      schVehicle: this.state.schVehicle,
      schDate: this.state.schDate,
      schType: this.state.schType,
      taskType: "Service",
    };

    axios
      .post("http://localhost:3001/api/Customer/schedule", data)
      .then(() => {
        alert("Scheduled Successfully");
        window.location = "/CusMenu";
      })
      .catch((err) => {
        alert(err);
      });
  }

  render() {
    return (
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Half Service Package</h5>
          <br />
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Full Body Wash
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Interior Full Wash
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Under Chassis Wash
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Vaccuming
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Engine Oil Change
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Tires and Wheels Grooming
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Exterior Waxing
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Windscreen Treatment
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Engine Wash
            </label>
          </div>
          <br />
          <div class="card-header">
            Total Value : {this.props.heavyHalf[1].price} /=
          </div>
          <div class="card-header">Time Taken : 1 Hour</div>
          <br />

          <form onSubmit={this.submitSchedule}>
            <div class="input-group form-group">
              <span class="input-group-text" id="basic-addon1">
                +94
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="712345678 *"
                value={this.state.schMobile}
                pattern="[0-9]{9}"
                onChange={this.setSchMobile}
                aria-label="712345678 *"
                aria-describedby="basic-addon1"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Your Name *"
                value={this.state.schName}
                pattern="[A-Za-z]{5,}"
                onChange={this.setSchName}
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="BFR-3333 *"
                pattern="[A-Z0-9]{2,3}-[0-9]{4}"
                value={this.state.schVehicle}
                onChange={this.setSchVehicle}
                required
              />
            </div>
            <input
              class="form-control"
              type="date"
              placeholder="Default input"
              value={this.state.schDate}
              onChange={this.setSchDate}
              aria-label="default input example"
              required
            />
            <br />
            <button class="btn btn-primary btn-sm">Schedule Service</button>
          </form>
        </div>
      </div>
    );
  }
}

class HeavyBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      schDate: new Date(),
      schName: "",
      schVehicle: "",
      schMobile: "",
      schType: [],
    };

    this.setSchDate = this.setSchDate.bind(this);
    this.setSchName = this.setSchName.bind(this);
    this.setSchMobile = this.setSchMobile.bind(this);
    this.setSchVehicle = this.setSchVehicle.bind(this);

    this.submitSchedule = this.submitSchedule.bind(this);
  }

  setSchDate(e) {
    this.setState({ schDate: e.target.value });
  }

  setSchMobile(e) {
    this.setState({ schMobile: e.target.value });
  }

  setSchName(e) {
    this.setState({ schName: e.target.value });
  }

  setSchVehicle(e) {
    this.setState({ schVehicle: e.target.value.toUpperCase() });
  }

  submitSchedule(e) {
    this.state.schType[0] = "Body Service";

    const data = {
      schName: this.state.schName,
      schMobile: this.state.schMobile,
      schVehicle: this.state.schVehicle,
      schDate: this.state.schDate,
      schType: this.state.schType,
      taskType: "Service",
    };

    axios
      .post("http://localhost:3001/api/Customer/schedule", data)
      .then(() => {
        alert("Scheduled Successfully");
        window.location = "/CusMenu";
      })
      .catch((err) => {
        alert(err);
      });
  }

  render() {
    return (
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Body Wash Package</h5>
          <br />
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Full Body Wash
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Under Chassis Wash
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Vaccuming
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
              checked
              disabled
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              Greasing
            </label>
          </div>
          <br />
          <div class="card-header">
            Total Value : {this.props.heavyBody[2].price} /=
          </div>
          <div class="card-header">Time Taken : 0.5 Hour</div>
          <br />

          <form onSubmit={this.submitSchedule}>
            <div class="input-group form-group">
              <span class="input-group-text" id="basic-addon1">
                +94
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="712345678 *"
                value={this.state.schMobile}
                pattern="[0-9]{9}"
                onChange={this.setSchMobile}
                aria-label="712345678 *"
                aria-describedby="basic-addon1"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Your Name *"
                value={this.state.schName}
                pattern="[A-Za-z]{5,}"
                onChange={this.setSchName}
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="BFR-3333 *"
                pattern="[A-Z0-9]{2,3}-[0-9]{4}"
                value={this.state.schVehicle}
                onChange={this.setSchVehicle}
                required
              />
            </div>
            <input
              class="form-control"
              type="date"
              placeholder="Default input"
              value={this.state.schDate}
              onChange={this.setSchDate}
              aria-label="default input example"
              required
            />
            <br />
            <button class="btn btn-primary btn-sm">Schedule Service</button>
          </form>
        </div>
      </div>
    );
  }
}

class HeavyCustoms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      customServices: [],
      schDate: new Date(),
      schName: "",
      schVehicle: "",
      schMobile: "",

      totalPrice: 0,
      totalTime: 0.0,
    };

    this.setCustomList = this.setCustomList.bind(this);
    this.setSchDate = this.setSchDate.bind(this);
    this.setSchName = this.setSchName.bind(this);
    this.setSchMobile = this.setSchMobile.bind(this);
    this.setSchVehicle = this.setSchVehicle.bind(this);
    this.submitSchedule = this.submitSchedule.bind(this);
  }

  setSchDate(e) {
    this.setState({ schDate: e.target.value });
  }

  setSchMobile(e) {
    this.setState({ schMobile: e.target.value });
  }

  setSchName(e) {
    this.setState({ schName: e.target.value });
  }

  setSchVehicle(e) {
    this.setState({ schVehicle: e.target.value.toUpperCase() });
  }

  setCustomList(e, id, price, time) {
    if (document.getElementById(id).checked == true) {
      const newVal = e.target.value;
      const list = [...this.state.customServices];

      list[list.length] = newVal;
      this.setState({ customServices: list });

      this.setState({ totalPrice: this.state.totalPrice + parseInt(price) });
      this.setState({ totalTime: this.state.totalTime + parseFloat(time) });
    } else if (document.getElementById(id).checked == false) {
      const newVal = e.target.value;
      const list = [...this.state.customServices];

      list.map((currentItem, i) => {
        if (currentItem == newVal) {
          list.splice(i, 1);
        }
      });
      this.setState({ customServices: list });
      this.setState({ totalPrice: this.state.totalPrice - parseInt(price) });
      this.setState({ totalTime: this.state.totalTime - time });
    }
  }

  submitSchedule(e) {
    const data = {
      schName: this.state.schName,
      schMobile: this.state.schMobile,
      schVehicle: this.state.schVehicle,
      schDate: this.state.schDate,
      schType: this.state.customServices,
      taskType: "Service",
    };

    axios
      .post("http://localhost:3001/api/Customer/schedule", data)
      .then(() => {
        alert("Scheduled Successfully");
        window.location = "/CusMenu";
      })
      .catch((err) => {
        alert(err);
      });
  }

  render() {
    return (
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Customized Service Package</h5>
          <br />
          {this.props.cuzServices.map((currentCuz, idx) => {
            if (currentCuz.serCategory == "Heavy Vehicals And Others") {
              return (
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id={`flexCheckDefault${idx + 20}`}
                    value={currentCuz.serName}
                    onChange={(e) => {
                      this.setCustomList(
                        e,
                        `flexCheckDefault${idx + 20}`,
                        `${currentCuz.serPrice}`,
                        `${currentCuz.serHour}`
                      );
                    }}
                  />
                  <label
                    class="form-check-label"
                    for={`flexCheckDefault${idx + 20}`}
                  >
                    {currentCuz.serName}
                  </label>
                </div>
              );
            }
          })}
          <br />
          <div class="card-header">
            Total Value : {this.state.totalPrice} /=
          </div>
          <div class="card-header">
            Time Taken : {this.state.totalTime} Hours
          </div>
          <br />

          <form onSubmit={this.submitSchedule}>
            <div class="input-group form-group">
              <span class="input-group-text" id="basic-addon1">
                +94
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="712345678 *"
                value={this.state.schMobile}
                pattern="[0-9]{9}"
                onChange={this.setSchMobile}
                aria-label="712345678 *"
                aria-describedby="basic-addon1"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Your Name *"
                value={this.state.schName}
                pattern="[A-Za-z]{5,}"
                onChange={this.setSchName}
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="BFR-3333 *"
                pattern="[A-Z0-9]{2,3}-[0-9]{4}"
                value={this.state.schVehicle}
                onChange={this.setSchVehicle}
                required
              />
            </div>
            <input
              class="form-control"
              type="date"
              placeholder="Default input"
              value={this.state.schDate}
              onChange={this.setSchDate}
              aria-label="default input example"
              required
            />
            <br />
            <button class="btn btn-primary btn-sm">Schedule Service</button>
          </form>
        </div>
      </div>
    );
  }
}

class HeavyServicesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.displayHeavyFull = this.displayHeavyFull.bind(this);
    this.displayHeavyHalf = this.displayHeavyHalf.bind(this);
    this.displayHeavyBody = this.displayHeavyBody.bind(this);
    this.displayHeavyCustom = this.displayHeavyCustom.bind(this);

    this.fullDisable = this.fullDisable.bind(this);
    this.halfDisable = this.halfDisable.bind(this);
    this.bodyDisable = this.bodyDisable.bind(this);

    this.state = {
      heavyfull: "",
      heavyhalf: "",
      heavybody: "",
      heavycustom: "",
    };
  }

  displayHeavyFull() {
    this.setState({ heavyhalf: "" });
    this.setState({ heavybody: "" });
    this.setState({ heavycustom: "" });
    this.setState({
      heavyfull: <HeavyFulls heavyFull={this.props.heavyData} />,
    });
  }

  displayHeavyHalf() {
    this.setState({ heavyfull: "" });
    this.setState({ heavybody: "" });
    this.setState({ heavycustom: "" });
    this.setState({
      heavyhalf: <HeavyHalf heavyHalf={this.props.heavyData} />,
    });
  }

  displayHeavyBody() {
    this.setState({ heavyhalf: "" });
    this.setState({ heavyfull: "" });
    this.setState({ heavycustom: "" });
    this.setState({
      heavybody: <HeavyBody heavyBody={this.props.heavyData} />,
    });
  }

  displayHeavyCustom() {
    this.setState({ heavyhalf: "" });
    this.setState({ heavybody: "" });
    this.setState({ heavyfull: "" });
    this.setState({
      heavycustom: <HeavyCustoms cuzServices={this.props.allServiceData} />,
    });
  }

  fullDisable() {
    if (this.props.heavyData[0].status == "Enable") {
      return false;
    } else {
      return true;
    }
  }

  halfDisable() {
    if (this.props.heavyData[1].status == "Enable") {
      return false;
    } else {
      return true;
    }
  }

  bodyDisable() {
    if (this.props.heavyData[2].status == "Enable") {
      return false;
    } else {
      return true;
    }
  }

  render() {
    return (
      <div>
        <div className="taskSelect">
          <h6>Available Services</h6>
          <br />
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault8"
              onChange={this.displayHeavyFull}
              disabled={this.fullDisable()}
            />
            <label class="form-check-label" for="flexRadioDefault8">
              Full Service Package
            </label>
          </div>
          <br />

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault9"
              onChange={this.displayHeavyHalf}
              disabled={this.halfDisable()}
            />
            <label class="form-check-label" for="flexRadioDefault9">
              Half Body Service Package
            </label>
          </div>
          <br />

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault10"
              onChange={this.displayHeavyBody}
              disabled={this.bodyDisable()}
            />
            <label class="form-check-label" for="flexRadioDefault10">
              Body Service Package
            </label>
          </div>
          <br />

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault11"
              onChange={this.displayHeavyCustom}
            />
            <label class="form-check-label" for="flexRadioDefault11">
              Customize Package
            </label>
          </div>
          <br />
        </div>
        <br />
        <br />
        <div>{this.state.heavyfull}</div>
        <div>{this.state.heavyhalf}</div>
        <div>{this.state.heavybody}</div>
        <div>{this.state.heavycustom}</div>
      </div>
    );
  }
}

class MaitenanceComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      schDate: new Date(),
      schName: "",
      schVehicle: "",
      schMobile: "",

      customMaintenance: [],

      totalPrice: 0,
      totalTime: 0.0,
    };

    this.setSchDate = this.setSchDate.bind(this);
    this.setSchName = this.setSchName.bind(this);
    this.setSchMobile = this.setSchMobile.bind(this);
    this.setSchVehicle = this.setSchVehicle.bind(this);

    this.setCustomList = this.setCustomList.bind(this);
    this.submitSchedule = this.submitSchedule.bind(this);
  }

  setSchDate(e) {
    this.setState({ schDate: e.target.value });
  }

  setSchMobile(e) {
    this.setState({ schMobile: e.target.value });
  }

  setSchName(e) {
    this.setState({ schName: e.target.value });
  }

  setSchVehicle(e) {
    this.setState({ schVehicle: e.target.value.toUpperCase() });
  }

  setCustomList(e, id, price, time) {
    if (document.getElementById(id).checked == true) {
      const newVal = e.target.value;
      const list = [...this.state.customMaintenance];

      list[list.length] = newVal;
      this.setState({ customMaintenance: list });

      this.setState({ totalPrice: this.state.totalPrice + parseInt(price) });
      this.setState({ totalTime: this.state.totalTime + parseFloat(time) });
    } else if (document.getElementById(id).checked == false) {
      const newVal = e.target.value;
      const list = [...this.state.customMaintenance];

      list.map((currentItem, i) => {
        if (currentItem == newVal) {
          list.splice(i, 1);
        }
      });
      this.setState({ customMaintenance: list });
      this.setState({ totalPrice: this.state.totalPrice - parseInt(price) });
      this.setState({ totalTime: this.state.totalTime - time });
    }
  }

  submitSchedule(e) {
    const data = {
      schName: this.state.schName,
      schMobile: this.state.schMobile,
      schVehicle: this.state.schVehicle,
      schDate: this.state.schDate,
      schType: this.state.customMaintenance,
      taskType: "Maintenance",
    };

    axios
      .post("http://localhost:3001/api/Customer/schedule", data)
      .then(() => {
        alert("Scheduled Successfully");
        window.location = "/CusMenu";
      })
      .catch((err) => {
        alert(err);
      });
  }

  render() {
    return (
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Customized Service Package</h5>
          <br />

          {this.props.maintnData.map((currentMaintain, idx) => {
            return (
              <div style={{ marginBottom: "25px" }}>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id={`planid${idx + 4}`}
                    data-bs-toggle="collapse"
                    value={currentMaintain.planName}
                    onChange={(e) => {
                      this.setCustomList(
                        e,
                        `planid${idx + 4}`,
                        `${currentMaintain.total}`,
                        `${currentMaintain.planEstHours}`
                      );
                    }}
                    data-bs-target={`#collapseExample${idx + 4}`}
                    aria-expanded="false"
                    aria-controls={`collapseExample${idx + 4}`}
                  />

                  <label
                    class="form-check-label text-muted fw-bold"
                    for={`planid${idx + 4}`}
                  >
                    {currentMaintain.planName}
                  </label>
                </div>

                <div class="collapse" id={`collapseExample${idx + 4}`}>
                  <div class="card card-body">
                    <p class="fst-italic">Description :</p>
                    {currentMaintain.planDescription}
                  </div>
                </div>
              </div>
            );
          })}
          <br />
          <div class="card-header">
            Total Value : {this.state.totalPrice} /=
          </div>
          <div class="card-header">
            Time Taken : {this.state.totalTime} Hours
          </div>
          <br />

          <form onSubmit={this.submitSchedule}>
            <div class="input-group form-group">
              <span class="input-group-text" id="basic-addon1">
                +94
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="712345678 *"
                value={this.state.schMobile}
                pattern="[0-9]{9}"
                onChange={this.setSchMobile}
                aria-label="712345678 *"
                aria-describedby="basic-addon1"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Your Name *"
                value={this.state.schName}
                pattern="[A-Za-z]{5,}"
                onChange={this.setSchName}
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="BFR-3333 *"
                pattern="[A-Z0-9]{2,3}-[0-9]{4}"
                value={this.state.schVehicle}
                onChange={this.setSchVehicle}
                required
              />
            </div>
            <input
              class="form-control"
              type="date"
              placeholder="Default input"
              value={this.state.schDate}
              onChange={this.setSchDate}
              aria-label="default input example"
              required
            />
            <br />
            <button class="btn btn-primary btn-sm">Schedule Service</button>
          </form>
        </div>
      </div>
    );
  }
}

class ScheduleSM extends React.Component {
  constructor(props) {
    super(props);
    this.getVehicleTypeInfo = this.getVehicleTypeInfo.bind(this);
    this.getServiceOrMaintenance = this.getServiceOrMaintenance.bind(this);

    this.state = {
      selectedVehicle: "",
      maintenanceChecked: 0,
      servicemy: "",
      maintenancemy: "",

      smallServices: [],
      acServices: [],
      heavyServices: [],
      allServices: [],

      bikeMaitenance: [],
      wheelMaintenance: [],
      carMaintenance: [],
      utilityMaintenance: [],
      otherMaintenance: [],
    };
  }

  getServiceOrMaintenance() {
    if (document.getElementById("flexRadioDefault15").checked) {
      this.setState({ maintenancemy: "" });

      if (this.state.selectedVehicle == 1 || this.state.selectedVehicle == 2) {
        this.setState({
          servicemy: (
            <SmallServicesComponent
              smallData={this.state.smallServices}
              allServiceData={this.state.allServices}
            />
          ),
        });
      } else if (
        this.state.selectedVehicle == 3 ||
        this.state.selectedVehicle == 4 ||
        this.state.selectedVehicle == 5 ||
        this.state.selectedVehicle == 6
      ) {
        this.setState({
          servicemy: (
            <ACServicesComponent
              acData={this.state.acServices}
              allServiceData={this.state.allServices}
            />
          ),
        });
      } else if (
        this.state.selectedVehicle == 7 ||
        this.state.selectedVehicle == 8 ||
        this.state.selectedVehicle == 9 ||
        this.state.selectedVehicle == 10
      ) {
        this.setState({
          servicemy: (
            <HeavyServicesComponent
              heavyData={this.state.heavyServices}
              allServiceData={this.state.allServices}
            />
          ),
        });
      } else {
        document.getElementById("myselect1").className =
          "form-select selectVehicle is-invalid";
        document.getElementById("myselect2").className = "invalid-feedback";
        document.getElementById("myselect2").innerHTML =
          "Please Select a Vehicle Type.";
      }
    } else if (document.getElementById("flexRadioDefault16").checked) {
      this.setState({ servicemy: "" });

      if (this.state.selectedVehicle == 1) {
        this.setState({
          maintenancemy: (
            <MaitenanceComponent maintnData={this.state.bikeMaitenance} />
          ),
        });
      } else if (this.state.selectedVehicle == 2) {
        this.setState({
          maintenancemy: (
            <MaitenanceComponent maintnData={this.state.wheelMaintenance} />
          ),
        });
      } else if (
        this.state.selectedVehicle == 3 ||
        this.state.selectedVehicle == 4
      ) {
        this.setState({
          maintenancemy: (
            <MaitenanceComponent maintnData={this.state.carMaintenance} />
          ),
        });
      } else if (
        this.state.selectedVehicle == 5 ||
        this.state.selectedVehicle == 6
      ) {
        this.setState({
          maintenancemy: (
            <MaitenanceComponent maintnData={this.state.utilityMaintenance} />
          ),
        });
      } else if (
        this.state.selectedVehicle == 7 ||
        this.state.selectedVehicle == 8 ||
        this.state.selectedVehicle == 9 ||
        this.state.selectedVehicle == 10
      ) {
        this.setState({
          maintenancemy: (
            <MaitenanceComponent maintnData={this.state.otherMaintenance} />
          ),
        });
      } else {
        document.getElementById("myselect1").className =
          "form-select selectVehicle is-invalid";
        document.getElementById("myselect2").className = "invalid-feedback";
        document.getElementById("myselect2").innerHTML =
          "Please Select a Vehicle Type.";
      }
    }
  }

  getVehicleTypeInfo(e) {
    this.setState({ selectedVehicle: e.target.value });
    document.getElementById("myselect1").className =
      "form-select selectVehicle";
    document.getElementById("myselect2").className = "";
    document.getElementById("myselect2").innerHTML = "";

    document.getElementById("flexRadioDefault15").checked = false;
    document.getElementById("flexRadioDefault16").checked = false;
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/Services/allSmallPack")
      .then((res) => {
        console.log(res.data);
        this.setState({ smallServices: res.data });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:3001/Services/allAcPack")
      .then((res) => {
        console.log(res.data);
        this.setState({ acServices: res.data });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:3001/Services/allHeavyPack")
      .then((res) => {
        console.log(res.data);
        this.setState({ heavyServices: res.data });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:3001/Services/all")
      .then((res) => {
        console.log(res.data);
        this.setState({ allServices: res.data });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:3001/api/maintenance/AllPlans/CAR")
      .then((res) => {
        console.log(res.data);
        this.setState({ carMaintenance: res.data });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:3001/api/maintenance/AllPlans/UTILITY%20VEHICLES")
      .then((res) => {
        console.log(res.data);
        this.setState({ utilityMaintenance: res.data });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:3001/api/maintenance/AllPlans/BIKE")
      .then((res) => {
        console.log(res.data);
        this.setState({ bikeMaitenance: res.data });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:3001/api/maintenance/AllPlans/THREE%20WHEEL")
      .then((res) => {
        console.log(res.data);
        this.setState({ wheelMaintenance: res.data });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:3001/api/maintenance/AllPlans/OTHER")
      .then((res) => {
        console.log(res.data);
        this.setState({ otherMaintenance: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container">
        <br />
        <br />
        <h2 className="p-3 mb-2 bg-light text-dark">
          Schedule Service or Maintenance
        </h2>
        <br />
        <br />
        <div class="row">
          <div class="col-sm-6 w-25 selectSM">
            <div className="form-group">
              <select
                className="form-select selectVehicle"
                aria-label="Default select example"
                id="myselect1"
                onChange={this.getVehicleTypeInfo}
              >
                <option selected>Select Vehicle Type</option>
                <option value="1">Bike (Any)</option>
                <option value="2">Three Wheel</option>
                <option value="3">Car (Normal / Hybrid)</option>
                <option value="4">Van (AC / Non AC)</option>
                <option value="5">Jeep / SUV</option>
                <option value="6">Double Cab</option>
                <option value="7">Truck</option>
                <option value="8">Bus (Any)</option>
                <option value="9">
                  Special Purpose (Construction / Container)
                </option>
                <option value="10">Other</option>
              </select>
              <div id="myselect2"></div>
            </div>
            <br />
            <div className="taskSelect">
              <h6>Select Task Category</h6>
              <br />
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  onChange={this.getServiceOrMaintenance}
                  id="flexRadioDefault15"
                />
                <label class="form-check-label" for="flexRadioDefault15">
                  Vehicle Services
                </label>
              </div>
              <br />
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  onChange={this.getServiceOrMaintenance}
                  id="flexRadioDefault16"
                />
                <label class="form-check-label" for="flexRadioDefault16">
                  Vehicle Maintenance
                </label>
              </div>
            </div>
            <br />
            <br />
          </div>
          <div class="col-sm-6 detailsSM">
            <div className="">
              <div>{this.state.servicemy}</div>
              <div>{this.state.maintenancemy}</div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default ScheduleSM;
