import React, { useEffect, useContext } from "react";

//Component Import
import CartItem from "../components/CartItem";

// i18next Multi Language Support
import { useTranslation } from "react-i18next";
import "../helpers/i18next";

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

  // i18next Multi Language Support
  const { t } = useTranslation();

  return (
    <CategoryLayout>
      <h1>{t("mycart")}</h1>
      <h4>{t("movies")}</h4>
      {movieCart.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          title={item.title}
          backdrop_path={item.backdrop_path}
          overview={item.overview}
          removeFromCart={removeFromMovieCart}
        />
      ))}
      <h4>{t("tvshows")}</h4>
      {tvshowCart.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          title={item.original_name}
          backdrop_path={item.backdrop_path}
          overview={item.overview}
          removeFromCart={removeFromTVShowCart}
        />
      ))}
    </CategoryLayout>
  );
}
