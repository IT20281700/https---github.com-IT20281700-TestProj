import axios from "axios";
import { useEffect, useState } from "react";
import "./Invoice.css";

function InvoiceCreate(props) {
  const [serviceDate, setServiceDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [jobDoneBy, setJobDoneBy] = useState("");
  const [serviceVehicle, setServiceVehicle] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [invoiceNo, setInvoiceNo] = useState("");
  const [totalAmount, setTotalAmount] = useState("");

  const [itemList, setItemList] = useState([
    { itemName: "", qty: "", unitPrice: "" },
  ]);

  const handleChange = (e, indx) => {
    const { name, value } = e.target;

    const list = [...itemList];
    list[indx][name] = value;

    setItemList(list);
  };

  const handleAddField = () => {
    setItemList([
      ...itemList,
      {
        itemName: "",
        qty: "",
        unitPrice: "",
      },
    ]);

    //or we can use this way
    // const list = [...itemList];
    // list.push({itemName:"", qty:"", unitPrice:""});
    // setItemList(list);
  };

  const handleRemoveField = () => {
    const list = [...itemList];
    list.pop();
    setItemList(list);
  };

  const calcTotal = () => {
    var temp = 0;
    itemList.map((cit) => {
      temp += cit.qty * cit.unitPrice;
    });
    setTotalAmount(temp);
  };

  const handleSubmit = () => {
    if (
      customerName != "" &&
      totalAmount != 0 &&
      jobDoneBy != "" &&
      serviceVehicle != ""
    ) {
      const data = {
        invoiceNo,
        serviceDate,
        customerName,
        serviceVehicle,
        jobDoneBy,
        totalAmount,
        itemList,
      };

      console.log(data);

      axios
        .post("http://localhost:3001/api/Customer/addInvoice", data)
        .then(() => {
          console.log("Insertion Successfull");
          window.location = "/Invoice";
        })
        .catch((err) => {
          alert(err);
        });
    } //else alert("Please fillout all the fields");
  };

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("http://localhost:3001/api/Customer/getLastInvoiceNo")
        .then((res) => {
          var lastInvoice = res.data;
          setInvoiceNo("DM" + (parseInt(lastInvoice.substring(2)) + 1));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="login-root">
      <div
        className="box-root flex-flex flex-direction--column"
        style={{ minHeight: "100vh", flexGrow: 1 }}
      >
        <div className="loginbackground box-background--white padding-top--64">
          <div className="loginbackground-gridContainer">
            <div
              className="box-root flex-flex"
              style={{ gridArea: "top / start / 8 / end" }}
            >
              <div
                className="box-root"
                style={{
                  backgroundImage:
                    "linear-gradient(white 0%, rgb(247, 250, 252) 33%)",
                  flexGrow: 1,
                }}
              ></div>
            </div>
            <div
              className="box-root flex-flex"
              style={{ gridArea: "4 / 2 / auto / 5" }}
            >
              <div
                className="box-root box-divider--light-all-2 animationLeftRight tans3s"
                style={{ flexGrow: 1 }}
              />
            </div>
            <div
              className="box-root flex-flex"
              style={{ gridArea: "6 / start / auto / 2" }}
            >
              <div
                className="box-root box-background--blue800"
                style={{ flexGrow: 1 }}
              />
            </div>
            <div
              className="box-root flex-flex"
              style={{ gridArea: "7 / start / auto / 4" }}
            >
              <div
                className="box-root box-background--blue animationLeftRight"
                style={{ flexGrow: 1 }}
              />
            </div>
            <div
              className="box-root flex-flex"
              style={{ gridArea: "8 / 4 / auto / 6" }}
            >
              <div
                className="box-root box-background--gray100 animationLeftRight tans3s"
                style={{ flexGrow: 1 }}
              />
            </div>
            <div
              className="box-root flex-flex"
              style={{ gridArea: "2 / 15 / auto / end" }}
            >
              <div
                className="box-root box-background--cyan200 animationRightLeft tans4s"
                style={{ flexGrow: 1 }}
              />
            </div>
            <div
              className="box-root flex-flex"
              style={{ gridArea: "3 / 14 / auto / end" }}
            >
              <div
                className="box-root box-background--blue animationRightLeft"
                style={{ flexGrow: 1 }}
              />
            </div>
            <div
              className="box-root flex-flex"
              style={{ gridArea: "4 / 17 / auto / 20" }}
            >
              <div
                className="box-root box-background--gray100 animationRightLeft tans4s"
                style={{ flexGrow: 1 }}
              />
            </div>
            <div
              className="box-root flex-flex"
              style={{ gridArea: "5 / 14 / auto / 17" }}
            >
              <div
                className="box-root box-divider--light-all-2 animationRightLeft tans3s"
                style={{ flexGrow: 1 }}
              />
            </div>
          </div>
        </div>
        <div
          className="box-root padding-top--24 flex-flex flex-direction--column"
          style={{ flexGrow: 1, zIndex: 9 }}
        >
          <div className="formbg-outer">
            <div className="formbg">
              <div className="formbg-inner padding-horizontal--48">
                <center>
                  <div className="padding-bottom--24">
                    <h2 className="p-3 mb-2 bg-light text-dark">
                      Auto Invoice
                    </h2>
                    <br />
                  </div>
                </center>
                {/* input from here */}
                <form id="stripe-login" onSubmit={handleSubmit}>
                  <div className="row">
                    <div class="mb-3 col">
                      <label for="exampleFormControlInput1" class="form-label">
                        Invoice Number
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="DM12345"
                        value={invoiceNo}
                      />
                    </div>
                    <div class="mb-3 col">
                      <label for="exampleFormControlInput2" class="form-label">
                        Invoice Date
                      </label>
                      <input
                        type="date"
                        value={serviceDate}
                        class="form-control"
                        id="exampleFormControlInput2"
                        placeholder="2021-10-11"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div class="mb-3 col">
                      <label for="exampleFormControlInput3" class="form-label">
                        Customer Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput3"
                        placeholder="John Doe"
                        value={customerName}
                        onChange={(e) => {
                          setCustomerName(e.target.value);
                        }}
                        pattern="[A-Za-z\s]{5,}"
                        required
                      />
                    </div>
                    <div class="mb-3 col">
                      <label for="exampleFormControlInput4" class="form-label">
                        Vehicle Reg. No.
                      </label>
                      <input
                        type="text"
                        value={serviceVehicle}
                        onChange={(e) => {
                          setServiceVehicle(e.target.value.toUpperCase());
                        }}
                        class="form-control"
                        id="exampleFormControlInput4"
                        placeholder="CSX-3344"
                        pattern="[A-Z0-9]{2,3}-[0-9]{4}"
                        required
                      />
                    </div>
                  </div>
                  <br />
                  <label for="exampleFormControlInput5" class="form-label">
                    Vehicle Job Details / Spare Part, Oil
                  </label>

                  {itemList.map((itr, idx) => {
                    return (
                      <div>
                        <div key={idx} class="input-group">
                          <input
                            type="text"
                            aria-label="Item Name"
                            class="form-control"
                            name="itemName"
                            placeholder="Item Name"
                            style={{ width: "300px" }}
                            value={itr.itemName}
                            onChange={(e) => handleChange(e, idx)}
                          />
                          <input
                            type="number"
                            aria-label="Quantity"
                            class="form-control"
                            name="qty"
                            placeholder="Quantity"
                            value={itr.qty}
                            onChange={(e) => handleChange(e, idx)}
                          />
                          <input
                            type="number"
                            aria-label="Total"
                            name="unitPrice"
                            class="form-control"
                            placeholder="Unit Price"
                            value={itr.unitPrice}
                            onChange={(e) => handleChange(e, idx)}
                          />
                        </div>
                        <br />
                      </div>
                    );
                  })}

                  <center>
                    <button
                      class="btn btn-outline-secondary smaddrem"
                      type="button"
                      id="button-addon2"
                      onClick={handleAddField}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-plus-lg"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
                      </svg>
                    </button>

                    <button
                      style={{
                        marginLeft: "30px",
                      }}
                      class="btn btn-outline-secondary smaddrem"
                      type="button"
                      id="button-addon2"
                      onClick={handleRemoveField}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-dash-lg"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z" />
                      </svg>
                    </button>
                  </center>
                  <br />
                  <div className="row">
                    <div class="mb-3 col">
                      <label for="exampleFormControlInput5" class="form-label">
                        Job Done By
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput5"
                        placeholder="John Doe"
                        value={jobDoneBy}
                        onChange={(e) => {
                          setJobDoneBy(e.target.value);
                        }}
                        pattern="[A-Za-z\s]{5,}"
                        required
                      />
                    </div>
                    <div class="mb-3 col">
                      <label for="exampleFormControlInput6" class="form-label">
                        Total Amount
                      </label>

                      <div class="input-group mb-3 ">
                        <input
                          type="number"
                          class="form-control"
                          id="exampleFormControlInput6"
                          placeholder="0.00"
                          value={totalAmount}
                          required
                        />
                        <button
                          class="btn btn-outline-secondary"
                          type="button"
                          id="button-addon2"
                          onClick={calcTotal}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-calculator"
                            viewBox="0 0 16 16"
                          >
                            <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                            <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div class="d-grid gap-2 col-6 mx-auto">
                    <button class="btn btn-dark" type="submit">
                      Create Invoice
                    </button>
                  </div>
                </form>
                {/* input to here */}
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceCreate;
