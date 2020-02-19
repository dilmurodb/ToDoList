import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      style={{
        background: "#333",
        color: "white",
        padding: "5px",
        textAlign: "center"
      }}
    >
      <h1>ToDoList</h1>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        Home
      </Link>{" "}
      |{" "}
      <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
        About
      </Link>
    </header>
  );
}

export default Header;
