import React from "react";
import "../styles.css"; // .. since it is an upper folder

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src="logo.png" alt="moviedux" />
      <h2 className="app-subtitle">
        It's time for popcorn! Find your next movie here.
      </h2>
    </div>
  );
}
