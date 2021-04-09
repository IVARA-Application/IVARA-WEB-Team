import React from "react";
import { elastic as Menu } from "react-burger-menu";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Menu>
        <a className="menu-item" href="/login">
          Login
        </a>

        <a className="menu-item" href="/">
          HealMyMind
        </a>

        <a className="menu-item" href="/">
          MentorBaba
        </a>
      </Menu>
    </header>
  );
};

export default Header;
