import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import requests from "../utils/request";
import Row from "../components/Row";
import axios from "../axios";
import Modal from "../components/Modal";
import Footer from "../components/Footer";

const API_KEY = process.env.REACT_APP_API_KEY;

console.log(API_KEY);
const Home = () => {
  const [netflixOriginal, setNetflixoriginal] = useState([]);
  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [video, setVideo] = useState(null);

  const handleSelected = (movie) => {
    setSelected(movie.id);
    console.log(movie.id);
  };

  useEffect(() => {
    if (!selected) return;
    const fetchTrailer = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${selected}/videos?api_key=${API_KEY}`
      );
      const data = await response.json();
      console.log(data);
      const key = data.results[0].key;
      console.log(key);
      setVideo(`https://www.youtube.com/watch?v=${key}`);
      setIsOpen(true);
      return response;
    };
    fetchTrailer().catch((err) => console.log(err.message));
  }, [selected]);

  useEffect(() => {
    const fetchNetflixOriginals = async () => {
      const { data } = await axios.get(requests.fetchNetflixOriginals);
      setNetflixoriginal(
        data.results[Math.floor(Math.random() * data.results.length)]
      );
      return data;
    };
    fetchNetflixOriginals().catch((err) => {
      console.log(err.message);
    });
  }, []);
  return (
    <>
      <Navbar />
      <main className=" pb-12">
        <Banner movie={netflixOriginal} handleSelected={handleSelected} />

        <Row
          title="Trending Now"
          fetchData={requests.fetchTrending}
          isFirst
          handleSelected={handleSelected}
        />
        <Row
          title="Netflix Originals"
          fetchData={requests.fetchNetflixOriginals}
          handleSelected={handleSelected}
        />
        <Row
          title="Top Rated"
          fetchData={requests.fetchTopRated}
          handleSelected={handleSelected}
        />
        <Row
          title="Action Movies"
          fetchData={requests.fetchActionMovies}
          handleSelected={handleSelected}
        />
        <Row
          title="Comedy Movies"
          fetchData={requests.fetchComedyMovies}
          handleSelected={handleSelected}
        />
        <Row
          title="Horror Movies"
          fetchData={requests.fetchHorrorMovies}
          handleSelected={handleSelected}
        />
        <Row title="Romance" fetchData={requests.fetchRomanceMovies} />
        <Row
          title="Documentary"
          fetchData={requests.fetchDocumentaries}
          handleSelected={handleSelected}
        />
        {isOpen && <Modal video={video} onClose={() => setIsOpen(false)} />}
      </main>
      <Footer />
    </>
  );
};

export default Home;
