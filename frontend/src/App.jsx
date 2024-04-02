import { useState } from "react";
import logo from "./src/logo/logo.png";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import "./App.css";
import Forecast from "./components/Forecast";
import News from "./components/News";
import Header from "./components/Header";
function App() {
  const [count, setCount] = useState(0);

  return (

      <div className="bg-gradient-to-r from-[#0f172a] to-slate-950 w-full min-h-screen  pt-10">
        
        <Router>
        <Header/>
          <Routes>
          
            <Route path="/" element={<Forecast />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
