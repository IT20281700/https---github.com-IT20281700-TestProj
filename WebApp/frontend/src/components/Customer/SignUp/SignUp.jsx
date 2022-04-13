import React, { useState } from "react";
import axios from "axios";

import "./SignUp.css";

function SignUp() {
  const [inputList, setInputList] = useState([{ vehicle: "" }]);

  const [cusName, setCusName] = useState("");
  const [cusMobile, setCusMobile] = useState("");
  const [cusNic, setCusNic] = useState("");
  const [cusAddress, setCusAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confPw, setConfPw] = useState("");
  const [vehicle, setVehicle] = useState([]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    console.log(value);

    const list = [...inputList];
    list[index] = value.toUpperCase();

    setInputList(list);
    setVehicle(list);
  };

  const handleAddInput = () => {
    setInputList([...inputList, { vehicle: "" }]);
  };

  const handleRemoveInput = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!cusName) {
      document.getElementById("de").className = "form-control is-invalid";
      document.getElementById("ed").innerHTML = "Name cannot be empty";
      document.getElementById("ed").className = "invalid-feedback";
    } else if (!/^[A-Za-z\s]{5,}$/.test(cusName)) {
      document.getElementById("de").className = "form-control is-invalid";
      document.getElementById("ed").innerHTML = "Please enter valid name";
      document.getElementById("ed").className = "invalid-feedback";
    }

    if (!cusMobile) {
      document.getElementById("ef").className = "form-control is-invalid";
      document.getElementById("fe").innerHTML = "Mobile cannot be empty";
      document.getElementById("fe").className = "invalid-feedback";
    } else if (cusMobile.length != 9) {
      document.getElementById("ef").className = "form-control is-invalid";
      document.getElementById("fe").innerHTML = "Please enter valid number";
      document.getElementById("fe").className = "invalid-feedback";
      return;
    }

    if (!cusNic) {
      document.getElementById("gh").className = "form-control is-invalid";
      document.getElementById("hg").innerHTML = "NIC cannot be empty";
      document.getElementById("hg").className = "invalid-feedback";
    } else if (
      !/^[2-9]{1}[0-9]{8}[V]{1}/.test(cusNic) &&
      !/^[1-2]{1}[0-9]{11}/.test(cusNic)
    ) {
      document.getElementById("gh").className = "form-control is-invalid";
      document.getElementById("hg").innerHTML = "Please enter valid NIC";
      document.getElementById("hg").className = "invalid-feedback";
    }

    if (!cusAddress) {
      document.getElementById("jk").className = "form-control is-invalid";
      document.getElementById("kj").innerHTML = "Address cannot be empty";
      document.getElementById("kj").className = "invalid-feedback";
    }

    if (!password) {
      document.getElementById("ab").className = "form-control is-invalid";
      document.getElementById("bc").innerHTML = "Password cannot be empty";
      document.getElementById("bc").className = "invalid-feedback";
    } else if (password.length < 8) {
      document.getElementById("ab").className = "form-control is-invalid";
      document.getElementById("bc").innerHTML =
        "Password should contain at least 8 characters";
      document.getElementById("bc").className = "invalid-feedback";
      return;
    }

    if (confPw != password || !password) {
      document.getElementById("x").className = "form-control is-invalid";
      document.getElementById("y").className = "invalid-feedback";
      document.getElementById("y").innerHTML = "Passwords don't match.";
    } else {
      const data = {
        cusName,
        cusMobile,
        cusNic,
        cusAddress,
        password,
        vehicle,
      };

      console.log(data);

      axios
        .post("http://localhost:3001/api/Customer/signup", data)
        .then(() => {
          alert(
            "You have registered successfully. Use login to access the system !"
          );
          window.location = "/";
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  return (
    <div>
      <br />
      <div class="container register">
        <div class="row">
          <div class="col-md-3 register-left">
            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
            <h3>Welcome</h3>
            <p>Register in Our System to Acquire Premium Capabilities !</p>
            <a href="/">
              <input type="button" name="" value="Login" />
            </a>
            <br />
          </div>
          <div class="col-md-9 register-right">
            <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  DULAJ
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Motors
                </a>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <h3 class="register-heading">Register as a Customer</h3>
                <form onSubmit={handleSubmit}>
                  <div class="row register-form">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Your Name *"
                          id="de"
                          value={cusName}
                          onChange={(e) => {
                            setCusName(e.target.value);
                          }}
                        />
                        <div id="ed"></div>
                      </div>
                      <br />

                      <div class="input-group form-group">
                        <span class="input-group-text" id="basic-addon1">
                          +94
                        </span>
                        <input
                          type="number"
                          class="form-control"
                          placeholder="712345678 *"
                          id="ef"
                          value={cusMobile}
                          onChange={(e) => {
                            setCusMobile(e.target.value);
                          }}
                          aria-label="712345678 *"
                          aria-describedby="basic-addon1"
                        />
                        <div id="fe"></div>
                      </div>
                      <br />

                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="NIC *"
                          id="gh"
                          value={cusNic}
                          onChange={(e) => {
                            setCusNic(e.target.value.toUpperCase());
                          }}
                        />
                        <div id="hg"></div>
                      </div>
                      <br />
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Your Address *"
                          id="jk"
                          value={cusAddress}
                          onChange={(e) => {
                            setCusAddress(e.target.value);
                          }}
                        />
                        <div id="kj"></div>
                      </div>
                      <br />
                    </div>
                    <div class="col-md-6">
                      {inputList.map((item, i) => {
                        return (
                          <div key={i}>
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                style={{ width: "230px", float: "left" }}
                                name="vehicle"
                                id="zy"
                                placeholder="Enter Vehicle | XXX-1234 *"
                                value={item.vehicle}
                                pattern="[A-Z0-9]{2,3}-[0-9]{4}"
                                onChange={(e) => handleChange(e, i)}
                                required
                              />

                              {inputList.length - 1 === i && (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  onClick={handleAddInput}
                                  width="20"
                                  height="20"
                                  style={{ margin: "8px" }}
                                  fill="currentColor"
                                  class="bi bi-plus-circle add-rem"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                              )}
                              {inputList.length !== 1 && (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  onClick={() => handleRemoveInput(i)}
                                  width="20"
                                  height="20"
                                  style={{ margin: "8px" }}
                                  fill="currentColor"
                                  class="bi bi-dash-circle add-rem"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                </svg>
                              )}

                              <br />
                              <br />
                            </div>
                            <br />
                          </div>
                        );
                      })}

                      <div class="form-group">
                        <input
                          type="password"
                          name="txtEmpPhone"
                          class="form-control"
                          placeholder="Your Password *"
                          id="ab"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                        <div id="bc"></div>
                      </div>
                      <br />

                      <div class="form-group">
                        <input
                          type="password"
                          class="form-control"
                          id="x"
                          placeholder="Confirm Password *"
                          value={confPw}
                          onChange={(e) => {
                            setConfPw(e.target.value);
                          }}
                        />
                        <div id="y"></div>
                      </div>
                      <br />
                      <input
                        type="submit"
                        class="btnRegister"
                        value="Register"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default SignUp;
