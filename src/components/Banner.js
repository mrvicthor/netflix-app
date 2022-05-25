import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from "@heroicons/react/solid";

const imgUrl = "https://image.tmdb.org/t/p/original/";

const Banner = ({ movie, handleSelected }) => {
  const trimString = (text) => {
    return text?.length > 150 ? text.substr(0, 150 - 1) + "..." : text;
  };

  return (
    <header
      className="bg-cover bg-no-repeat bg-center-center h-[448px] relative  object-contain"
      style={{
        backgroundImage: `url(${imgUrl}${
          movie?.backdrop_path || movie?.poster_path
        })`,
      }}
    >
      <div className="flex flex-col h-[190px] space-y-3 pt-28 px-2 md:px-6 lg:px-6">
        <h1 className="text-white text-3xl font-bold md:text-5xl lg:text-7xl">
          {movie?.title || movie?.original_title}
        </h1>
        <p className="text-white text-shadow max-w-xs text-lg md:text-xl md:max-w-lg md:text-shadow-md lg:text-shadow-lg lg:text-xl lg:max-w-xl">
          {trimString(movie?.overview)}
        </p>
        <div className="flex space-x-2 md:mt-2">
          <button
            onClick={() => handleSelected(movie)}
            className="button bg-white text-black"
          >
            <FaPlay className="h-5 w-5 md:h-7 md:w-7 " /> Play
          </button>
          <button className="button bg-[gray]/70 text-white">
            <InformationCircleIcon className="h-6 w-6 text-white md:h-8 md:w-8" />{" "}
            More Info
          </button>
        </div>
      </div>
      <div className="h-[6rem] bg-gradient-to-b from-gray-900/10 to-[#010511] absolute bottom-0 w-screen lg:mb-0" />
    </header>
  );
};

export default Banner;
