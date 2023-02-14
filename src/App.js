import "./App.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Movies from "./components/Movies";
import { Row } from "react-bootstrap";

function App() {
  return (
    <Row className="movie-app">
      <>
        <Header />
      </>
      <>
        <Movies />
      </>
      <>
        <Footer />
      </>
    </Row>
  );
}

export default App;
