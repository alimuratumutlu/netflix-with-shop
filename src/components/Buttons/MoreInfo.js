import React from "react";

// React Icon Import
import { MdMovie } from "react-icons/md";

// i18next Multi Language Support
import "../../helpers/i18next";
import { useTranslation } from "react-i18next";

export default function MoreInfo({ id, type, handleItemClick }) {
  // i18next Multi Language Support
  const { t } = useTranslation();

  return (
    <button
      onClick={() => handleItemClick(`/${type}/${id}`)}
      type="button"
      className="btn btn-secondary btn-lg mr-2 mt-4"
    >
      <MdMovie size={28} /> {t("getmoreinfo")}
    </button>
  );
}
