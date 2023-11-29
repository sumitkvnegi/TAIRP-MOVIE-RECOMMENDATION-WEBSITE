import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black pb-10">
        <div className="md:-mt-80 pt-4 z-50 relative">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        </div>
        <MovieList title={"Trending"} movies={movies.trendingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
        <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
      </div>
    )
  );
};

export default SecondaryContainer;
