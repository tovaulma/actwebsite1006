import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navbar,
  Home,
  Blog,
  Team,
  Careers,
  Footer,
  SinglePost
} from "./components";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router className="overflow-hidden">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Blog/:slug" element={<SinglePost />} />
      <Route path="/Team" element={<Team />} />
      <Route path="/Careers" element={<Careers />} />
    </Routes>
  </Router>
);