import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Home from "./pages/HomePage";
import ForBusiness from "./pages/ForBusiness";
import ForTalent from "./pages/ForTalent";
import Jobs from "./pages/Jobs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* // <Router> */}
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/for-business"
          element={<ForBusiness></ForBusiness>}
        ></Route>
        <Route path="/for-talent" element={<ForTalent></ForTalent>}></Route>
        <Route path="/jobs" element={<Jobs></Jobs>}></Route>
      </Routes>
      <Footer></Footer>
      {/* // </Router> */}
    </>
  );
}

export default App;
