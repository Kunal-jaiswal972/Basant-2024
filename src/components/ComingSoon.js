import React from "react";
// import "./ComingSoon.css";

const ComingSoon = ({ theme, size }) => {
  return (
    <div
      style={{
        textAlign: "center",
        color: `${theme === "dark" ? "#000" : "#fff"}`,
        fontSize: `${size === "small" ? "5vw" : "7.5vw"}`,
        fontWeight: "700",
        padding:"1rem"
      }}
    >
      <h1>Coming Soon...</h1>
    </div>
  );
};

export default ComingSoon;
