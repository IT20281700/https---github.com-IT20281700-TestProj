import DefaultMap from "./DefaultMap";
import React, { useState } from "react";
import axios from "axios";

function ReqAssistForm() {
  const [coordinates, setcoordinates] = useState("");
  const [userName, setUserName] = useState("");
  const [userMobile, setUserMobile] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [urgent, setUrgent] = useState(false);
  const [problemDetail, setProblem] = useState("");

  const handleRequest = () => {
    const data = {
      userName,
      userMobile,
      userAddress,
      latitude,
      longitude,
      urgent,
      problemDetail,
    };

    console.log(data);

    axios
      .post("http://localhost:3001/api/Customer/requestAssist", data)
      .then(() => {
        alert("Succesfully Requested");
        window.location = "CusMenu";
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <h2 className="p-3 mb-2 bg-light text-dark">
        Request Vehicle Assistance
      </h2>
      <br />
      <DefaultMap />
      <br />
      <br />
      <div
        className="container"
        style={{
          maxWidth: "850px",
          border: "1px solid",
          padding: "30px",
          borderRadius: "10px",
        }}
      >
        <form onSubmit={handleRequest}>
          <div className="input-group input-group-lg">
            <input
              type="text"
              className="form-control"
              id="longlat"
              placeholder="Provide Your GeoLocation"
              aria-label="Provide Your GeoLocation"
              name="coordinates"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Disabled input field. Please use 'Extract' to locate"
              aria-describedby="button-addon2"
              disabled
              required
            />
            <button
              className="btn btn-outline-secondary"
              onClick={geoFindMe}
              type="button"
              id="button-addon2"
            >
              Extract My Location
            </button>
          </div>
          <center>
            <p id="status" style={{ color: "red" }}></p>
          </center>
          <br />
          <br />

          <div class="row g-2">
            <div class="form-floating mb-3 col-md">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="Your Name"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                pattern="[A-Za-z]{5,}"
                required
              />
              <label for="floatingInput">Your Name</label>
            </div>

            <div class="form-floating col-md">
              <input
                type="tel"
                class="form-control"
                id="floatingPassword"
                placeholder="Mobile Number"
                value={userMobile}
                onChange={(e) => {
                  setUserMobile(e.target.value);
                }}
                required
                pattern="[0-9]{10}"
              />
              <label for="floatingPassword">Mobile Number</label>
            </div>
          </div>
          <br />

          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingPassword"
              placeholder="Say what is your vehicle trouble. Try to be descriptive as much as possible"
              value={problemDetail}
              onChange={(e) => {
                setProblem(e.target.value);
              }}
              required
            />
            <label for="floatingPassword">
              Say what is your vehicle trouble. Try to be descriptive as much as
              possible
            </label>
          </div>
          <br />

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              name="urgentSet"
              value="urgent"
              checked={urgent}
              onChange={(e) => {
                setUrgent(!urgent);
              }}
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Extremely Urgent
            </label>
          </div>
          <br />

          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingPassword"
              placeholder="Address (optional)"
              value={userAddress}
              onChange={(e) => {
                setUserAddress(e.target.value);
              }}
            />
            <label for="floatingPassword">Address (optional)</label>
          </div>
          <br />
          <br />

          <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-primary" type="submit">
              Request
            </button>
          </div>
        </form>
        <br />
        <br />
        <br />

        <div class="card">
          <h5 class="card-header">Featured</h5>
          <div class="card-body">
            <h5 class="card-title">Or Just Call Us</h5>
            <p class="card-text">
              Please use this for extreme emergencies. Our staff is ready to
              assist you.
            </p>
            <a href="tel:+9477 364 2530" class="btn btn-primary">
              Call
            </a>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
    </div>
  );
}

export default ReqAssistForm;

let latitude = "";
let longitude = "";

function geoFindMe() {
  const status = document.querySelector("#status");

  function success(position) {
    document.getElementById("longlat").className = "form-control";
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    status.textContent = "";

    document.getElementById(
      "longlat"
    ).value = `Latitude: ${latitude} ° , Longitude: ${longitude} °`;
  }

  function error() {
    document.getElementById("longlat").className = "form-control is-invalid";
    status.textContent = "Unable to retrieve your location";
  }

  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    status.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}
