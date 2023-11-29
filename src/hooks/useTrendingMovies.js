import React, { useEffect } from 'react'
import { API_OPTIONS, Trending_URL } from '../utils/constants'
import { addTrendingMovies } from '../utils/moviesSlice';
import { useDispatch, useSelector } from 'react-redux';

const useTrendingMovies = () => {
    const dispatch = useDispatch();
    const trendingMovies = useSelector(store=>store.movies.trendingMovies);
  const getTrendingMovies = async () => {
    try {
        const data = await fetch(Trending_URL, API_OPTIONS);
        const json = await data.json();
        dispatch(addTrendingMovies(json.results));
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(()=>{
    !trendingMovies && getTrendingMovies();
  }, []);
}

export default useTrendingMovies