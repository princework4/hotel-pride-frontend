import React from "react";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import "./Header.css";

const Header = () => {
    return <section className="header">
        <Navbar />
        <section className="search">
            <div className="wrapper">
                <Search />
            </div>
        </section>

    </section>
}
export default Header