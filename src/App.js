import React from "react";
import "./App.css";
import ContactUs from "./Components/Pages/contact-us/ContactUs";
import JazanRegion from "./Components/Pages/Jizan-region/JazanRegion";
import Navbar from "./Components/Pages/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import JazanSidebar from "./Components/Pages/jazancomponents/JazanSidebar";
import MunicipalitiesSidebar from "./Components/Pages/jazancomponents/MunicipalitiesSidebar";
import Provinces from "./Components/Pages/jazancomponents/Provinces";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/jazan_region" element={<JazanRegion />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/jazan" element={<JazanSidebar />} />
        <Route path="/jazanMunici" element={<MunicipalitiesSidebar />} />
        <Route path="/provinces" element={<Provinces />} />
      </Routes>
    </div>
  );
};

export default App;
