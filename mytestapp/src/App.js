// App.js
import React from "react";
import "./App.css";
import './index.css';
import Header from "./components/Header";
import Usecases from "./components/Usecases";
import Form from "./components/Form";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Usecases />
      <Form />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
