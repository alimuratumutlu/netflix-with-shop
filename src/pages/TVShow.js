import React, { useEffect, useState, useContext } from "react";

// React Icon Import
import { AiOutlineStar } from "react-icons/ai";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

// i18next Multi Language Support
import "../helpers/i18next";
import { useTranslation } from "react-i18next";

// Router Import
import { useHistory } from "react-router-dom";

// Component Import
import Card from "../components/Card/Card";
import Jumbutron from "../components/Jumbutron";
import AddToCart from "../components/Buttons/AddToCart";

// Layout Import
import DetailLayout from "../layouts/DetailLayout";

// Context
import { GlobalContext } from "../context/GlobalState";

function TVShow({ match, location }) {
  const [isAdded, setisAdded] = useState(false);

  let history = useHistory();

  // i18next Multi Language Support
  const { t, i18n } = useTranslation();

  const {
    tvshowCart,
    addToTVShowCart,
    getCurrentTVShow,
    currentTVShow,
    getCurrentGenres,
    currentGenres,
    getSimilarTVShows,
    similarTVShows,
  } = useContext(GlobalContext);

  const checkTVShowCart = (id) => {
    tvshowCart.includes();
  };

  const handleAddToCart = (item) => {
    addToTVShowCart(item);
  };

  const handleItemClick = (path) => {
    history.push(path);
  };

  useEffect(() => {
    getCurrentTVShow(match.params.id);
    getCurrentGenres(match.params.id);
    getSimilarTVShows(match.params.id);
    checkTVShowCart();
  }, [match.params.id]);

  return (
    <DetailLayout>
      <Jumbutron>
        {currentTVShow && (
          <div key={currentTVShow.id}>
            <div className="text-white" style={{ width: "80vw" }}>
              <img
                style={{
                  float: "left",
                  maxWidth: "20vw",
                  marginRight: 40,
                  borderRadius: 15,
                }}
                src={`https://image.tmdb.org/t/p/original/${currentTVShow.poster_path}`}
              />
              <h3
                style={{
                  fontSize: "3em",
                  fontWeight: "bold",
                }}
              >
                {currentTVShow.original_name}
              </h3>
              <button
                type="button"
                className="btn btn-outline-warning btn-lg my-3"
              >
                <AiOutlineStar /> IMDB {currentTVShow.vote_average}
              </button>
              {currentGenres &&
                currentGenres.map((genre) => (
                  <button
                    key={genre.id}
                    type="button"
                    className="btn btn-outline-secondary btn-lg ml-3 my-3"
                  >
                    {genre.name}
                  </button>
                ))}
              <h3>{currentTVShow.overview}</h3>
              <AddToCart
                key={currentTVShow.id}
                id={currentTVShow.id}
                item={currentTVShow}
                type="tvshow"
                name={currentTVShow.original_name}
                popularity={currentTVShow.popularity}
                handleAddToCart={handleAddToCart}
              />
            </div>
          </div>
        )}
      </Jumbutron>
      <h4 className="text-white pl-2 pt-4">
        {t("similar")} {t("tvshows")}
      </h4>
      <Carousel slidesPerPage={9} infinite keepDirectionWhenDragging>
        {similarTVShows &&
          similarTVShows.map((item) => (
            <Card
              id={item.id}
              title={item.title}
              type="tvshow"
              posterpath={item.poster_path}
              popularity={item.popularity}
              handleItemClick={handleItemClick}
            />
          ))}
      </Carousel>
    </DetailLayout>
  );
}

export default TVShow;
