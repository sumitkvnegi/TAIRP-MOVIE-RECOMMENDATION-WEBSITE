import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS, URL } from '../utils/constants';
import { addNowPlayingMovies } from '../utils/moviesSlice';

const useNowPlayingMovies = () => {
  
  // * Fetch data from TMDB API and update the store
  const dispatch = useDispatch();
  const nowPlayingMovies= useSelector(store => store.movies.nowPlayingMovies);

  const getNowPlayingMovies = async () => {
    try{
      const data = await fetch(URL, API_OPTIONS);
      const json = await data?.json();
        dispatch(addNowPlayingMovies(json.results));
    }catch(error){
      console.log(error);
    }
   
  };

  useEffect(()=>{
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);

};

export default useNowPlayingMovies;
