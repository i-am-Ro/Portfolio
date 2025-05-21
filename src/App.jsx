import { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [islightmode, setIslightmode] = useState(false);
  return (
    <div
      className={`h-[100vh]  transition-colors ease-linear duration-700 ${
        !islightmode ? "bg-zinc-950" : "bg-white"
      } `}
    >
      <Navbar islightmode={islightmode} setIslightmode={setIslightmode} />
      <Routes>
        <Route path="/" element={<Home islightmode={islightmode} />} />
      </Routes>
    </div>
  );
}

export default App;
