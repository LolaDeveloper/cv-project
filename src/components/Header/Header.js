import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <header className="App-header">
        <figure className="wrapper">
          <img
            src="../images/Lola.jpg"
            alt="Funmilola Adeniran"
            className="headerImage"
          />
        </figure>
        <div className="identity">
          <h1 className="headerName"> Funmilola Alice Adeniran </h1>
          <h2 className="headerTitle">Frontend Developer</h2>
        </div>
      </header>
    </div>
  );
}
