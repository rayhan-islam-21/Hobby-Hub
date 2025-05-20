import React from "react";
import Header from "../../Components/Header/Header";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <div
        className="min-h-screen">
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
