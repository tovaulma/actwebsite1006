import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navbar,
  Home,
  News,
  Team,
  Careers,
  Footer,
} from "./components";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router className="overflow-hidden">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/News" element={<News />} />
      <Route path="/Team" element={<Team />} />
      <Route path="/Careers" element={<Careers />} />
    </Routes>
  </Router>
);