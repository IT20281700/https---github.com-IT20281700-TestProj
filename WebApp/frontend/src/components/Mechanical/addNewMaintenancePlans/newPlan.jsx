import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import Selector from "../partsSelector/partsSelector";
import "./addNewPlan.css";
import axios from "axios";

export default function NewPlan(props) {
  const { id } = useParams();
  const history = useHistory();

  // Get details to card from database
  const [details, setDetails] = useState([]);

  useEffect(() => {
    function getDetails() {
      axios
        .get("http://localhost:3001/api/maintenance/AllPlans/" + id)
        .then((res) => {
          setDetails(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getDetails();
  }, []);

  // generateplanID;
  const len = details.length;
  const gen = len + 1;
  const planID = "PID00" + gen;

  // get selected spare-parts
  var [spareParts, setValue] = useState([]);

  // onSelect set price
  function setPrice(price) {
    var total = 0;
    var tot;
    for (let i = 0; i < price.length; i++) {
      total += price[i];
    }
    tot = total - discount;
    setAmount(total);
    settotal(tot);
  }

  // onDeselect remove price
  function removePrice(price) {
    var total = 0;
    var tot;
    for (let i = 0; i < price.length; i++) {
      total += price[i];
    }
    tot = total - discount;
    setAmount(total);
    settotal(tot);
  }

  // Get amounts from all selected spare-parts

  // Set states
  const [planName, setPtitle] = useState("");
  const [planDescription, setPdescription] = useState("");
  const [planEstHours, setPlanEstHours] = useState("");
  const [amount, setAmount] = useState(0);
  const [discount, setdiscount] = useState(0);
  const [total, settotal] = useState("");

  // Calculation of total from Amount - Discount
  function calcTot(disc) {
    setdiscount(disc);
    const tot = amount - disc;
    settotal(tot);
  }

  const totChange = () => {
    if (discount == 0) {
      settotal(amount);
    } else if (discount < 0) {
      alert("Please enter valid amounts");
    } else if (total < 0) {
      alert("Please enter valid amounts");
    }
  };

  console.log(spareParts);
  // Send data
  function sendData(e) {
    e.preventDefault();

    const newPlanContent = {
      planID,
      planName,
      spareParts,
      planDescription,
      planEstHours,
      amount,
      discount,
      total,
    };

    axios
      .post(
        "http://localhost:3001/api/maintenance/AddPlans/" + id,
        newPlanContent
      )
      .then(() => {
        alert("New Plan added");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(newPlanContent);
  }

  return (
    <div className="newPlanContainer">
      <form className="form-container cfc" onSubmit={sendData}>
        <div className="planDetails">
          <div className="planID idInForm">
            <label className="planIdLabel idLabel">Plan ID</label>
            <input className="adding" value={planID} disabled />
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className="form-floating mb-3">
            <input
              type="text"
              class="form-control f-con"
              id="planTitle"
              placeholder="Plan title"
              required
              onChange={(e) => {
                setPtitle(e.target.value);
              }}
            />
            <label for="planTitle" className="lab">
              Plan title
            </label>
          </div>
          <div className="selectorCtrl">
            <Selector
              getValue={(e) => {
                setValue(e.map((id) => id));
                setPrice(e.map((p) => p.price));
              }}
              removeValue={(e) => {
                removePrice(e.map((p) => p.price));
                setValue(e.map((id) => id));
              }}
            />
          </div>
          <br></br>
          <br></br>
          <div class="form-floating">
            <textarea
              class="form-control f-con ta"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "200px" }}
              onChange={(e) => {
                setPdescription(e.target.value);
              }}
              required
            ></textarea>
            <label className="lab" for="floatingTextarea2">
              Description
            </label>
          </div>
          <br></br>
          <div className="form-floating mb-3" style={{ width: "200px" }}>
            <input
              type="number"
              class="form-control f-con"
              id="estHours"
              placeholder="estHours"
              required
              step="0.25"
              onChange={(e) => {
                setPlanEstHours(e.target.value);
              }}
            />
            <label for="planTitle" className="lab">
              EST Hours
            </label>
          </div>
          <div className="bill">
            <label className="invo">INVOICE</label>
            <br></br>
            <div className="allbillLabels">
              <label className="labelBill">AMOUNT</label>
              <label className="labelBill">DISCOUNT</label>
              <label className="labelBill">TOTAL</label>
            </div>
            <div className="allbillInputs">
              <input
                className="inputBill"
                type="text"
                min="0"
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
              <input
                className="inputBill dis"
                type="text"
                placeholder="0.00"
                min="0"
                onChange={(e) => {
                  calcTot(e.target.value);
                }}
              />
              <input
                className="inputBill"
                type="text"
                defaultValue={total}
                placeholder={amount}
                disabled
              />
            </div>
          </div>
          <hr className="sep" />
          <div className="btnCon">
            <Button
              type="reset"
              className="btns"
              onClick={(e) => {
                setAmount(0);
                settotal(0);
                setdiscount(0);
              }}
            >
              RESET
            </Button>
            <Button type="submit" className="btns create" onClick={totChange}>
              CREATE
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
