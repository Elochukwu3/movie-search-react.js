import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Mapmovie from "./Mapmovie";


function Movie() {
  const [content, setContent] = useState("");
  const [movie, setMovie] = useState([]);


  function ChangeValue(e) {
    setContent(e.target.value);
  }

  useEffect(() => {
    // searchMovieApi(content.length ? content : "batman");
    searchMovieApi("love");
  }, []);

  async function searchMovieApi(title) {
    const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovie(data.Search);
  }


  return (
    <div>
      <div className="app">
        <header>
          <h2 className="movieHeader">EloMovies.Com </h2>
        </header>
        <section className="searchHolder">
          <div style={{ flex: "1" }}>
            <input
              type="text"
              placeholder="search for movie"
              onChange={ChangeValue}
              value={content}
            />
          </div>
          <div>
            <button onClick={() => searchMovieApi(content)}>search</button>
          </div>
        </section>
        <section className="container">
          {movie?.length > 0 ? (
            <div className="container">
              {movie.map((m) => {
                return <Mapmovie movieName={m} key={`${m.imdbID} ${m.Title}`}/>;
              })}
            </div>
          ) : (
            <div className="empty">
              <h2> Movies not found</h2>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Movie;
