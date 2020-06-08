import React from "react";

import "./Card.css";

export default function Card({ id, title, posterpath, handleItemClick }) {
  return (
    <div
      role="button"
      onClick={() => handleItemClick(`/detail/${id}`)}
      key={title}
      className="item-card text-dark"
    >
      <img
        className="item-poster"
        src={`https://image.tmdb.org/t/p/original/${posterpath}`}
      />
    </div>
  );
}
