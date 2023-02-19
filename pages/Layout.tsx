import React from "react";
import Footer from "../components/reusable/Footer/Footer";
import Navbar from "../components/reusable/NavBar/Navbar";

function Layout(props: { children: any }) {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
