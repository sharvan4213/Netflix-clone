import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLarge }) {
  const [Movies, setMovies] = useState([]);
  const [Trailer, setTrailer] = useState("");

  useEffect(() => {
    async function fetch() {
      const req = await axios.get(fetchUrl);
      // console.log(req.data.results)
      setMovies(req.data.results);
      return req;
    }
    fetch();
  }, [fetchUrl]);
  console.log(Movies);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }
  const ClickHandler = (movie) => {
    if (Trailer) {
      setTrailer("")
    } else {
    movieTrailer(movie?.name || "").then((url) => {
        const U = new URLSearchParams(new URL(url).search);
        setTrailer(U.get("v"));
        }).catch((err) => {
          console.log(err);
        })
    }
  }
  return (
    <div className="row">
      {/* heading */}
      <h2>{title}</h2>
      {/* poster */}
      <div className="row-poster">
        {Movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => ClickHandler(movie)}
            className={`poster ${isLarge && "larger-poster"}`}
            src={`${baseUrl}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {Trailer && <YouTube videoId={Trailer} opts={opts} />}
    </div>
  );
}

export default Row;
