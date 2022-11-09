import React from "react";
import { useState } from "react";
import "./styles.css";
//import { React, useState } from "react";
// import { Row, Col } from 'react-bootstrap';
// import './styles.css';

// const Movies = () => {

//     return (
//         <Row className="movies-content">
//             <Row>

//             </Row>

//         </Row>
//     )
// }
// export default Movies

//Example component for React.createElement
const Example = () => {
  const [num, setNum] = useState(0);

  const handleIncrement = () => {
    setNum(num + 1);
  };

  const handleDecrement = () => {
    setNum(num - 1);
  };

  return React.createElement(
    "div",
    { style: { height: "calc(57vh)" } },
    React.createElement("p", { style: { paddingLeft: "80px" } }, num),
    React.createElement(
      "button",
      { className: "increment", onClick: handleIncrement },
      "Increment"
    ),
    React.createElement(
      "button",
      { className: "decrement", onClick: handleDecrement },
      "Decrement"
    )
  );
};
export default Example;
