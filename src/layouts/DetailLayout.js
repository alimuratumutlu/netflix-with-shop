import React from "react";

import Navbar from "../components/Navbar";

export default function DetailLayout(props) {
  return (
    <div className="text-light">
      <Navbar />
      {props.children}
    </div>
  );
}
