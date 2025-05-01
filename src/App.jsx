import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Home from "./pages/HomePage";
import ForBusiness from "./pages/ForBusiness";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/for-business" element={<ForBusiness></ForBusiness>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
