import React from "react";
import "./sortBox.css";

const SortBox = () => {
  return (
    <div className="dropdown">
    <select  name="one" className="dropdown-select">
      <option value="0">Select…</option>
      <option value="1">Size</option>
      <option value="2">Price</option>
      <option value="3">Id</option>
    </select>
  </div> 
 
  );
};

export default SortBox;
