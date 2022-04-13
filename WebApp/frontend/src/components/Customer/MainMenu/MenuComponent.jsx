import axios from "axios";
import { useEffect, useState } from "react";
import generatePDF from "../Report/ReportGenerator";
import "./MenuStyle.css";

function MenuComponent(props) {
  const [userName, setUserName] = useState("");
  const [vehicleList, setVehicleList] = useState([]);
  const [mobileNumber, setMobileNumber] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [tempPassHolder, setTempPassHolder] = useState("");

  const [customers, setCustomers] = useState([]);

  const handleInput = () => {
    var list = [...vehicleList];
    list[list.length] = "";
    setVehicleList(list);
  };

  const handleRemove = (ind) => {
    const list = [...vehicleList];
    list.splice(ind, 1);
    setVehicleList(list);
  };

  const handleChange = (e, ind) => {
    const newVehi = e.target.value.toUpperCase();

    const list = [...vehicleList];
    list[ind] = newVehi;

    setVehicleList(list);
  };

  useEffect(() => {
    const getAllTickets = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/Customer/getAllUsers"
        );
        console.log(response);
        setCustomers(response.data);
      } catch (err) {
        console.log("error");
      }
    };
    getAllTickets();

    if (localStorage.getItem("customer") != "") {
      const fetchData = () => {
        axios
          .get(
            "http://localhost:3001/api/Customer/getDataToEditProfile/" +
              localStorage.getItem("customer")
          )
          .then((res) => {
            setVehicleList(res.data[0].vehicle);
            setMobileNumber(res.data[0].cusMobile);
            setOldPassword(res.data[0].password);
            setUserName(res.data[0].cusName);
          })
          .catch((err) => {
            console.log("User is Not Logged In");
          });
      };
      fetchData();
    }
  }, []);

  const handleSubmit = () => {
    if (mobileNumber.length != 9) {
      document.getElementById("exampleFormControlInput1").className =
        "form-control is-invalid";
      document.getElementById("chphone").className = "invalid-feedback";
      document.getElementById("chphone").innerHTML =
        "Enter valid mobile number.";
    }

    let exists = false;
    vehicleList.map((vehic) => {
      if (!/^[A-Z0-9]{2,3}-[0-9]{4}/.test(vehic)) {
        exists = true;
      }
    });
    if (exists == true) {
      document.getElementById("carnot").innerHTML =
        "Invalid vehicle registration number!";
      document.getElementById("carnot").style = "color:#dc3545; font-size:14px";
      return;
    }

    if (tempPassHolder != oldPassword) {
      document.getElementById("exampleFormControlInput2").className =
        "form-control is-invalid";
      document.getElementById("chpwd").className = "invalid-feedback";
      document.getElementById("chpwd").innerHTML =
        "Database password match failed!";
    } else {
      const data = {
        vehicleList,
        mobileNumber,
        oldMobile: localStorage.getItem("customer"),
        newPassword,
      };

      axios
        .post("http://localhost:3001/api/Customer/updateCustomer", data)
        .then(() => {
          console.log("Update Successful");
          if (mobileNumber != localStorage.getItem("customer")) {
            localStorage.setItem("customer", mobileNumber);
          }
          window.location = "/CusMenu";
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  function displayProfile() {
    if (localStorage.getItem("customer") == "") {
      return "You are Not Logged In. Please Login to Edit Profile.";
    } else {
      return (
        <div>
          <label
            for="exampleFormControlInput12"
            class="form-label text-muted fw-bold"
          >
            User Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput12"
            value={userName}
            placeholder="John Doe"
          />

          <br />
          <div class="mb-3">
            <label
              for="exampleFormControlInput1"
              class="form-label text-muted fw-bold"
            >
              Mobile Number
            </label>
            <div class="input-group form-group">
              <span class="input-group-text" id="basic-addon1">
                +94
              </span>
              <input
                type="number"
                className="form-control"
                placeholder="712345678 *"
                id="exampleFormControlInput1"
                value={mobileNumber}
                onChange={(e) => {
                  setMobileNumber(e.target.value);
                }}
                aria-label="712345678 *"
                aria-describedby="basic-addon1"
              />
              <div id="chphone"></div>
            </div>
          </div>
          <br />
          <div class="mb-3">
            <label
              for="exampleFormControlInput5"
              class="form-label text-muted fw-bold"
            >
              Vehicles
            </label>
            {vehicleList.map((currentVehicle, i) => {
              return (
                <div class="input-group mb-3 " style={{ width: "50%" }}>
                  <input
                    type="text"
                    id="exampleFormControlInput5"
                    class="form-control form-control-sm"
                    placeholder="XXX-1234 *"
                    value={currentVehicle}
                    onChange={(e) => handleChange(e, i)}
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />

                  <button
                    onClick={() => handleRemove(i)}
                    class="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash2-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z" />
                    </svg>
                  </button>
                  {vehicleList.length - 1 == i && (
                    <button
                      class="btn btn-outline-secondary"
                      onClick={handleInput}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-plus-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                      </svg>
                    </button>
                  )}
                </div>
              );
            })}
            <p id="carnot"></p>
          </div>
          <br />
          <div class="mb-3 form-group">
            <label
              for="exampleFormControlInput2"
              class="form-label text-muted fw-bold"
            >
              Your Password (Required)
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleFormControlInput2"
              value={tempPassHolder}
              onChange={(e) => {
                setTempPassHolder(e.target.value);
                setNewPassword(e.target.value);
              }}
              placeholder="Old Password"
            />
            <div id="chpwd"></div>
            <br />
            <label
              for="exampleFormControlInput3"
              class="form-label text-muted fw-bold"
            >
              Password Change (Optional)
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleFormControlInput3"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
              placeholder="New Password"
            />
          </div>
        </div>
      );
    }
  }

  return (
    <div className="container">
      <br />
      <br />
      <br />

      <h2 class="p-3 mb-2 bg-light text-dark">
        How Can We Help You...
        <div class="dropdown float-end">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z" />
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            </svg>
          </button>
          <ul
            class="dropdown-menu dropdown-menu-dark"
            aria-labelledby="dropdownMenuButton2"
          >
            <li>
              <button
                type="button"
                style={{ padding: "20px" }}
                class="dropdown-item active"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Edit Profile
              </button>
            </li>
            <li>
              <a
                class="dropdown-item"
                style={{ padding: "20px" }}
                onClick={() => {
                  localStorage.setItem("customer", "");
                  window.location = "/";
                }}
              >
                LogOut
              </a>
            </li>
            <li>
              <button
                type="button"
                style={{ padding: "20px" }}
                class="dropdown-item"
                onClick={() => {
                  generatePDF(customers);
                }}
              >
                Generate Report
              </button>
            </li>
          </ul>
        </div>
      </h2>
      <br />
      <br />
      <br />

      {/*Model Start*/}

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit Profile
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">{displayProfile()}</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                class="btn btn-primary"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*ModelEnd*/}

      <div
        class="card mb-3 suvincard"
        style={{ width: "540px;" }}
        onClick={() => {
          window.location.href = "/VehicleHistory";
        }}
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://cdn.wearemarmalade.co.uk/wam/2020-12/car-service.jpg"
              class="img-fluid rounded-start mainmenu"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Vehicle History</h5>
              <p class="card-text">
                View vehicle services history of your vehicles in our system.
                History of employee, price, workload can find here.
              </p>
              <p class="card-text">
                <small class="text-muted">Click anywhere on the card</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />

      <div
        class="card mb-3 suvincard"
        style={{ width: "540px;" }}
        onClick={() => {
          window.location.href = "/ScheduleSM";
        }}
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://www.icharts.net/wp-content/uploads/2020/12/Car-tech-heading.jpg"
              class="img-fluid rounded-start mainmenu"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Schedule a Service</h5>
              <p class="card-text">
                You can schedule any vehicle service through here. Tell us when
                you can come to the service station and we will allocate you a
                time slot.
              </p>
              <p class="card-text">
                <small class="text-muted">Click anywhere on the card</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />

      <div
        class="card mb-3 suvincard"
        style={{ width: "540px;" }}
        onClick={() => {
          window.location.href = "/GMap";
        }}
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://carsguide-res.cloudinary.com/image/upload/f_auto%2Cfl_lossy%2Cq_auto%2Ct_default/v1/editorial/roadside-assistance.jpg"
              class="img-fluid rounded-start mainmenu"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Request Vehicle Assistance</h5>
              <p class="card-text">
                Vehicle breakdown at the middle of the road? Need technicle
                assistance at your convienience? Quickly contact us from here.{" "}
              </p>
              <p class="card-text">
                <small class="text-muted">Click anywhere on the card</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />

      <div
        class="card mb-3 suvincard"
        style={{ width: "540px;" }}
        onClick={() => {
          window.location.href = "/SpareParts/all";
        }}
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://yellow.co.ke/img/2016/05/0916741eef44eebb28cce11a2b97490f311eec04.jpeg?w=600&h=315&fit=crop"
              class="img-fluid rounded-start mainmenu"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Spare Parts</h5>
              <p class="card-text">
                Need high quality, authentic spareparts? Check our inventory for
                spare parts and oils from different vendors. Navigate from here.
              </p>
              <p class="card-text">
                <small class="text-muted">Click anywhere on the card</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default MenuComponent;
