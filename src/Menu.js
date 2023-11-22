import React from "react";
import { Link } from "react-router-dom";

const Menu = () =>{
    return (
        <div className="menu">
            <Link to="/soda">Soda</Link>
            <Link to="/chips">Chips</Link>
            <Link to="/candybar">Candybar</Link>
            <Link to="/apple">Apple</Link>
        </div>
    );
}

export default Menu;