import React from "react";
import Header from "../../Components/Header/Header";
import { Outlet, useLocation } from "react-router";
import Footer from "../../Components/Footer/Footer";
import { Slider } from "../../Components/Slider/Slider";
import { Typewriter } from "react-simple-typewriter";
import WhyHobbyHub from "../../Components/WhyHobbyHub/WhyHobbyHub";
import FeaturedGroup from "../../Components/FeaturedGroup/FeaturedGroup";

const MainLayout = () => {
  const location = useLocation();
  return (
    <>
      <div className="min-h-screen lg:justify-between  flex flex-col w-11/12 mx-auto">
        <Header></Header>
        {
          location.pathname === "/" && <Slider></Slider>
        }
        <Outlet></Outlet>
        {
          location.pathname === "/" && <FeaturedGroup></FeaturedGroup>
        }
        {
          location.pathname === "/" && <WhyHobbyHub></WhyHobbyHub>
        }
        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayout;
