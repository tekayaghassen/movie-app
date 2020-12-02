import React, { useState } from "react";
import { moviesData } from "./data";
import Search from "./components/Search";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import Description from "./components/Description";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import "./App.css";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [search, setSearch] = useState("");
  const [rate, setRate] = useState(1);


  const addMovie = (newMovie) => setMovies([...movies, newMovie]);


  const handleSearch = (event) => setSearch(event.target.value);


  const handleRating = (rate) => setRate(rate);


  const filterMovie = () => {
    return movies.filter(
      (movie) =>
        movie.name.toLowerCase().includes(search.toLowerCase().trim()) &&
        movie.rating >= rate
    );
  };

  return (
    <div>
      <Router>
        <Search
          search={search}
          rate={rate}
          handleRating={handleRating}
          handleSearch={handleSearch}
        />
        <AddMovie addMovie={addMovie} /> 
        <Switch>
          <Route path="/" exact component={() => <MovieList movies={filterMovie()} />} />
          <Route path="/trailer/:id" component={Description} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
