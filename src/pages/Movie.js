import React, { useEffect, useContext } from "react";

import { isMobile } from 'react-device-detect';

// React Icon Import
import { AiOutlineStar } from "react-icons/ai";

// Carousel Import
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

// i18next Multi Language Support
import "../helpers/i18next";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

// Component Import
import Card from "../components/Card/Card";
import Jumbutron from "../components/Jumbutron";
import AddToCart from "../components/Buttons/AddToCart";

// Layout Import
import DetailLayout from "../layouts/DetailLayout";

// Context
import { GlobalContext } from "../context/GlobalState";

function Movie({ match, location }) {

  let navigate = useNavigate();
  let params = useParams();

  // i18next Multi Language Support
  const { t } = useTranslation();

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
    navigate(path);
  };

  useEffect(() => {
    getCurrentMovie(params.id);
    getCurrentGenres(params.id);
    getSimilarMovies(params.id);
    checkMovieCart();
  }, [params.id]);

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
                src={`https://image.tmdb.org/t/p/w500/${currentMovie.poster_path}`}
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
              {currentGenres?.map((genre) => (
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
      <Carousel
        draggable={true}
        offset={5}
        animationSpeed={30}
        plugins={[
          'infinite',
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 9,
            },
          },
        ]}
        breakpoints={{
          640: {
            plugins: [
              'infinite',
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 3
                }
              },
            ]
          },
          900: {
            plugins: [
              'infinite',
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 7
                }
              },
            ]
          }
        }}
      >
        {similarMovies?.map((item) => (
          <Card
            key={item.id}
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
