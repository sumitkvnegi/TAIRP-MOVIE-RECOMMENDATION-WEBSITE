import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS, Video_URL } from '../utils/constants';
import { addTrailerVideo } from '../utils/moviesSlice';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const moviesTrailer = useSelector(store => store.movies.trailerVideo);

  // * fetch trailer video && updating the store with trailer video data
  const getMovieVideos = async () => {
    try{
      const data = await fetch(
        Video_URL + movieId + "/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
      const filterData = json.results.filter((i) => i.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];
      dispatch(addTrailerVideo(trailer));
    }catch(error){
      console.log(error);
    }
  };

  useEffect(() => {
    !moviesTrailer && getMovieVideos();
  }, []);
};

export default useMovieTrailer