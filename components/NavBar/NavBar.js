import React, { useState } from "react";
import NavbarMeniu from "./NavbarMeniu";

export default function NavBar(props) {
  const [openMenu, setOpenMenu] = useState(false);

  function toggleMenu(e) {
    // console.log(e);
    e === "menu_btn" ? setOpenMenu(true) : setOpenMenu(!openMenu);
  }

  return (
    <nav className="navBar_wrapper">
      <ul className="navBar_mobile_menu ">
        <li id="navBar_mobile_menu-btn" className={openMenu ? "m-fadeOut" : ""}>
          <span onClick={() => toggleMenu("menu_btn")}>
            MENU <i className="hand fas fa-hand-point-left" />
          </span>
        </li>
        <ul
          className={
            openMenu
              ? "navBar_mobile_hidden_menu"
              : "navBar_mobile_hidden_menu m-fadeOut"
          }
        >
          <NavbarMeniu tab={props.tab} />
          <li className="pointerCursor" onClick={() => toggleMenu("")}>
            <i className="fas fa-long-arrow-alt-left" /> Back
          </li>
        </ul>
      </ul>
      <ul className="navBar_desktop_menu">
        <NavbarMeniu tab={props.tab} />
      </ul>
      <div />
    </nav>
  );
}
