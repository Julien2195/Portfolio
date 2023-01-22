import React from "react";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import { Routes, Route } from "react-router-dom";
import ParticlesBackground from "./components/ParticlesBackground";

const App = () => {
  return (
    <div>
      <ParticlesBackground />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
