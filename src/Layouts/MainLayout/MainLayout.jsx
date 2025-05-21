import React from "react";
import Header from "../../Components/Header/Header";
import { Outlet } from "react-router";
import Footer from "../../Components/Footer/Footer";
import { Slider } from "../../Components/Slider/Slider";
import { Typewriter } from "react-simple-typewriter";

const MainLayout = () => {
  return (
    <>
      <div className="min-h-screen lg:justify-between flex flex-col w-11/12 mx-auto">
        <Header></Header>
        <Slider></Slider>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayout;
