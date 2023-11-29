import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS, POPULAR_URL } from '../utils/constants';
import { addPopularMovies } from '../utils/moviesSlice';

const usePopularMovies = () => {
  
  // * Fetch data from TMDB API and update the store
  const dispatch = useDispatch();
  const popularMovies = useSelector(store => store.movies.popularMovies);

  const getPopularMovies = async () => {
    try{
      const data = await fetch(POPULAR_URL, API_OPTIONS);
      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    }catch(error){
      console.log(error);
    }
  };

  useEffect(()=>{
    !popularMovies && getPopularMovies();
  }, []);

};

export default usePopularMovies;
