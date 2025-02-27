import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Caterring from "../pages/Catering"
import Decorations from "../pages/Decorations";
import EventNames from "../pages/EventNames";


const AppRoute = () => {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<EventNames />} />
       <Route path="/catering" element={<Caterring />}/>
       <Route path="/Decorations" element={<Decorations />}/>
      
      </Routes>
    </Router>
  );
};

export default AppRoute;
