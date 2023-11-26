import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  //const [actors, setActors] = useState(null);
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=a0c4cbde&i=${id}&plot=full`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        movie ? console.log(movie.Actors.split(",")) : console.log("nothing");
      });
  }, [id]);
  return (
    <>
      {movie && (
        <div className='details'>
          <figure className='details__figure'>
            <img src={movie.Poster} alt={movie.Title} />
          </figure>
          <div className='details__movie'>
            <p>
              <span>Title:</span> <span>{movie.Title}</span>
            </p>
            <p>
              <span>Runtime:</span>
              <span>{movie.Runtime}</span>
            </p>
            <p>
              <span>Release Date:</span>
              <span>{movie.Released}</span>
            </p>
            <p>
              <span>Director:</span>
              <span>{movie.Director}</span>
            </p>
            <p>
              <span>Genre:</span>
              <span>{movie.Genre}</span>
            </p>
            <p>
              <span>Actors:</span>
              <span>{movie.Actors}</span>
            </p>
          </div>
          <div className='details__rating'>
            <div>
              <p>{movie.Ratings[1].Value}</p>
              <p>{movie.Ratings[1].Source}</p>
            </div>
            <div>
              <p>{movie.Ratings[2].Value}</p>
              <p>{movie.Ratings[2].Source}</p>
            </div>
          </div>
          <div className='details__plot'>
            <h2>Plot</h2>
            <p>{movie.Plot}</p>
          </div>
          <div className='details__actors'>
            <div>
              <figure>{/* <img src={actor} alt='blah' /> */}</figure>
              <figcaption>{/* {movie} */}</figcaption>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
