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
        inputIsActive ? "border-blue-800" : "border-gray-300"
      } rounded px-[1px] py-[3px] flex justify-between`}>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-1 text-lg"
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
