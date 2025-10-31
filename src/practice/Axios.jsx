import axios from "axios";
import React, { useEffect, useState } from "react";

function Axios() {
  const [data, setData] = useState([]);
  const api = "https://imdb.iamidiotareyoutoo.com/search?tt=tt2250912";
  const getMovies = async () => {
    try {
      const resp = await axios.get(api);
        console.log(resp.data.short.Imdb);
        setData(resp.data)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);
  return <div></div>;
}

export default Axios;
