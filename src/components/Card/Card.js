import React from "react";

import "./Card.css";

export default function Card({ id, title, type, posterpath, handleItemClick }) {
  return (
    <div
      role="button"
      onClick={() => handleItemClick(`/${type}/${id}`)}
      key={title}
      className="item-card text-dark"
    >
      <img
        className="item-poster"
        alt={title}
        src={`https://image.tmdb.org/t/p/original/${posterpath}`}
      />
    </div>
  );
}
