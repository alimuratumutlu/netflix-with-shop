import React from "react";

import "./Jumbutron.css";

export default function Jumbutron(props) {
  return (
    <div
      id="jumbutron"
      className="jumbotron bg-dark text-light"
      style={{ height: "80vh", overflowY: "hidden" }}
    >
      <div style={{ marginTop: "15vh" }}>{props.children}</div>
    </div>
  );
}
