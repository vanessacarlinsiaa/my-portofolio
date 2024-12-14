import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

const Navbar = () => {

    const [Mobile, setMobile] = useState(false)

  return (
    <nav className="navbar">
      
      <h3 className="logo">VC</h3>

        <ul className= {Mobile? "nav-links-mobile" : "nav-links"} onClick={()=> setMobile(false)}>
          <li>
            <Link to="/about">About me</Link>
          </li>
          <li>
            <Link to="/prjct">Project</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
            {Mobile? <ImCross/> : <FaBars/>}
        </button>
    </nav>
  );
};

export default Navbar;
