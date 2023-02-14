import React from "react";
import { Dropdown } from "react-dropdown-now";
import "react-dropdown-now/style.css";

const DropDown = (props) => {
  return (
    <Dropdown
      options={props.options}
      value={props.value}
      // onChange={(e) => props.setValue(e.target.value)}
      // onSelect={(e) => props.setValue(e.target.value)}
      onClose={(closedBySelection) =>
        console.log("closedBySelection?:", closedBySelection)
      }
      onOpen={() => console.log("open!")}
    />
  );
};
export default DropDown;
