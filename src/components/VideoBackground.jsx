import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
    useMovieTrailer(movieId);
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);

  return (
    <div className="overflow-hidden w-full aspect-video pointer-events-none">
      <div className="bg-black w-screen h-[25%] md:h-[10%] absolute top-0 left-0"></div>
      <iframe 
      className="w-screen h-[100%] md:mt-[-2%] aspect-video -z-20"
      title="YouTube Video Player"
      src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=0&mute=1&controls=0&showinfo=0&rel=0&playlist="+trailerVideo?.key+"&loop=1&"}
      allow="accelerometer; autoplay; modestbranding; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
