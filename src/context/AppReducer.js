export default (state, action) => {
  switch (action.type) {
    case "GET_CURRENT_GENRES":
      return {
        ...state,
        currentGenres: action.payload,
      };
    case "GET_CURRENT_TVSHOW":
      return {
        ...state,
        currentTVShow: action.payload,
      };
    case "GET_CURRENT_MOVIE":
      return {
        ...state,
        currentMovie: action.payload,
      };
    case "GET_SIMILAR_TVSHOWS":
      return {
        ...state,
        similarTVShows: action.payload,
      };
    case "GET_SIMILAR_MOVIES":
      return {
        ...state,
        similarMovies: action.payload,
      };
    case "FETCH_TRENDING_MOVIES":
      return {
        ...state,
        trendingMovies: action.payload,
      };
    case "FETCH_TRENDING_TVSHOWS":
      return {
        ...state,
        trendingTVShows: action.payload,
      };
    case "FETCH_TRENDING_PERSON":
      return {
        ...state,
        trendingAll: action.payload,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((cart) => cart.id !== action.payload),
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};
