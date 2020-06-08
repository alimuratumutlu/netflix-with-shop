import React from "react";

export default function SettingsLayout(props) {
  return (
    <div className="container text-light" style={{ marginTop: "15vh" }}>
      {props.children}
    </div>
  );
}
