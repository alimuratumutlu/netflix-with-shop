import React, { useEffect, useState, useContext } from "react";
import { isMobile } from 'react-device-detect';

// Carousel Import
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

// i18next Multi Language Support
import "../helpers/i18next";
import { useTranslation } from "react-i18next";

// Component Import
import Card from "../components/Card/Card";
import Slider from "../components/Slider/Slider";

// Layout Import
import HomeLayout from "../layouts/HomeLayout";

// Context
import { GlobalContext } from "../context/GlobalState";

// Router Import
import { useNavigate } from "react-router-dom";

function Home(props) {
  const [isAdded, setisAdded] = useState(false);

  let navigate = useNavigate();

  // i18next Multi Language Support
  const { t, i18n } = useTranslation();

  const {
    movieCart,
    addToMovieCart,
    trendingMovies,
    trendingTVShows,
    fetchTrendingMovies,
    fetchTrendingTVShows,
    fetchTrendingPerson,
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
    fetchTrendingMovies();
    fetchTrendingTVShows();
    fetchTrendingPerson();
    checkMovieCart();
  }, []);

  return (
    <HomeLayout>
      <Slider
        trendingMovies={trendingMovies}
        handleItemClick={handleItemClick}
        handleAddToCart={handleAddToCart}
      />
      <h4 className="text-white pl-2 pt-4">
        {t("trending")} {t("movies")}
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
        {trendingMovies &&
          trendingMovies.map((item, i) => (
            <Card
              key={i}
              id={item.id}
              type="movie"
              title={item.title}
              posterpath={item.poster_path}
              handleItemClick={handleItemClick}
            />
          ))}
      </Carousel>

      <h4 className="text-white pl-2 pt-4">
        {t("trending")} {t("tvshows")}
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
        {trendingTVShows &&
          trendingTVShows.map((item, i) => (
            <Card
              key={i}
              id={item.id}
              type="tvshow"
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
