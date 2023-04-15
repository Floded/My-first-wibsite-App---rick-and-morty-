import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const NavLinkMe = ({ to, children, ...props }) => {
  return (
    <NavLink
      {...props}
      to={to}
      className={({ isActive }) => (isActive ? styles.active : styles.disable)}
      >
        {children}
    </NavLink>
  );
};

export default function Nav(props) {
  return (
    <div className={styles.container}>
      <NavLinkMe to="/home">Home</NavLinkMe>
      <NavLinkMe to="/about">About</NavLinkMe>
      <NavLink to="/favorites">Favorites</NavLink>
      <SearchBar onSearch={(charaterID) => props.onSearch(charaterID)} />
    </div>
  );
}
