import React, { useEffect } from 'react'
import { API_OPTIONS, Upcoming_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addUpcomingMovies } from '../utils/moviesSlice';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcomingMovies = useSelector(store => store.movies.upcomingMovies);
    const getUpcomingMovies = async () => {
        try {
            const data = await fetch(Upcoming_URL, API_OPTIONS);
            const json = await data.json();
            dispatch(addUpcomingMovies(json.results));
        } catch (error) {
            console.log(error);
        }
    }
  
    useEffect(()=>{
        !upcomingMovies && getUpcomingMovies();
    }, []);
}

export default useUpcomingMovies