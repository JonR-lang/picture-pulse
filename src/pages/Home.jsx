import { useState } from "react";
import { useEffect } from "react";
import Movielist from "../Movielist";

const Home = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://www.omdbapi.com/?apikey=a0c4cbde&s=avengers")
      .then((response) => response.json())
      .then((movie) => {
        setData(movie.Search);
      });
  }, []);

  return <div className='home'>{data && <Movielist movies={data} />}</div>;
};

export default Home;
