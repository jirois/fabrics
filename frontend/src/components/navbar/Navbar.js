import React from "react";
import { FaBars } from "react-icons/fa";

function Navbar(props) {
  return (
    <nav id="nav">
      <div class="nav-center">
        <div class="nav-header">
          {/* <img src={} class="logo" alt="logo" /> */}
          <h1>Fabrics</h1>
          <button class="nav-toggle">
            <FaBars />
          </button>
        </div>
        <div class="links-container">
          <ul class="links">
            <li>
              <a href="#home" class="scroll-link">
                home
              </a>
            </li>
            <li>
              <a href="#about" class="scroll-link">
                about
              </a>
            </li>
            <li>
              <a href="#services" class="scroll-link">
                services
              </a>
            </li>
            <li>
              <a href="#tours" class="scroll-link">
                tours
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
