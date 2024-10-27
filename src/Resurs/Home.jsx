import "../App.css"; // თქვენი CSS სტილები
import React from "react";
import { Link } from "react-router-dom"; // Link იმპორტირება
import Slideshow from "./Assests/Slideshow";
import Productshome from "./Productshome"; // Productshome-ის იმპორტი
import VisibilityIcon from '@mui/icons-material/Visibility';
import { ButtonGroup, Button } from "@mui/material"; // ButtonGroup და Button იმპორტირება
import ContactForm from "./ContactForm";

const Home = () => {
  return (
    <div className="Home_container">
      <section>
        <Slideshow />
      </section>
      <section className="Card_Container">
        <div className="card_description">
          <h1 className="prod_info" >ჩვენი პროდუქცია</h1>
        </div>
        <div className="cards">
        {Productshome.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`} className="product-link">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="description_container">
                <h2 className="Prodname">{product.name}</h2>
                <div className="button-53" role="button" >
                  <VisibilityIcon style={{ color: '#295995' }} />
                  ინფორმაცაია
                </div>
              </div>
            </Link>
            {/* ღილაკი ButtonGroup-ის გამოყენებით */}
          </div>
        ))}
        </div>
      </section>
      <section className="Butttons_Projects">
            <ButtonGroup >
              <Link to="/team">
                <div className="button-52" role="button" >
                  პროდუქცია
                </div>
              </Link>
            </ButtonGroup>
      </section>
      <section>
        <ContactForm />
      </section>
    </div>
  );
};

export default Home;
