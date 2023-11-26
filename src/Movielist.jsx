import { Link } from "react-router-dom";

const Movielist = ({ movies }) => {
  return (
    <>
      {movies.map((movie, index) => {
        return (
          <Link to={`details/${movie.imdbID}`}>
            <div className='container' key={index}>
              <div className='container__div container__div--top'>
                <span>{movie.Year}</span>
              </div>
              <img className='container__img' src={movie.Poster} alt='' />
              <div className='container__div container__div--bottom'>
                <p>{movie.Title}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Movielist;
