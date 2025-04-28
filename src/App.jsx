import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Features from "./components/Features";
import Partners from "./components/Partners";
import Konten from "./components/Konten";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero></Hero>
      {/* <Features></Features> */}
      <Partners></Partners>
      <Konten></Konten>
      <Footer></Footer>
    </>
  );
}

export default App;
