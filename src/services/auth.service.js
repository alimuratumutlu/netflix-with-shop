export default {
  login: () => {
    return localStorage.setItem("token", "ok");
  },
  logout: () => {
    return localStorage.removeItem("token");
  },
};
