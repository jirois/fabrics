import React from "react";
import {
  FaBars,
  FaCalendar,
  FaCalendarCheck,
  FaCaretDown,
  FaCartPlus,
  FaPersonBooth,
  FaSearch,
  FaSign,
} from "react-icons/fa";
import "./navbar.scss";
function Navbar(props) {
  return (
    <nav id="nav">
      <div class="nav-center">
        <div class="nav-header">
          <div className="heading">
            <div className="logo-heading">
              <button class="nav-toggle">
                <FaBars />
              </button>
              <h1>Fabrics</h1>
              <div className="category-dropdown">
                <span className=" btn btn-primary category-button">
                  categories
                </span>
                <div class="category-content">
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
            </div>
            <div className="heading-btn-container">
              <button className="search-button">
                <FaSearch />
              </button>
              <button className="cart-button">
                <FaCartPlus />
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

        <div className="search-container">
          <button className="search-desktop-button">
            <FaSearch />
          </button>
        </div>
        <div className="users-info-section">
          <button className="signin-button btn">
            LogIn {""}
            <FaSign />
          </button>
          <button className="notification-button">
            <FaCalendar />
          </button>
          <button className="cart-desktop-button">
            <FaCartPlus />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
