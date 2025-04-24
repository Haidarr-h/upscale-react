import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Features from "./components/Features";
import Partners from "./components/Partners";
import Konten from "./components/Konten";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
      <Partners></Partners>
      <Konten></Konten>
      
      <h1 className="bg-red-500 text-white p-4 text-2xl">
        Tailwind is working!
      </h1>
      <h1 className="bg-blue-500 text-white p-4 text-2xl">
        Tailwind is working!
      </h1>
    </>
  );
}

export default App;
