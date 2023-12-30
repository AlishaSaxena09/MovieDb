import React, { useState } from "react";
import img from "../src/assets/snowflake.svg";
import svg from "../src/assets/movieNew.svg";

import Movie from "./Movie";
function SearchMovie() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const search = async (e) => {
    e.preventDefault();
    console.log("submit");

    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=d69bd58fbf4d38652813d9126046d171&language=en-US&query=${query}&page=1&include_adult=false`;
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
      console.log("movies", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container">
        <h1 className="heading">What's Your Holiday Movie ? </h1>

        <div className="hero">
          <div className="first-hero">
            <p className="welcome">Welcome ! 👋</p>
            <span> Lets find out the perfect holiday movie for you.</span>
          </div>
          <div className="second-hero">
            <img src={img} alt="rd" />
            <img src={img} alt="rd" />
            <img src={img} alt="rd" />
          </div>
        </div>

        <form className="form" onSubmit={search}>
          <label htmlFor="query" className="label"></label>
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            type="text"
            name="query"
            placeholder="i.e Holidate"
          />
          <button className="button" type="submit">
            Search
          </button>
        </form>
        {query ? (
          ""
        ) : (
          <div className="no-svg">
            <img src={svg} alt="svg" />
          </div>
        )}
        <Movie data={movies} />
      </div>
    </div>
  );
}

export default SearchMovie;
