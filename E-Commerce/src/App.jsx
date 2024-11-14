import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect,useState } from "react";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero"; 
import Products from "./Components/Products/Products";
import TopProducts from "./Components/TopProducts/TopProducts";
import Subscrib from "./Components/Subscribe/Subscrib";
import Testomonials from "./Components/Testomonials/Testomonials";
import Footer from "./Components/Footer/Footer";

function App() {
  const [orderPopup, setOrderPopup ] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init ({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  },[]);
  return (
    <>
      <div className=" dark:bg-gray-900 bg-gray-600 dark:text-white duration-200">
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Hero handleOrderPopup={handleOrderPopup} />
           <Products />
           <TopProducts handleOrderPopup={handleOrderPopup} />
           <Banner/>
           <Subscrib />
           <Testomonials />
           <Footer />
      </div>
    </>
  )
}

export default App