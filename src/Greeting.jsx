import React from "react";

function Greeting({ name }) {
  const date = new Date();
  const formatedDate = date.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      <h1>Hello,{name}</h1>
      today is {formatedDate}
    </div>
  );
}

export default Greeting;
