import "./app.css";
import Navbar from "./components/navbar/Navbar";
import ScrollToTop from "./components/scroll-top/ScrollToTop";
import Categories from "./components/categories/Categories";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Recommend from "./components/recommend/Recommend";
import Choose from "./components/choose/Choose";
import Products from "./components/products/Products";
import Promo from "./components/promo/Promo";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";
import scrollreveal from "scrollreveal";

export default function App() {
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 1000,
        reset: false
      });
      sr.reveal(
        `
      nav,
      .home,
      .services-container,
      .categories-container,
      .recommend-container,
      .choose-us-container,
      .products-container,
      .promo-container,
      .footer
      `,
        {
          interval: 500
        }
      );
    };
    registerAnimations();
  }, []);

  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].style.transform = "none";
  }, 1500);

  return (
    <div className="app" data-theme={theme}>
      <ScrollToTop />
      <Navbar changeTheme={changeTheme} currentTheme={theme} />
      <Home />
      <Services />
      <Categories />
      <Recommend />
      <Choose />
      <Products />
      <Promo />
      <Footer />
    </div>
  );
}
