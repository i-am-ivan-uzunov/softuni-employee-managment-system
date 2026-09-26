import { useState } from "react";
import "./styles.css";
import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Main />
      <button className="btn-add btn">Add new user</button>
      <Footer />
    </>
  );
}

export default App;
