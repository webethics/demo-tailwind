import React from "react";
// components
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const Layout = ({ children }) => {
  return (
    <React.StrictMode>
      <Header />
      <main>{children}</main>
      <Footer />
    </React.StrictMode>
  );
};

export default Layout;
