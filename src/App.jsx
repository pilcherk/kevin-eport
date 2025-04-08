import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import LeadershipStyles from "./pages/LeadershipStyles";
import LeadershipTraining from "./pages/LeadershipTraining";
import Motivation from "./pages/Motivation";
import Contact from "./pages/Contact";
import MotivationSWOT from "./pages/MotivationSWOT"; // ✅ Updated import

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leadership-styles" element={<LeadershipStyles />} />
        <Route path="/leadership-training" element={<LeadershipTraining />} />
        <Route path="/motivation" element={<Motivation />} />
        <Route path="/motivation-swot" element={<MotivationSWOT />} /> {/* ✅ Updated route */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
