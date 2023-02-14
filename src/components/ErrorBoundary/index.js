import React from "react";
import { Row } from "react-bootstrap";
import "./styles.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <Row className="error-boundary-wrapper">
          <div className="error">
            <h1>Aaaah! Something went wrong.</h1>
            <p>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </p>
          </div>
        </Row>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
