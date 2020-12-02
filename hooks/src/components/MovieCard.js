import React from "react";
import StarRating from "./StarRating";
import { Link } from 'react-router-dom'

const MovieCard = ({ film }) => {
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
        <StarRating movieRating={film.rating} />
      </div>
      <img src={film.image} alt={film.name} />

      <Link to={`/trailer/${film.id}`}><h3> {film.name} </h3></Link>
      <p> {film.date} </p>
    </div>
  );
};

MovieCard.defaultProps = {
  film: {
    name: "No Name",
    date: "No Date",
    image:
      "https://cdn3.iconfinder.com/data/icons/no-image/32/no_image_no_file_no_jpg_ni_picture-01-512.png",
    id: "",
  },
};

export default MovieCard;
