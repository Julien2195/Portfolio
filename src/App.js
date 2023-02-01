import React, { useState } from "react";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`${darkMode ? "dark-mode" : "light-mode"}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
