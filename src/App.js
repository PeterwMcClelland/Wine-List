import React from "react";
import Header from "./components/Header";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import AddWine from "./components/AddWine";
import Wines from "./components/Wine/Wines";
import About from "./components/About";
import WineDetail from "./components/Wine/WineDetail";

function App() {
  return <React.Fragment>
    <header className="header">
      <Header />
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/add" element={<AddWine />} exact />
        <Route path="/wines" element={<Wines />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/wines/:id" element={<WineDetail/>} exact />
      </Routes>
    </main>

    </React.Fragment>;
  
}

export default App;
