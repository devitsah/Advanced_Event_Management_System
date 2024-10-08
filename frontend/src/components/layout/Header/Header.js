import React from "react";
import { ReactNavbar } from "overlay-navbar"; // Ensure that this import is correct

import logo from "../../../images/logo.png";
import {MdAccountCircle } from "react-icons/md";
import {MdSearch } from "react-icons/md";

import { MdEventAvailable } from "react-icons/md";



const Header = () => {
  return (
    <ReactNavbar
      burgerColorHover="#eb4034"
      logo={logo}
      logoWidth="20vmax"
      navColor1="white"
      logoHoverSize="10px"
      logoHoverColor="#eb4034"
      link1Text="Home"
      link2Text="Events"
      link3Text="Contact"
      link4Text="About"
      link1Url="/"
      link2Url="/events"
      link3Url="/contact"
      link4Url="/about"
      link1Size="1.3vmax"
      link1Color="rgba(35, 35, 35,0.8)"
      nav1justifyContent="flex-end"
      nav2justifyContent="flex-end"
      nav3justifyContent="flex-start"
      nav4justifyContent="flex-start"
      link1ColorHover="#eb4034"
      link1Margin="1vmax"
      
      profileIcon={true}
       ProfileIconElement={MdAccountCircle}
       searchIcon={true}
       SearchIconElement={MdSearch}
       cartIcon={true}
       CartIconElement={MdEventAvailable }
      profileIconUrl="/login"
      profileIconColor="rgba(35, 35, 35,0.8)"
      searchIconColor="rgba(35, 35, 35,0.8)"
      cartIconColor="rgba(35, 35, 35,0.8)"
      profileIconColorHover="#eb4034"
      searchIconColorHover="#eb4034"
      cartIconColorHover="#eb4034"
      cartIconMargin="1vmax"
    />
  );
};

export default Header;
