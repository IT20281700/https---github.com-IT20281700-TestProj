import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Selector from "../partsSelector/partsSelector";
import "./planEdit.css";
import axios from "axios";

export default function EditPlan(props) {
  // Vehicle type selection
  const { id, objID } = useParams();
  const history = useHistory();
  const url = "/type/" + id;

  console.log(id, objID);

  // get editing details by id
  const [planID, setPlanID] = useState();
  const [planName, setPlanName] = useState();
  const [spareParts, setValue] = useState([]);
  const [planDescription, setPlanDescription] = useState();
  const [planEstHours, setPlanEstHours] = useState();
  const [amount, setAmount] = useState();
  const [discount, setDiscount] = useState();
  const [total, settotal] = useState();

  useEffect(() => {
    let getPlanCard = () => {
      axios
        .get(
          "http://localhost:3001/api/maintenance/PlanCard/" + id + "/" + objID
        )
        .then((res) => {
          setPlanID(res.data.planID);
          setPlanName(res.data.planName);
          setValue(res.data.spareParts);
          setPlanDescription(res.data.planDescription);
          setPlanEstHours(res.data.planEstHours);
          setAmount(res.data.amount);
          setDiscount(res.data.discount);
          settotal(res.data.total);
        });
    };
    getPlanCard();
  }, []);

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

  const totChange = () => {
    if (discount == 0) {
      settotal(amount);
    } else if (discount < 0) {
      alert("Please enter valid amounts");
    } else if (total < 0) {
      alert("Please enter valid amounts");
    }
  };

  // updated data array
  const planDetailSet = {
    planID,
    planName,
    spareParts,
    planDescription,
    planEstHours,
    amount,
    discount,
    total,
  };

  //Update The PlanCard
  const updateThisPlan = (e) => {
    e.preventDefault();

    axios
      .put(
        "http://localhost:3001/api/maintenance/updatePlan/" + id + "/" + objID,
        planDetailSet
      )
      .then(() => {
        alert("Plan card update successful");
        history.push(url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Bill calculation
  function billCalcualtion(e) {
    setDiscount(e.target.value);
    settotal(amount - e.target.value);
  }

  function TotalCalculation(amm) {
    settotal(amm - discount);
  }

  return (
    <div
      className="chamoddata"
      style={{ marginTop: "40px", marginBottom: "40px" }}
    >
      <h2>Edit Current Plan</h2>
      <h5>Vehicle Type :- {id}</h5>
      <hr />
      <div className="newPlanContainer">
        <form
          className="cfc"
          onSubmit={(e) => {
            updateThisPlan(e);
          }}
        >
          <div className="planDetails">
            <div className="planID idInForm">
              <label className="planIdLabel idLabel">Plan ID</label>
              <input className="adding" defaultValue={planID} disabled />
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
                defaultValue={planName}
                onChange={(e) => {
                  setPlanName(e.target.value);
                }}
              />
              <label for="planTitle" className="lab">
                Plan title
              </label>
            </div>
            <div className="selectorCtrl">
              <Selector
                getValue={(e) => {
                  setValue(e.map((data) => data));
                  setPrice(e.map((p) => p.price));
                }}
                sp={spareParts}
                removeValue={(e) => {
                  setValue(e.map((data) => data));
                  removePrice(e.map((p) => p.price));
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
                defaultValue={planDescription}
                onChange={(e) => {
                  setPlanDescription(e.target.value);
                }}
              ></textarea>
              <label className="lab" for="floatingTextarea2">
                Description
              </label>
            </div>
            <br></br>
            <div className="form-floating mb-3" style={{ width: "200px" }}>
              <input
                type="Number"
                class="form-control f-con"
                id="estHours"
                placeholder="estHours"
                required
                step="0.10"
                defaultValue={planEstHours}
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
                  type="number"
                  min="0"
                  defaultValue={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                    TotalCalculation(e.target.value);
                  }}
                />
                <input
                  className="inputBill dis"
                  type="number"
                  placeholder="0.00"
                  min="0"
                  defaultValue={discount}
                  onChange={(e) => {
                    billCalcualtion(e);
                    totChange(e);
                  }}
                />
                <input
                  className="inputBill"
                  type="number"
                  value={total}
                  disabled
                />
              </div>
            </div>
            <hr className="sep" />
            <div className="btnCon">
              <Link to={url}>
                <Button className="btns">CANCEL</Button>
              </Link>
              <Button type="Submit" className="btns create">
                UPDATE
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
