import { useEffect } from "react";
import Aos from "aos";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/UI/Hero";
import Services from "./components/UI/Services";
import Portfolio from "./components/UI/Portfolio";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <Portfolio />
        <Services />
      </main>
      <Footer />
    </>
  )
}

export default App;
