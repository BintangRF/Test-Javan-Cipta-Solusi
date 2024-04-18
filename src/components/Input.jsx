import React, { useState } from "react";
import arrow from "../assets/arrow.svg";

const Input = () => {
  const [inputIsActive, setInputIsActive] = useState(false);

  const handleInputFocus = () => {
    setInputIsActive(true);
  };

  const handleInputBlur = () => {
    setInputIsActive(false);
  };

  return (
    <div
      className={`border ${
        inputIsActive ? "border-blue-800" : "border-gray-200"
      } rounded w-full px-2 py-3 flex`}>
      <input
        type="text"
        placeholder="Select"
        className="text-xl"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        autoComplete="on"
      />
      <img src={arrow} alt="" />
    </div>
  );
};

export default Input;
