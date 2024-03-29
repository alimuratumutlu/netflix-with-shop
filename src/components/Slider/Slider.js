import React from "react";

// React Icon Import
import { AiOutlineStar } from "react-icons/ai";

// Carousel Import
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// Component Import
import Jumbutron from "../Jumbutron";
import AddToCart from "../Buttons/AddToCart";
import MoreInfo from "../Buttons/MoreInfo";

import "./Slider.css";

export default function Slider({
  trendingMovies,
  handleAddToCart,
  handleItemClick,
}) {


  return (
    <Jumbutron>
      <Carousel
        showThumbs={false}
        showIndicators={false}
        showArrows={false}
        showStatus={false}
        stopOnHover={true}
        emulateTouch={true}
        autoPlay={true}
        useKeyboardArrows={true}
      >
        {trendingMovies?.map((item) => (
          <div key={item.id} className="text-white" style={{ width: "80vw" }}>
            <img
              style={{
                float: "left",
                maxWidth: "20vw",
                marginRight: 40,
                borderRadius: 15,
              }}
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            />
            <h1
              style={{
                fontSize: "4em",
                fontWeight: "bold",
              }}
            >
              {item.original_title}
            </h1>
            <button
              type="button"
              className="btn btn-outline-warning btn-lg my-3"
            >
              <AiOutlineStar /> IMDB {item.vote_average}
            </button>
            <h3>{item.overview}</h3>
            <MoreInfo
              id={item.id}
              type="movie"
              title={item.title}
              handleItemClick={handleItemClick}
            />
            <AddToCart
              id={item.id}
              type="movie"
              name={item.original_title}
              item={item}
              popularity={item.popularity}
              handleAddToCart={handleAddToCart}
            />
          </div>
        ))}
      </Carousel>
    </Jumbutron>
  );
}
