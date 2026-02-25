import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { SaaSCaseStudy } from "./pages/SaaSCaseStudy";
import { AICaseStudy } from "./pages/AICaseStudy";
import { DesignSystemCaseStudy } from "./pages/DesignSystemCaseStudy";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies/saas-dashboard" element={<SaaSCaseStudy />} />
        <Route path="/case-studies/ai-spot" element={<AICaseStudy />} />
        <Route path="/case-studies/design-system" element={<DesignSystemCaseStudy />} />
      </Routes>
    </Router>
  );
}
