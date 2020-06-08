import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

import axios from "axios";

import ApiUrl from "../constants/ApiUrl";
import Config from "../constants/Config";

const initialState = {
  trendingPerson: [{}],
  trendingMovies: [{}],
  trendingTVShows: [{}],
  similarMovies: [{}],
  currentGenres: [{}],
  currentMovie: {},
  cart: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const fetchTrendingPerson = async () => {
    const res = await axios
      .get(
        `${ApiUrl.BASE + ApiUrl.TRENDING}/person/week?api_key=${Config.API_KEY}`
      )
      .then((res) => {
        console.log("dispatch", res.data.results);
        dispatch({
          type: "FETCH_TRENDING_PERSON",
          payload: res.data.results,
        });
      });
  };

  const fetchTrendingMovies = async () => {
    const res = await axios
      .get(
        `${ApiUrl.BASE + ApiUrl.TRENDING}/movie/week?api_key=${Config.API_KEY}`
      )
      .then((res) => {
        console.log("dispatch", res.data.results);
        dispatch({
          type: "FETCH_TRENDING_MOVIES",
          payload: res.data.results,
        });
      });
  };

  const fetchTrendingTVShows = async () => {
    const res = await axios
      .get(`${ApiUrl.BASE + ApiUrl.TRENDING}/tv/week?api_key=${Config.API_KEY}`)
      .then((res) => {
        console.log("dispatch", res.data.results);
        dispatch({
          type: "FETCH_TRENDING_TVSHOWS",
          payload: res.data.results,
        });
      });
  };

  const getSimilarMovies = async (id) => {
    const res = await axios
      .get(`${ApiUrl.BASE}/movie/${id}/similar?api_key=${Config.API_KEY}`)
      .then((res) => {
        console.log("dispatch", res.data.results);
        dispatch({
          type: "GET_SIMILAR_MOVIES",
          payload: res.data.results,
        });
      });
  };

  const getCurrentMovie = async (id) => {
    const res = await axios
      .get(`${ApiUrl.BASE}/movie/${id}?api_key=${Config.API_KEY}`)
      .then((res) => {
        dispatch({
          type: "GET_CURRENT_MOVIE",
          payload: res.data,
        });
      });
  };

  const getCurrentGenres = async (id) => {
    const res = await axios
      .get(`${ApiUrl.BASE}/movie/${id}?api_key=${Config.API_KEY}`)
      .then((res) => {
        dispatch({
          type: "GET_CURRENT_GENRES",
          payload: res.data.genres,
        });
      });
  };

  function addToCart(id) {
    console.log(state.cart);
    dispatch({
      type: "ADD_TO_CART",
      payload: id,
    });
  }

  function removeFromCart(id) {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        cart: state.cart,
        trendingMovies: state.trendingMovies,
        trendingTVShows: state.trendingTVShows,
        trendingPerson: state.trendingPerson,
        similarMovies: state.similarMovies,
        currentMovie: state.currentMovie,
        currentGenres: state.currentGenres,
        getCurrentMovie,
        getCurrentGenres,
        getSimilarMovies,
        fetchTrendingMovies,
        fetchTrendingTVShows,
        fetchTrendingPerson,
        removeFromCart,
        addToCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
