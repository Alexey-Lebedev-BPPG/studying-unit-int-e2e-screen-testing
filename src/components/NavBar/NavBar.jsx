import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to={"/"} data-testid="main-link">
        MainPage
      </Link>
      <Link to={"/about"} data-testid="about-link">
        AboutPage
      </Link>
      <Link to={"/users"} data-testid="users-link">
        UserPage
      </Link>
    </div>
  );
};

export default NavBar;
