import "./App.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Movies from "./components/Movies";

function App() {
  return (
    <div>
      <Header />
      <Movies />
      <Footer />
    </div>
  );
}

export default App;
