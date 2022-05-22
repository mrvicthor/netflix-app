import { FiSearch, FiBell } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ toggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`flex items-center ${
        isScrolled && "bg-black"
      } justify-between fixed top-0 left-0 w-screen z-10 px-3 py-3 lg:px-8 lg:py-6`}
    >
      <img
        onClick={() => navigate("/")}
        src="https://rb.gy/ulxxee"
        alt="netflix"
        className="h-8 cursor-pointer"
      />
      {toggle === true ? null : (
        <ul className="hidden md:flex md:items-center md:space-x-2 md:list-none">
          <li className="hoverAnimation  text-white">Home</li>
          <li className="hoverAnimation text-white">TV Shows</li>
          <li className="hoverAnimation text-white">Movies</li>
          <li className="hoverAnimation text-white">New & Popular</li>
          <li className="hoverAnimation text-white">My List</li>
        </ul>
      )}
      <div className="flex gap-2 items-center">
        <FiSearch
          className="hidden sm:block sm:cursor-pointer text-white"
          size={22}
        />
        <FiBell
          className="ml-auto cursor-pointer text-white font-semibold"
          size={22}
        />
        <img
          className="h-8 cursor-pointer"
          src="https://rb.gy/g1pwyx"
          alt="avatar"
          onClick={() => navigate("/profile")}
        />
      </div>
    </nav>
  );
};

export default Navbar;
