import React, { Suspense } from "react";

// NPM Packages
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { GlobalProvider } from "./context/GlobalState";

// Private Pages
import Cart from "./pages/Cart";
import Movie from "./pages/Movie";
import TVShow from "./pages/TVShow";
import Home from "./pages/Home";
import Kids from "./pages/Kids";
import MovieList from "./pages/MovieList";
import TVShowsList from "./pages/TVShowsList";
import Settings from "./pages/Profile/Settings";
import MyProfile from "./pages/Profile/MyProfile";

// Public Pages
import Login from "./pages/Auth/Login";

function App() {
  return (
    <Suspense fallback="loading">
      <GlobalProvider>
        <Router>

          {
            localStorage.getItem("token") ? (
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/cart" element={<Cart />} />
                <Route exact path="/kids" element={<Kids />} />
                <Route exact path="/movie/:id" element={<Movie />} />
                <Route exact path="/tvshow/:id" element={<TVShow />} />
                <Route exact path="/movies" element={<MovieList />} />
                <Route exact path="/settings" element={<Settings />} />
                <Route exact path="/my-profile" element={<MyProfile />} />
                <Route exact path="/tv-shows" element={<TVShowsList />} />
              </Routes>
            ) : (
              <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/login" element={<Login />} />
              </Routes>
            )
          }
        </Router>
      </GlobalProvider>
    </Suspense>
  );
}

export default App;
