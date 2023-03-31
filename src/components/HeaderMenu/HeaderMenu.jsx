import "./index.scss";
import logo from "../../assets/logo-dnc.png";
import cartLogo from "../../assets/cart-shop.png";
import Search from "../Search/Search";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
  return (
    <header className="header__menu">
      <div className="header__menu-logo">
        <img src={logo} alt="logo" className="header-menu__logo"/>
        <Search />
        <img src={cartLogo} alt="cartLogo"  className="header-menu__cart"/>
      </div>

      <div className="header__menu-options">
      <ul>
        <li><strong>Novidades</strong></li>
        <li>Jogos</li>
        <li>Video Games</li>
        <li>Mesas Gamer</li>
        <li>Promoções</li>
        <li>Atendimento</li>
      </ul>
      </div>
    </header>
  );
};

export default HeaderMenu;