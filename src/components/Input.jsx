import React, { useState } from "react";

const Input = ({ placeholder, image, value, onChange }) => {
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
      } rounded px-2 py-3 flex justify-between`}>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full text-xl"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        value={value}
        onChange={onChange}
        autoComplete="on"
      />
      <img src={image} alt="" />
    </div>
  );
};

export default Input;
