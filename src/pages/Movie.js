import React, { useEffect, useState, useContext } from "react";

// React Icon Import
import { AiOutlineStar } from "react-icons/ai";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

// i18next Multi Language Support
import "../helpers/i18next";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

// Component Import
import Card from "../components/Card/Card";
import Jumbutron from "../components/Jumbutron";
import AddToCart from "../components/Buttons/AddToCart";

// Layout Import
import DetailLayout from "../layouts/DetailLayout";

// Context
import { GlobalContext } from "../context/GlobalState";

function Movie({ match, location }) {
  const [isAdded, setisAdded] = useState(false);

  let history = useHistory();

  // i18next Multi Language Support
  const { t, i18n } = useTranslation();

  const {
    movieCart,
    addToMovieCart,
    getCurrentMovie,
    currentMovie,
    getCurrentGenres,
    currentGenres,
    getSimilarMovies,
    similarMovies,
  } = useContext(GlobalContext);

  const checkMovieCart = (id) => {
    movieCart.includes();
  };

  const handleAddToCart = (item) => {
    addToMovieCart(item);
  };

  const handleItemClick = (path) => {
    history.push(path);
  };

  useEffect(() => {
    getCurrentMovie(match.params.id);
    getCurrentGenres(match.params.id);
    getSimilarMovies(match.params.id);
    checkMovieCart();
  }, [match.params.id]);

  return (
    <DetailLayout>
      <Jumbutron>
        {currentMovie && (
          <div key={currentMovie.id}>
            <div className="text-white" style={{ width: "80vw" }}>
              <img
                style={{
                  float: "left",
                  maxWidth: "20vw",
                  marginRight: 40,
                  borderRadius: 15,
                }}
                src={`https://image.tmdb.org/t/p/original/${currentMovie.poster_path}`}
              />
              <h3
                style={{
                  fontSize: "3em",
                  fontWeight: "bold",
                }}
              >
                {currentMovie.title}
              </h3>
              <button
                type="button"
                className="btn btn-outline-warning btn-sm my-3"
              >
                <AiOutlineStar /> IMDB {currentMovie.vote_average}
              </button>
              {currentGenres &&
                currentGenres.map((genre) => (
                  <button
                    id={genre.id}
                    key={genre.id}
                    type="button"
                    className="btn btn-outline-primary btn-sm ml-3 my-3"
                  >
                    {genre.name}
                  </button>
                ))}
              <h3>{currentMovie.overview}</h3>
              <AddToCart
                key={currentMovie.id}
                id={currentMovie.id}
                item={currentMovie}
                type="movie"
                name={currentMovie.original_title}
                popularity={currentMovie.popularity}
                handleAddToCart={handleAddToCart}
              />
            </div>
          </div>
        )}
      </Jumbutron>
      <h4 className="text-white pl-2 pt-4">
        {t("similar")} {t("movies")}
      </h4>
      <Carousel slidesPerPage={9} infinite keepDirectionWhenDragging>
        {similarMovies &&
          similarMovies.map((item) => (
            <Card
              id={item.id}
              title={item.title}
              type="movie"
              posterpath={item.poster_path}
              popularity={item.popularity}
              handleItemClick={handleItemClick}
            />
          ))}
      </Carousel>
    </DetailLayout>
  );
}

export default Movie;
