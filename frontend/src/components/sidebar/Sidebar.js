import React, { useEffect } from "react";
import { aside_items } from "../../data";
import "./sidebar.scss";

function Sidebar({ closeSidebar, isSidebar }) {
  console.log(isSidebar);
  return (
    <aside className={`${isSidebar} ? 'sidebars show-sidebar' : 'sidebars'`}>
      <header>
        <i className="fa-fa-icon"></i>
        <h4>Hello, Sign In</h4>
        <button type="button" onClick={closeSidebar}>
          close
        </button>
      </header>
    </aside>
  );
}

export default Sidebar;
