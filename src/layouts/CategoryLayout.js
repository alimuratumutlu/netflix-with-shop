import React from "react";

import Navbar from "../components/Navbar";

export default function CategoryLayout(props) {
  return (
    <div className="container text-light" style={{ marginTop: "10vh" }}>
      <Navbar />
      {props.children}
    </div>
  );
}
