import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Thumbnail from "./Thumbnail";
import { useState, useEffect, useRef } from "react";
import axios from "../axios";

const Row = ({ title, fetchData, isFirst = false, handleSelected }) => {
  const [movies, setMovies] = useState([]);
  const [moved, setIsMoved] = useState(false);
  const rowRef = useRef(null);

  useEffect(() => {
    const fetchTrending = async () => {
      const request = await axios.get(fetchData);
      setMovies(request.data.results);
      return request;
    };

    fetchTrending().catch((err) => console.log(err.message));
  }, []);

  const handleClick = (direction) => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behaviour: "smooth" });
    }
  };

  return (
    <div className="ml-2 pb-2 md:ml-6">
      <h2 className="text-white text-2xl font-bold md:text-3xl lg:text-2xl">
        {title}
      </h2>
      <div className="group relative w-full mt-2">
        <ChevronLeftIcon
          onClick={() => handleClick("left")}
          style={{ top: "50%", transform: `translateY(-50%)` }}
          className={`h-5 w-5 text-white absolute left-2 font-bold ${
            !moved && "hidden"
          } z-40 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 md:h-8 md:w-8`}
        />
        <div
          ref={rowRef}
          className="flex space-x-2 w-screen overflow-x-scroll scrollbar-hide"
        >
          {movies.map((movie) => (
            <Thumbnail
              movie={movie}
              key={movie?.id}
              isFirst={isFirst}
              onSelect={handleSelected}
            />
          ))}
        </div>
        <ChevronRightIcon
          onClick={() => handleClick("right")}
          style={{ top: "50%", transform: `translateY(-50%)` }}
          className="h-5 w-5 text-white absolute right-2  z-40 font-bold  cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 md:h-8 md:w-8"
        />
      </div>
    </div>
  );
};

export default Row;
