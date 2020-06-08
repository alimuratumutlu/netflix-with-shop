import React, { useEffect, useState, useContext } from "react";

// NPM Pack Import
import { AiOutlineStar } from "react-icons/ai";
import { RiShoppingCart2Line } from "react-icons/ri";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

// i18next Multi Language Support
import "../helpers/i18next";
import { useTranslation } from "react-i18next";

// Component Import
import Card from "../components/Card/Card";
import Jumbutron from "../components/Jumbutron";

// Layout Import
import HomeLayout from "../layouts/HomeLayout";

// Context
import { GlobalContext } from "../context/GlobalState";

import { useHistory } from "react-router-dom";

function Home(props) {
  let history = useHistory();

  // i18next Multi Language Support
  const { t, i18n } = useTranslation();

  const {
    cart,
    removeFromCart,
    addToCart,
    trendingMovies,
    trendingTVShows,
    fetchTrendingMovies,
    fetchTrendingTVShows,
    fetchTrendingPerson,
  } = useContext(GlobalContext);

  const handleItemClick = (path) => {
    history.push(path);
  };

  useEffect(() => {
    fetchTrendingMovies();
    fetchTrendingTVShows();
    fetchTrendingPerson();
  }, []);

  return (
    <HomeLayout>
      <Jumbutron>
        <Carousel
          autoPlay={5000}
          animationSpeed={2000}
          keepDirectionWhenDragging
        >
          {trendingMovies &&
            trendingMovies.map((item) => (
              <div
                key={item.id}
                className="text-white"
                style={{ width: "80vw" }}
              >
                <img
                  style={{
                    float: "left",
                    maxWidth: "20vw",
                    marginRight: 40,
                    borderRadius: 15,
                  }}
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                />
                <h1
                  style={{
                    fontSize: "4em",
                    fontWeight: "bold",
                  }}
                >
                  {item.title}
                </h1>
                <button
                  type="button"
                  className="btn btn-outline-warning btn-lg my-3"
                >
                  <AiOutlineStar /> IMDB {item.vote_average}
                </button>
                <h3>{item.overview}</h3>
                <button
                  onClick={() => addToCart(item.id)}
                  type="button"
                  className="btn btn-success btn-lg ml-2 mt-4"
                >
                  <RiShoppingCart2Line size={28} /> {t("addtocart")} (
                  {(item.popularity / 20).toFixed(2)} $)
                </button>
              </div>
            ))}
        </Carousel>
      </Jumbutron>
      <h4 className="text-white pl-2 pt-4">
        {t("trending")} {t("movies")}
      </h4>
      <Carousel slidesPerPage={9} infinite keepDirectionWhenDragging>
        {trendingMovies &&
          trendingMovies.map((item) => (
            <Card
              id={item.id}
              title={item.title}
              posterpath={item.poster_path}
              handleItemClick={handleItemClick}
            />
          ))}
      </Carousel>

      <h4 className="text-white pl-2 pt-4">
        {t("trending")} {t("tvshows")}
      </h4>
      <Carousel slidesPerPage={9} infinite keepDirectionWhenDragging>
        {trendingTVShows &&
          trendingTVShows.map((item) => (
            <Card
              id={item.id}
              title={item.title}
              posterpath={item.poster_path}
              handleItemClick={handleItemClick}
            />
          ))}
      </Carousel>
    </HomeLayout>
  );
}

export default Home;
