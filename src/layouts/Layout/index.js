import React from "react";
import Header from "../Header/index";
import DefaultLayout from "../Container/index";

const Layout = (props) => {
  return (
    <div className="container-scroller"> 
      <Header></Header>
      <DefaultLayout></DefaultLayout>
    </div>
  );
};

export default Layout;
