import React from "react";
import Header from "./Header";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";

const PageLayout = () => {
  const navigate = useNavigation();
  console.log(navigate);
  if (navigate.state === "Loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default PageLayout;
