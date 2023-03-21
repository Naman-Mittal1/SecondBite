import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "./navbar.css"

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };
  return (
    <div className="navbar">
      <Link to="/home" className="head-logo">SecondBite</Link>
      <Link to="/">Discounts Available</Link>
      <Link to="/create-recipe">Add a Dish</Link>
      <Link to="/donated-food">Donated Food</Link>
      <Link to="/about-us">About us</Link>
      {/* <Link to="/saved-recipes">Saved Recipes</Link> */}
      {!cookies.access_token ? (
        <Link to="/auth">Login/Register</Link>
      ) : (
        <button onClick={logout} className="nav-button"> Logout </button>
      )}
    </div>
  );
};