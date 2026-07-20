import "./App.css";

import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import heroImg from "./assets/hero.png";

function App() {
const handleGetStarted = () => {
document.getElementById("products").scrollIntoView({
behavior: "smooth",
});
};

return (
<>
{/* Landing Page */} <section id="center" className="landing-page"> <div className="hero"> <img
         src={heroImg}
         className="base"
         width="170"
         height="179"
         alt="Paradise Nursery"
       /> </div>

```
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

  {/* About Us */}
  <section id="about">
    <AboutUs />
  </section>

  {/* Product Listing */}
  <section id="products">
    <ProductList />
  </section>

  {/* Shopping Cart */}
  <section id="cart">
    <CartItem />
  </section>
</>
```

);
}

export default App;
