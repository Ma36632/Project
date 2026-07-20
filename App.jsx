import { useState } from "react";
import "./App.css";

import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import heroImg from "./assets/hero.png";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStarted = () => {
    setShowProductList(true);
  };

  return (
    <>
      <section id="center" className="landing-page">
        <div className="hero">
          <img
            src={heroImg}
            className="base"
            width="170"
            height="179"
            alt="Paradise Nursery"
          />
        </div>

        <div className="landing-content">
          <h1>Paradise Nursery</h1>

          <p>
            Bring nature into your home with beautiful and healthy plants.
          </p>

          <button
            type="button"
            className="get-started"
            onClick={handleGetStarted}
          >
            Get Started
          </button>
        </div>
      </section>

      <section id="about">
        <AboutUs />
      </section>

      {showProductList && (
        <section id="products">
          <ProductList />
        </section>
      )}

      <section id="cart">
        <CartItem />
      </section>
    </>
  );
}

export default App;
