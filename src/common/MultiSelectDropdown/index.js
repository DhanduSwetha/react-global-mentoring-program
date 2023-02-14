import React, { useState } from "react";
import "./styles.css";

const MultiSelectDropDown = (props) => {
  const [checked, setChecked] = useState([]);
  const handleClick = () => {
    var checkList = document.getElementById("list1");
    checkList.getElementsByClassName("anchor")[0];
    if (checkList.classList.contains("visible"))
      checkList.classList.remove("visible");
    else checkList.classList.add("visible");
  };
  // Add/Remove checked item from list
  const handleCheck = (event) => {
    let updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  return (
    <div id="list1" className="dropdown-check-list" tabIndex="100">
      <span className="anchor" onClick={handleClick}>
        Select Genre
      </span>
      <ul className="items">
        {props.options.map((item, index) => (
          <div key={index}>
            <li>
              <input
                value={item.value}
                type="checkbox"
                onChange={handleCheck}
              />
              <span className={isChecked(item)}>{item.value}</span>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default MultiSelectDropDown;
