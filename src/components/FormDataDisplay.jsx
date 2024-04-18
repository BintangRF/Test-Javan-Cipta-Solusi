import React from "react";

const FormDataDisplay = ({ formData }) => {
  return (
    <div>
      <h2>Data JSON:</h2>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

export default FormDataDisplay;
