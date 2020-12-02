import React from "react";
import MovieCard from "./MovieCard";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies && movies[0] ? (
        movies.map((el) => <MovieCard key={el.id} film={el} />)
      ) : (
        <h1>Sorry, no results found(</h1>
      )}
    </div>
  );
};

export default MovieList;
