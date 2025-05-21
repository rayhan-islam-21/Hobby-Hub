import React from "react";
import Header from "../../Components/Header/Header";
import { Outlet } from "react-router";
import Footer from "../../Components/Footer/Footer";

const AuthLayout = () => {
  return (
    <div className="min-h-screen lg:gap-12  lg:justify-between flex flex-col w-11/12 mx-auto">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default AuthLayout;
