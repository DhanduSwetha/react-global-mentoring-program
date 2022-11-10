import React from "react";
import "./styles.css";
import { Dropdown } from "react-dropdown-now";
import "react-dropdown-now/style.css";

const DropDown = () => {
  return (
    <Dropdown
      options={["release date", "movie name"]}
      value="release date"
      onChange={(value) => console.log("change!", value)}
      onSelect={(value) => console.log("selected!", value)}
      onClose={(closedBySelection) =>
        console.log("closedBySelection?:", closedBySelection)
      }
      onOpen={() => console.log("open!")}
    />
  );
};
export default DropDown;
