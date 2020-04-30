import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div style={footer}>
      <p style={para}>
        <Link style={linkStyle} to={`/about`}>
          About
        </Link>
      </p>
    </div>
  );
}

const footer = {
  position: "absolute",
  right: "0",
  bottom: "0",
  left: "0",
  backgroundColor: "#edebe6",
  height: "60px",
};

const linkStyle = {
  color: "black",
  textDecoration: "none",
};

const para = {
  textAlign: "center",
};
export default Footer;
