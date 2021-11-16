import React, { useEffect, useState, useContext } from "react";
import { isMobile } from 'react-device-detect';


// Carousel Import
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
import { useHistory } from "react-router-dom";

function Home(props) {
  const [isAdded, setisAdded] = useState(false);

  let history = useHistory();

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
    history.push(path);
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
      <Carousel autoPlay={false} centerMode={true} centerSlidePercentage={isMobile ? 30 : 10} emulateTouch={true} infiniteLoop={true} showArrows={false} showIndicators={false} showStatus={false} swipeable={true} useKeyboardArrows={true} preventMovementUntilSwipeScrollTolerance={true} selectedItem={5}>
        {trendingMovies &&
          trendingMovies.map((item) => (
            <Card
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
      <Carousel autoPlay={false} centerMode={true} centerSlidePercentage={isMobile ? 30 : 10} emulateTouch={true} infiniteLoop={true} showArrows={false} showIndicators={false} showStatus={false} swipeable={true} useKeyboardArrows={true} preventMovementUntilSwipeScrollTolerance={true} selectedItem={5}>
        {trendingTVShows &&
          trendingTVShows.map((item) => (
            <Card
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
