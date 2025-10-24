import React, { useEffect, useState } from "react";

function Photos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const url = "https://jsonplaceholder.typicode.com/todos";
      const response = await fetch(url);
      const data = await response.json();
      setPhotos(data.slice(0, 20)); // set the array, not a property
    };

    fetchPhotos(); // call the function!
  }, []);

  return (
    <div>
      <h2>Photos</h2>
      {photos.map((pic) => (
        <ol>
          <li>{pic.title}</li>
        </ol>
      ))}
    </div>
  );
}

export default Photos;
