import React from "react";
import Footer from "../components/reusable/Footer/Footer";
import Navbar from "../components/reusable/NavBar/Navbar";

function Layout(props: { children: any }) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
