import React from "react";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import "./Header.css";
import "../../../src/typography.css";

const Header = () => {
    return <section className="header">
        <Navbar />
        <Search />
    </section>
}
export default Header