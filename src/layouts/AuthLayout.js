import React, { useEffect } from "react";

// CSS Import
import "./AuthLayout.css";

export default function AuthLayout(props) {
  const handleRedirectIfLogin = () => {
    if (localStorage.getItem("token")) {
      window.location.replace("/home");
    }
  };

  useEffect(() => {
    handleRedirectIfLogin();
  }, []);

  return (
    <div
      id="jumbutron"
      className="jumbotron jumbotron-fluid bg-dark text-light"
      style={{
        height: "90vh",
        overflowY: "unset",
      }}
    >
      <div className="container login-container" style={{ marginTop: "20vh" }}>
        <div
          className="auth"
          style={{
            border: "1px solid rgb(67, 77, 86, 10)",
            padding: 40,
            borderRadius: 10,
          }}
        >
          {props.children}
        </div>
        <div className="auth-right" />
        <div className="auth-left" />
      </div>
    </div>
  );
}
