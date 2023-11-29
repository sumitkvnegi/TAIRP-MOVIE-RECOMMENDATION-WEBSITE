import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  console.log(movieResults);

  return (
    <div className="overflow-hidden bg-black bg-opacity-90 m-4 h-full rounded-lg pt-4 pb-6">
      <div className="text-white 
     font-semibold overflow-y-scroll h-full">
        {movieNames.map((movieName, index) => (
          <MovieList key={movieName} title={movieName} movies={movieResults[index]} />
        ))}
        </div>
    </div>
  );
};

export default GPTSuggestions;
