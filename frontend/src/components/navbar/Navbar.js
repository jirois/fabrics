import React from "react";
import {
  FaBars,
  FaCalendarCheck,
  FaCartPlus,
  FaPersonBooth,
  FaSearch,
} from "react-icons/fa";
import "./navbar.scss";
function Navbar(props) {
  return (
    <nav id="nav">
      <div class="nav-center">
        <div class="nav-header">
          {/* <img src={} class="logo" alt="logo" /> */}
          <div>
            <div>
              <h1>Fabrics</h1>
              <button class="nav-toggle">
                <FaBars />
              </button>
            </div>
            <div>
              <button className="cart-button">
                <FaCartPlus />
              </button>
              <button className="search-button">
                <FaSearch />
              </button>
            </div>
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

        <div>
          <input type="text" />
        </div>
        <div className="users-info-section">
          <button>
            <FaPersonBooth />
          </button>
          <button>
            <FaCalendarCheck />
          </button>
          <button>
            <FaCartPlus />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
