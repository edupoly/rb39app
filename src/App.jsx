import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";



function App() {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>

    </div>
  );
}

export default App;
