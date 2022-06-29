import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/81pXJW9qztL.jpg"
        />

        <div className="home_row">
          <Product
            title="OnePlus Nord CE 2 5G (Bahamas Blue, 8GB RAM, 128GB Storage)"
            image={
              "https://images-eu.ssl-images-amazon.com/images/I/41R9oD3K25L._SX300_SY300_QL70_FMwebp_.jpg"
            }
            price={24999}
            rating={4}
          />
          <Product
            title="HP X1000 Wired USB Mouse with 3 Handy Buttons, Fast-Moving"
            image={
              "https://m.media-amazon.com/images/I/61KSceiLHwL._AC_UY327_FMwebp_QL65_.jpg"
            }
            price={249}
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            title="Intel Core i5-10400F 10th Generation Processor with 12MB Cache Memory 6 Cores 12 Threads "
            image={
              "https://m.media-amazon.com/images/I/6185WYzzvBL._SX425_.jpg"
            }
            price={15000}
            rating={3}
          />
          <Product
            title="Apple iPhone 13 (128GB) - Starlight"
            image={
              "https://m.media-amazon.com/images/I/314Rp+8XKWL._SX342_SY445_.jpg"
            }
            price={70999}
            rating={5}
          />
          <Product
            title="Nike Men's Jordan 1 Retro High Sneaker"
            image={
              "https://m.media-amazon.com/images/I/51R3XUl4LdL._UX695_.jpg"
            }
            price={10000}
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            title="Redgear Shadow Blade Mechanical Keyboard with Drive Customization, Spectrum LED Lights, Media Control Knob and Wrist Support (Black)"
            image={
              "https://m.media-amazon.com/images/I/51LXPQdpvfL._AC_UY327_FMwebp_QL65_.jpg"
            }
            price={1000}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
