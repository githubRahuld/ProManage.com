import React from "react";

const Button = ({ text, onClick, type = "button", className = "" }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
