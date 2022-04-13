import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./select_vehicle.css";

function M_vehicle_type(props) {
  //Button text effect change
  const [textOverCar, setTextOverCar] = useState("");
  const [textOverBike, setTextOverBike] = useState("");
  const [textOverWheel, setTextOverWheel] = useState("");
  const [textOverUtility, setTextOverUtility] = useState("");
  const [textOverOther, setTextOverOther] = useState("");

  function handleMouseEnterCar(e) {
    setTextOverCar("CAR / VAN");
  }

  function handleMouseLeaveCar(e) {
    setTextOverCar("");
  }

  function handleMouseEnterBike() {
    setTextOverBike("BIKE");
  }
  function handleMouseLeaveBike() {
    setTextOverBike("");
  }

  function handleMouseEnterWheel() {
    setTextOverWheel("THREE WHEEL");
  }
  function handleMouseLeaveWheel() {
    setTextOverWheel("");
  }

  function handleMouseEnterUtility() {
    setTextOverUtility("UTILITY VEHICLES");
  }
  function handleMouseLeaveUtility() {
    setTextOverUtility("");
  }

  function handleMouseEnterOther() {
    setTextOverOther("OTHER");
  }
  function handleMouseLeaveOther() {
    setTextOverOther("");
  }

  console.log(textOverCar);

  return (
    <div className="vehiTypeBtnSet">
      <Link to={"/type/CAR"}>
        <button
          type="submit"
          className="BtnVehiType car"
          onMouseEnter={handleMouseEnterCar}
          onMouseLeave={handleMouseLeaveCar}
        >
          <h1 className="ChamobtnText">{textOverCar}</h1>
        </button>
      </Link>
      <Link to={"/type/BIKE"}>
        <button
          type="submit"
          className="BtnVehiType bike"
          onMouseEnter={handleMouseEnterBike}
          onMouseLeave={handleMouseLeaveBike}
        >
          <h1 className="ChamobtnText">{textOverBike}</h1>
        </button>
      </Link>
      <Link to={"/type/THREE WHEEL"}>
        <button
          type="submit"
          className="BtnVehiType wheel"
          onMouseEnter={handleMouseEnterWheel}
          onMouseLeave={handleMouseLeaveWheel}
        >
          <h1 className="ChamobtnText">{textOverWheel}</h1>
        </button>
      </Link>
      <Link to={"/type/UTILITY VEHICLES"}>
        <button
          type="submit"
          className="BtnVehiType utility"
          onMouseEnter={handleMouseEnterUtility}
          onMouseLeave={handleMouseLeaveUtility}
        >
          <h1 className="ChamobtnText">{textOverUtility}</h1>
        </button>
      </Link>
      <Link to={"/type/OTHER"}>
        <button
          type="submit"
          className="BtnVehiType other"
          onMouseEnter={handleMouseEnterOther}
          onMouseLeave={handleMouseLeaveOther}
        >
          <h1 className="ChamobtnText">{textOverOther}</h1>
        </button>
      </Link>
    </div>
  );
}

export default M_vehicle_type;
