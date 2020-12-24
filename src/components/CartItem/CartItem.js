import React from "react";

// NPM Pack Import
import { RiDeleteBin5Line } from "react-icons/ri";

import "./CartItem.css";

export default function CartItem(props) {
  return (
    <div className="card bg-dark mb-4">
      <div className="card-body">
        <img
          className="cart-item"
          alt={props.title}
          src={`https://image.tmdb.org/t/p/original/${props.backdrop_path}`}
        />
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.overview}</p>
        <RiDeleteBin5Line
          size={24}
          role="button"
          onClick={() => props.removeFromCart(props.id)}
          className="delete-bin"
        />
      </div>
    </div>
  );
}
