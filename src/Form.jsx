import React, { useState } from "react";

function Form() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted value: ${value}`);
    setValue(""); // clear the input
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Enter name"
          value={value}
          onChange={handleChange}
        />
        <h3>{value}</h3>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Form;
