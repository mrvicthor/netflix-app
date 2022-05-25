import useAutoComplete from "./useAutocomplete";
import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

const API_KEY = process.env.REACT_APP_API_KEY;

const AutoComplete = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const debounceQuery = useAutoComplete(query);
  const [suggestions, setSuggestions] = useState([]);
  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [video, setVideo] = useState("");

  const navigate = useNavigate();

  const handleSelected = (movie) => {
    console.log(movie.id);
    setSelected(movie.id);
  };

  useEffect(() => {
    if (!query) return setSuggestions([]);
    setLoading(true);
    const fetchMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
      );
      const data = await response.json();
      const { results } = data;
      console.log(results);
      setLoading(false);
      setSuggestions(results);
      return response;
    };
    fetchMovie().catch((err) => console.log(err.message));
  }, [debounceQuery]);

  useEffect(() => {
    if (!selected) return;
    const fetchTrailer = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${selected}/videos?api_key=${API_KEY}`
      );
      const data = await response.json();

      const key = data.results[0].key;

      setVideo(`https://www.youtube.com/watch?v=${key}`);
      setIsOpen(true);
      return response;
    };
    fetchTrailer().catch((err) => console.log(err.message));
  }, [selected]);

  return (
    <div className=" w-[100%] overflow-hidden pb-2">
      <header className="py-8 flex justify-between px-4 md:px-8 overflow-hidden fixed w-full z-[100] bg-[#040C0C]">
        <div className="flex items-center">
          <FaArrowLeft
            className="text-white h-6 w-6 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="w-[80%]">
          <input
            value={query}
            onInput={(e) => setQuery(e.target.value)}
            placeholder="Search movie title..."
            className="rounded border-[#8C948C] border-solid border-2 py-2 px-5 outline-none bg-transparent text-white w-full md:max-w-lg lg:max-w-2xl"
          />
        </div>
      </header>
      {loading && <p>Loading...</p>}
      <div className="flex gap-6 px-4 md:px-6 mt-32">
        {!suggestions.length ? (
          <p className="text-white text-xl mt-4 mx-auto md:text-2xl">
            Enter movie title to search
          </p>
        ) : (
          <>
            <div className="grow md:flex-grow-[8]">
              <h2 className="text-white text-2xl font-semibold md:text-3xl">
                Films & TV Programmes
              </h2>
              <div className="py-3 grid grid-cols-2 gap-3 space-x-2 overflow-auto overscroll-contain  px-2">
                {suggestions.map((m) => (
                  <div
                    key={m.id}
                    className="rounded relative pt-[65%] overflow-hidden"
                  >
                    <img
                      onClick={() => handleSelected(m)}
                      className="h-[100%] w-full max-w-lg object-cover rounded absolute left-0 top-0 cursor-pointer"
                      src={`https://image.tmdb.org/t/p/w500${
                        m?.backdrop_path || m?.poster_path
                      }`}
                      alt={m?.title}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden grow-0 sm:block">
              <h2 className="text-white text-2xl font-semibold md:text-3xl">
                Suggestions
              </h2>
              <div className="py-3 space-y-2">
                {suggestions.map((m) => (
                  <h4 className="text-white text-lg md:text-xl" key={m.id}>
                    {m?.title || m?.original_title}
                  </h4>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      {isOpen && <Modal onClose={() => setIsOpen(false)} video={video} />}
    </div>
  );
};

export default AutoComplete;
