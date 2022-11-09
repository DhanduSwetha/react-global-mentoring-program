import React from "react";
import { Row } from "react-bootstrap";
import "./styles.css";

class FormInput extends React.PureComponent {
  render() {
    const { value, id, handleChange, placeholder } = this.props;

    return (
      <Row className="inputWrapper">
        <input
          className="input-field"
          value={value}
          id={id}
          onChange={handleChange}
          placeholder={placeholder}
          // onBlur={}
          required
        />
        {/* {isErrorVisible && (
            <ErrorMessage
              errorMessage={errorMessage}
            />
          )}  */}
      </Row>
    );
  }
}
export default FormInput;
