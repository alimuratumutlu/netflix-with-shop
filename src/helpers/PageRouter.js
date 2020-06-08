import React from "react";

// NPM Packages
import { Route } from "react-router-dom";

// Helper Impport
import PrivateRoute from "./PrivateRoute";

// Public Pages
import Login from "../pages/Auth/Login";

// Private Pages
import Cart from "../pages/Cart";
import Movie from "../pages/Movie";
import TVShow from "../pages/TVShow";
import Home from "../pages/Home";
import Kids from "../pages/Kids";
import MovieList from "../pages/MovieList";
import TVShowsList from "../pages/TVShowsList";
import Settings from "../pages/Profile/Settings";
import MyProfile from "../pages/Profile/MyProfile";

const PagesRouter = () => {
  return (
    <>
      <Route exact path="/" render={() => <Login />} />
      <Route exact path="/login" render={() => <Login />} />
      <PrivateRoute exact path="/home" component={Home} />
      <PrivateRoute exact path="/cart" component={Cart} />
      <PrivateRoute exact path="/kids" component={Kids} />
      <PrivateRoute exact path="/movie/:id" component={Movie} />
      <PrivateRoute exact path="/tvshow/:id" component={TVShow} />
      <PrivateRoute exact path="/movies" component={MovieList} />
      <PrivateRoute exact path="/settings" component={Settings} />
      <PrivateRoute exact path="/my-profile" component={MyProfile} />
      <PrivateRoute exact path="/tv-shows" component={TVShowsList} />
    </>
  );
};

export default PagesRouter;
