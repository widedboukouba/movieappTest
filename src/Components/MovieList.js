import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const MovieList = ({ text, rate }) => {
  const movies = useSelector((store) => store?.movie?.movies);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "40px",
      }}
    >
      {movies
        .filter(
          (el) =>
            el.attributes.name.toLowerCase().includes(text.toLowerCase()) &&
            (rate > 0 ? el.attributes.rating === rate : true)
        )
        .map((movie) => (
          <MovieCard key={movie?.id} movie={movie.attributes} />
        ))}
    </div>
  );
};

export default MovieList;
