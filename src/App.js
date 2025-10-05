import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import SoundAnalysisPage from "./components/SoundAnalysisPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/analyze/:soundName" element={<SoundAnalysisPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
