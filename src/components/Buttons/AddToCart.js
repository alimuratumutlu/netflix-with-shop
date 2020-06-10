import React, { useEffect, useContext, useState } from "react";

// React Icon Import
import { RiShoppingCart2Line } from "react-icons/ri";

// i18next Multi Language Support
import "../../helpers/i18next";
import { useTranslation } from "react-i18next";

// Context
import { GlobalContext } from "../../context/GlobalState";

export default function AddToCart({
  item,
  name,
  type,
  popularity,
  handleAddToCart,
}) {
  const [isDisabled, setIsDisabled] = useState(false);
  // i18next Multi Language Support
  const { t } = useTranslation();

  const clickAddToCart = (type, item, name) => {
    if (type == "movie") {
      const found = JSON.parse(localStorage.getItem("movieCart")).some(
        (item) => item.original_title === name
      );
      if (!found) {
        handleAddToCart(item);
      } else {
        setIsDisabled(true);
      }
    } else if (type == "tvshow") {
      const found = JSON.parse(localStorage.getItem("tvShowCart")).some(
        (item) => item.original_name === name
      );
      if (!found) {
        handleAddToCart(item);
      } else {
        setIsDisabled(true);
      }
    }
  };

  return (
    <button
      onClick={() => clickAddToCart(type, item, name)}
      type="button"
      className={`btn btn-success btn-lg mt-4 ${
        isDisabled ? "disabled" : null
      }`}
    >
      <RiShoppingCart2Line size={28} /> {t("addtocart")} (
      {(popularity / 20).toFixed(2)} $)
    </button>
  );
}
