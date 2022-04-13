import React, { useState, useEffect } from "react";
import "./planCard.css";
import "./flipCard.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";

export default function PlanCard({ details }) {
  //get vehicle type from url
  const { id } = useParams();
  const url = "/editPlan/" + id + "/";

  // props assign
  const data = [details];

  //planID for update id after delete

  // function for split the plan id
  function splitPID(ppp) {
    let TOarr = [];
    const intoCharArray = ppp.split("");
    console.log(intoCharArray);

    //get numbers to array
    for (let i = 5; i < intoCharArray.length; i++) {
      const ele = intoCharArray[i];

      for (let j = 0; j <= ele[j]; j++) {
        TOarr.push(ele[j]);
      }
    }

    let plus = "";
    //plus numbers
    for (let i = 0; i < TOarr.length; i++) {
      plus += TOarr[i];
    }
    return [Number(plus)];
  }

  const [all, setAll] = useState([]);

  useEffect(() => {
    function getAll() {
      axios
        .get("http://localhost:3001/api/maintenance/AllPlans/" + id)
        .then((res) => {
          setAll(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getAll();
  }, []);

  const deleteCard = (pID, num) => {
    var conf = window.confirm("Confirm to delete this Plan Card");

    if (conf == true) {
      axios
        .delete(
          "http://localhost:3001/api/maintenance/deletePlan/" + id + "/" + pID
        )
        .then(() => {
          //after deleted the plan, update the id
          //find for update to id
          let looping = all.length - 1;
          console.log(looping);

          if (looping == 0) {
            alert("Plan Card is deleted");
            window.location.reload();
          }

          for (let i = 1; i <= looping; i++) {
            const CurrentIDNumber = num + i;
            const CurrentID = "PID00" + CurrentIDNumber;
            const nextIDNumber = CurrentIDNumber - 1;
            const planID = "PID00" + nextIDNumber;
            const dataset = { planID };

            axios
              .put(
                "http://localhost:3001/api/maintenance/updatePID/" +
                  id +
                  "/" +
                  CurrentID,
                dataset
              )
              .then(() => {
                if (i == looping) {
                  console.log("id Updated");
                  alert("Plan Card is deleted");
                  window.location.reload();
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      {
        <div>
          <div className="container">
            {data.map((data) => (
              <h3 className="cardTitle">{data.planName}</h3>
            ))}

            <hr className="cardHR" />
          </div>
          <div className="planID">
            <label>Plan ID</label>
            {data.map((data) => (
              <input defaultValue={data.planID} disabled />
            ))}
          </div>

          <div className="planCardDetails">
            <label className="detailName">Spare Parts</label>

            <ul className="spares" title="Spare Parts">
              {data.map((data) =>
                data.spareParts.map((sp) => <li>{sp.sName}</li>)
              )}
            </ul>

            <label className="detailName detailNameetHour">
              Estimated Hours
            </label>
            {data.map((data) => (
              <input
                className="ethWrapper"
                type="text"
                disabled
                defaultValue={data.planEstHours}
              />
            ))}
            <span className="hProp">h</span>

            <div className="quotation">
              <label className="detailName QuotateLabel">Quotation</label>
              <label className="quoteDetails amount">Amount</label>
              {data.map((data) => (
                <input
                  className="billInputs"
                  type="text"
                  disabled
                  defaultValue={data.amount}
                />
              ))}
              <br></br>
              <label className="quoteDetails dis">Discount</label>
              {data.map((data) => (
                <input
                  className="billInputs dis"
                  type="text"
                  disabled
                  defaultValue={data.discount}
                />
              ))}
              <br></br>
              <label className="quoteDetails Ltot">Total</label>
              {data.map((data) => (
                <input
                  className="billInputs tot"
                  type="text"
                  disabled
                  defaultValue={data.total}
                />
              ))}
            </div>
            <div className="cardBtnControl">
              {data.map((data) => (
                <Link to={url + data._id}>
                  <Button className="btnEdit">EDIT</Button>
                </Link>
              ))}

              <Button
                className="btnDelete"
                onClick={(e) => {
                  const id = data.map((data) => {
                    return data._id;
                  });
                  const getpidd = data.map((data) => {
                    return data.planID;
                  });
                  const anyn = splitPID(getpidd[0]);
                  deleteCard(id[0], anyn[0]);
                }}
              >
                DELETE
              </Button>
            </div>
          </div>
        </div>
      }
    </div>
  );
}
