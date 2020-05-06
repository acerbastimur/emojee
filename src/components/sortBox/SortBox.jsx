import React, { Component } from "react";
import "./sortBox.css";
import { inject, observer } from "mobx-react";
import { PRODUCT_SORT_TYPES } from "../../constants";

class SortBox extends Component {
  onValueChange = (value) => {
    const {
      CardStore: { setProductSort },
    } = this.props;
    
    setProductSort({ sortType: PRODUCT_SORT_TYPES[value] }); // using Object Literal on value change
  };

  render() {
    return (
      <div className="dropdown">
        <select
          onChange={({ target: { value } }) => this.onValueChange(value)}
          name="Sort"
          className="dropdown-select"
        >
          <option value="NONE" defaultValue>
            Select…
          </option>
          <option value="SIZE">Size</option>
          <option value="PRICE">Price</option>
          <option value="ID">Id</option>
        </select>
      </div>
    );
  }
}

export default inject("CardStore")(observer(SortBox));
