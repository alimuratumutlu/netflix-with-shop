import React from "react";

// NPM Pack Import
import { RiDeleteBin5Line } from "react-icons/ri";

import "./CartItem.css";

export default function CartItem({ id, backdrop_path, title, overview, removeFromCart }) {
  return (
    <div className="card bg-dark mb-4 mt-4">
      <div className="card-body">
        <img
          className="cart-item"
          alt={title}
          src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
        />
        <h5 className="card-title">{title}
          <RiDeleteBin5Line
            size={24}
            role="button"
            onClick={() => removeFromCart(id)}
            className="delete-bin"
            style={{ marginLeft: 10 }}
          /></h5>
        <p className="card-text">{overview}</p>

      </div>
    </div>
  );
}
