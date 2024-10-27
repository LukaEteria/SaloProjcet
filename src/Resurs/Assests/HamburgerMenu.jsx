import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HamburgerMenu.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="hamburger" onClick={toggleMenu}>
        &#9776; {/* ჰამბურგერის ღილაკის სიმბოლო */}
      </button>
      <nav className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>
              მთავარი
            </Link>
          </li>
          <li>
            <Link to="/about-us" onClick={toggleMenu}>
              ჩვენს შესახებ
            </Link>
          </li>
          <li>
            <Link to="/team" onClick={toggleMenu}>
              პროდუქტები
            </Link>
          </li>
          <li>
            <Link to="/blog" onClick={toggleMenu}>
              ბლოგი
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HamburgerMenu;
