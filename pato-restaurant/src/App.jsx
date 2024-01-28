import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import { Route, Routes } from "react-router-dom";
import BannerSection from "./pages/banner";
import AboutSection from "./pages/about";
import MenuPage from "./pages/menu-page";
import HomePage from "../../routing/src/pages/home-page";
import HomePages from "./pages/home-page";
// import AboutSection from "./pages/about";

function App() {
  return (
    <>
      <Header />
      {/* <BannerSection /> */}
      {/* <AboutSection /> */}
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
