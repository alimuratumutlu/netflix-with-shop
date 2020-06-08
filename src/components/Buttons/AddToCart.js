import React from "react";

// React Icon Import
import { RiShoppingCart2Line } from "react-icons/ri";

// i18next Multi Language Support
import "../../helpers/i18next";
import { useTranslation } from "react-i18next";

export default function AddToCart({
  item,
  popularity,
  isDisabled,
  handleAddToCart,
}) {
  // i18next Multi Language Support
  const { t } = useTranslation();

  return (
    <button
      onClick={() => handleAddToCart(item)}
      type="button"
      className={`btn btn-success btn-lg ml-2 mt-4 ${
        isDisabled ? "disabled" : null
      }`}
    >
      <RiShoppingCart2Line size={28} /> {t("addtocart")} (
      {(popularity / 20).toFixed(2)} $)
    </button>
  );
}
