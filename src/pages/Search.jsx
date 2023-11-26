import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Movielist from "../Movielist";

const Search = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  // console.log(id);
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=a0c4cbde&s=${id}`)
      .then((response) => response.json())
      .then((movie) => {
        if (movie.Response === "False") {
          throw new Error(movie.Error);
        } else {
          setError(null);
          setData(movie.Search);
        }
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      });
  }, [id]);

  return (
    <>
      <div
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "700",
          marginTop: "2rem",
        }}>
        {error && <p style={{ color: "orange" }}>{error}</p>}
      </div>
      <div className='home'>{data ? <Movielist movies={data} /> : null}</div>
    </>
  );
};

export default Search;
