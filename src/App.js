import React from "react";
import "./App.css";
import ContactUs from "./Components/Pages/contact-us/ContactUs";
import JazanRegion from "./Components/Pages/Jizan-region/JazanRegion";
import Navbar from "./Components/Pages/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/jazan_region" element={<JazanRegion />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </div>
  );
};

export default App;
