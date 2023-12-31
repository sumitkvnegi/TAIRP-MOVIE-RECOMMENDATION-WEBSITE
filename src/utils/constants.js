export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://i.pinimg.com/736x/30/db/47/30db479e1558c3ed46b4ed23b3cd98ae.jpg";

export const BACKGROUND =
  "https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_KEY,
  },
};

export const Upcoming_URL = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';

export const Trending_URL = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';


export const URL = "https://api.themoviedb.org/3/movie/now_playing?page=1"; // now playing movie api
export const POPULAR_URL = "https://api.themoviedb.org/3/movie/popular?page=1";

export const Video_URL = "https://api.themoviedb.org/3/movie/";

export const Image_URL = "https://image.tmdb.org/t/p/w780";

export const OPENAI_KEY = process.env.REACT_APP_OPENAI;

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hi", name: "Hindi" },
];
