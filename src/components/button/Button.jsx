import React from "react";
import "./Button.css";
const Button = ({ num, click }) => {
  return (
    <button className="ui-change-btn" onClick={() => click(true)}>
      Agregados <span>{num}</span> {num <= 1 ? "Compras" : "items"}
    </button>
  );
};

export default Button;
