import React from "react";

import Navbar from "../components/Navbar";

export default function SettingsLayout(props) {
  return (
    <div className="container text-light" style={{ marginTop: "15vh" }}>
      <Navbar />
      {props.children}
    </div>
  );
}
