// 📁 src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import LeadershipStyles from "./pages/LeadershipStyles";
import LeadershipTraining from "./pages/LeadershipTraining";
import StrategicPlanning from "./pages/StrategicPlanning";
import Motivation from "./pages/Motivation";
import Contact from "./pages/Contact";
import './styles/global.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leadership-styles" element={<LeadershipStyles />} />
          <Route path="/leadership-training" element={<LeadershipTraining />} />
          <Route path="/strategic-planning" element={<StrategicPlanning />} />
          <Route path="/motivation" element={<Motivation />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
