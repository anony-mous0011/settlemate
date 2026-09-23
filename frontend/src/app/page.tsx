import React from "react";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";
import PublicHero from "../components/sections/PublicHero/PublicHero";
import TwoPaths from "../components/sections/TwoPaths/TwoPaths";
import HowItWorks from "../components/sections/HowItWorks/HowItWorks";
import TrustSafety from "../components/sections/TrustSafety/TrustSafety";
import FinalCTA from "../components/sections/FinalCTA/FinalCTA";
import "./page.css";

export default function PublicHomePage() {
  return (
    <div className="page-wrapper">
      <Header />
      <main className="page-main">
        <PublicHero />
        <TwoPaths />
        <HowItWorks />
        <TrustSafety />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
