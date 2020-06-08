import React, { useContext } from "react";
import PropTypes from "prop-types";

import { RiShoppingCart2Line } from "react-icons/ri";

// i18next Multi Language Support
import "../../helpers/i18next";
import { useTranslation } from "react-i18next";

// CSS Import
import "./Navbar.css";

// Service Import
import authService from "../../services/auth.service";

// Context
import { GlobalContext } from "../../context/GlobalState";

import { useHistory } from "react-router-dom";

function Navbar(props) {
  let history = useHistory();

  // i18next Multi Language Support
  const { t, i18n } = useTranslation();

  // Fetch From Context
  const { tvshowCart, movieCart } = useContext(GlobalContext);

  const handleItemClick = (path) => {
    history.push(path);
  };

  const handleLogout = () => {
    authService.logout();
    window.location.replace("/login");
  };

  const Routes = [
    {
      name: `${t("tvshows")}`,
      link: "/tv-shows",
    },
    {
      name: `${t("movies")}`,
      link: "/movies",
    },
    {
      name: `${t("kids")}`,
      link: "/kids",
    },
  ];

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-black fixed-top"
      style={{
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <a
        role="button"
        onClick={() => handleItemClick("/home")}
        className="navbar-brand"
      >
        <img
          src={`http://${window.location.host}/${t("logo")}.png`}
          height="40"
          alt="logo"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto float-right"></ul>
        <ul className="nav navbar-nav navbar-right">
          {Routes.map((item) => (
            <li key={item.name} className="nav-item mx-2">
              <a
                role="button"
                className="nav-link"
                onClick={() => handleItemClick(item.link)}
              >
                {item.name}
              </a>
            </li>
          ))}

          <li className="nav-item mx-2">
            <a
              role="button"
              className="nav-link"
              onClick={() => handleItemClick("/cart")}
            >
              <RiShoppingCart2Line size={28} />
              <span className="badge badge-danger badge-pill">
                {tvshowCart.length + movieCart.length}
              </span>
            </a>
          </li>

          <li>
            <a
              className="nav-link"
              onClick={() => i18n.changeLanguage("tr")}
              role="button"
            >
              TR
            </a>
          </li>
          <li>
            <a className="nav-link"> {" | "}</a>
          </li>
          <li>
            <a
              className="nav-link"
              onClick={() => i18n.changeLanguage("en")}
              role="button"
            >
              EN
            </a>
          </li>
          <li>
            <div className="btn-group ml-3">
              <img
                alt="Profile "
                style={{
                  maxWidth: 36,
                  paddingTop: 4,
                }}
                className="rounded-circle dropdown-toggle"
                src="https://avatars0.githubusercontent.com/u/6642361?s=460&u=68c1320d7a8a1f34da9c00eddf0ac60d51ba9c49&v=4"
                data-holder-rendered="true"
                role="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              />
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="/my-profile">
                  {t("myprofile")}
                </a>
                <a className="dropdown-item" href="/settings">
                  {t("settings")}
                </a>
                <button onClick={handleLogout} className="dropdown-item">
                  {t("logout")}
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

Navbar.propTypes = {
  brandfirst: PropTypes.string,
  brandlast: PropTypes.string,
  navlinks: PropTypes.array,
};
