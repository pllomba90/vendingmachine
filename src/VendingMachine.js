import React from "react";
import { BrowserRouter, Link, Routes, Route } 
from "react-router-dom";
import Home from "./Home";
import Soda from "./Soda";
import Chips from "./Chips";
import Apple from "./Apple";
import Candybar from "./Candybar";
import Menu from "./Menu";

const VendingMachine = () => {
    return (
        <div className="background-image">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/soda" element={<Soda />} />
          <Route exact path="/chips" element={<Chips />} />
          <Route exact path="/apple" element={<Apple />} />
          <Route exact path="/candybar" element={<Candybar />} />
        </Routes>
      </BrowserRouter>
    </div>
    )

}

export default VendingMachine;