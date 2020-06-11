import React, { useEffect, useContext } from "react";

// NPM Pack Import
import { RiDeleteBin5Line } from "react-icons/ri";

// i18next Multi Language Support
import "../helpers/i18next";
import { useTranslation } from "react-i18next";

// Router Import
import { useHistory } from "react-router-dom";

// Layout Import
import CategoryLayout from "../layouts/CategoryLayout";

// Context
import { GlobalContext } from "../context/GlobalState";

export default function Cart() {
  const {
    movieCart,
    tvshowCart,
    removeFromTVShowCart,
    removeFromMovieCart,
  } = useContext(GlobalContext);

  let history = useHistory();

  // i18next Multi Language Support
  const { t } = useTranslation();

  return (
    <CategoryLayout>
      <h1>{t("mycart")}</h1>
      <h4>{t("movies")}</h4>
      {movieCart &&
        movieCart.map((item) => (
          <div key={item.id} className="card bg-dark mb-4">
            <div className="card-body">
              <img
                style={{
                  float: "left",
                  maxWidth: "10vw",
                  marginRight: 20,
                  borderRadius: 5,
                }}
                src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
              />
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.overview}</p>
              <RiDeleteBin5Line
                size={24}
                role="button"
                onClick={() => removeFromMovieCart(item.id)}
                style={{ position: "absolute", right: 15, top: 15 }}
              />
            </div>
          </div>
        ))}
      <h4>{t("tvshows")}</h4>
      {tvshowCart &&
        tvshowCart.map((item) => (
          <div key={item.id} className="card bg-dark mb-4">
            <div className="card-body">
              <img
                style={{
                  float: "left",
                  maxWidth: "10vw",
                  marginRight: 20,
                  borderRadius: 5,
                }}
                src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
              />
              <h5 className="card-title">{item.original_name}</h5>
              <p className="card-text">{item.overview}</p>
              <RiDeleteBin5Line
                size={24}
                role="button"
                onClick={() => removeFromTVShowCart(item.id)}
                style={{ position: "absolute", right: 15, top: 15 }}
              />
            </div>
          </div>
        ))}
    </CategoryLayout>
  );
}
