import React from "react";
import Navbar from "../Navbar";
import Search from "../Search";
import "./Header.css";

const Header = () => {
  return (
    <section className="header">
      <Navbar />
      <section className="search">
        <div className="wrapper">
          <Search />
        </div>
      </section>
    </section>
  );
};
export default Header;
