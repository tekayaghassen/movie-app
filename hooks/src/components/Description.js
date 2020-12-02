import StarRating from "./StarRating";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { moviesData } from "../data";

const Description = ( {match} ) => {

    const [movies, setMovies] = useState(moviesData);

    const filterMovie = movies.filter(movie => movie.id == match.params.id )

    const [movie, setMovie] = useState(filterMovie);

    //const moviee = [];
    useEffect(() => {
            console.log(match)
            console.log(movie)
        }, []);

        const descriptionStyle = {
            color: 'black'
        }

  return (
    <div className="movie-card">
      <div
        style={{
          position: "absolute",
          right: "0px",
          textAlign: "right",
          background: "rgba(255,255,255, 0.3)",
          width: "100%",
        }}
      >
      </div>
      <p style={descriptionStyle}> {movie[0].description}  </p>
      <p> {movie[0].date}  </p>
      <Link to={`/`}><h3> Home Page </h3></Link>
    </div>
  );
};


export default Description;
