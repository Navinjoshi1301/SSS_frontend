import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import HomeScreen from "./Pages/HomeScreen";
import Companies from "./Pages/Companies";
import Cards from "./components/Cards/Cards";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import Navbar from "./components/Navbar/Navbar";
import Testimonials from "./Pages/Testimonial";
import About from "./Pages/About/AboutUs";
import ServicesSection from "./Pages/ServiceSection";
import NavbarService from "./components/Navbar/NavbarServices";
import MainPage from "./components/MainPage";

function App() {
 

  return (
    <>
    <NavbarService/>
      <MainPage/>
    </>
  );
}

export default App;
