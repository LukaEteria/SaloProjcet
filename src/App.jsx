import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Resurs/Home";
import AboutUs from "./Resurs/AboutUs";
import Team from "./Resurs/Team";
import Blog from "./Resurs/Blog";
import "./App.css";
import Footer from "./Resurs/Footer";
import HamburgerMenu from "./Resurs/Assests/HamburgerMenu";
import ProductDetail from "./Resurs/Assests/ProductDetail";
import SearchProducts from "./Resurs/Assests/SearchProducts";


function App() {
  return (
    <div className="allcontainer">
    
      <Router>
        <div className="the-header">
          <div className="contact-info-left">
            <p>+995599991000</p>
            <br/>
            <p>Salocompany@gmail.com</p>
          </div>
        
          <div className="contact-info-right">
          <SearchProducts />
          </div>
        </div>
        <HamburgerMenu />
        <div style={{ backgroundColor: 'yellow', width:'100%', height:'20px', display:'flex', justifyContent:"center" }} className="satesto">
  საიტი მუშაობს სატესტო რეჟიმში მიმდინარეობს ნფორამციას ეტაპობრივი განახლება
</div>
        
        <div className="header navigation logo">
          <div className="image-container">
            <a href="/">
              <img
                src="https://i.ibb.co/WVdNRxm/social-removebg-preview.png"
                alt="social"
              />
            </a>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">მთავარი</Link>
              </li>
              <li>
                <Link to="/about-us">ჩვენს შესახებ</Link>
              </li>
              <li>
                <Link to="/team">პროდუქტები</Link>
              </li>
              <li>
                <Link to="/blog">ბლოგი</Link>
              </li>
            </ul>
          </nav>
        </div>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
      <Footer />
    </div>

  );
}

export default App;
