import React, { useState, useEffect } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import "./selector.css";
import axios from "axios";

export default function Selector(props) {
  const [spareParts, setSpareParts] = useState([]);

  useEffect(() => {
    function getAllSpareParts() {
      axios.get("http://localhost:3001/SpareParts/all").then((res) => {
        setSpareParts(res.data);
      });
    }
    getAllSpareParts();
  }, []);

  const options = spareParts.map((sp1) => {
    return { id: sp1._id, sName: sp1.sName, price: parseInt(sp1.sPrice) };
  });

  return (
    <div className="sel">
      <Multiselect
        avoidHighlightFirstOption
        placeholder="Select Spare-Parts"
        showArrow
        closeIcon="cancel"
        options={options}
        displayValue="sName"
        onSelect={(e) => props.getValue(e)}
        selectedValues={props.sp}
        onRemove={(e) => props.removeValue(e)}
      />
    </div>
  );
}
