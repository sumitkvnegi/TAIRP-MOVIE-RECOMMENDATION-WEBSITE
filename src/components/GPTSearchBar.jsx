import React, { useEffect, useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const langSelected = useSelector((store) => store.config.lang);
  const langFilter = lang[langSelected];
  const searchText = useRef(null);

  const dispatch = useDispatch();

  // * search movie in TMDB
  const searchMovieTMDB = async (movie) => {

    console.log(movie)
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);


    return json.results;
  };

  const handleGPTSearchClick = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: harry potter, blade runner, mission impossible, inception, shutter island";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      console.log("error");
    } // TODO: write error handling ...

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie)); // ! array of promises 

    const tmdbResults = await Promise.all(promiseArray);

    localStorage.setItem("gpt",JSON.stringify({movieNames:gptMovies, movieResults:tmdbResults}));

    console.log(tmdbResults)
    console.log(gptMovies)

    dispatch(addGptMovieResult({movieNames:gptMovies, movieResults:tmdbResults}));
  };

  useEffect(()=>{
    // if(localStorage.getItem){

      // const movies = localStorage.getItem("gpt");
      // console.log(movies);
      // const {movieNames:gptMovies, movieResults:tmdbResults} = JSON.parse(movies);

      // dispatch(addGptMovieResult({movieNames:gptMovies, movieResults:tmdbResults}))
    // }
  },[]);

  return (
    <div className="pt-20 ">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex bg-white bg-opacity-80 shadow-md overflow-hidden justify-center mx-auto items-center w-1/3 rounded-full border-4 border-black"
      >
        <input
          type="text"
          className="w-full px-4 focus:outline-none text-center py-2 bg-transparent text-black focus:text-black focus:font-semibold placeholder-black text-sm"
          placeholder={langFilter.gpt_placeholder}
          ref={searchText}
        />
        <button
          className="font-semibold pl-4 pr-6 py-2 text-white text-sm rounded-r-full border-l-2 border-red-900 bg-red-600"
          onClick={handleGPTSearchClick}
        >
          {langFilter.search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
