const Thumbnail = ({ movie, isFirst, onSelect }) => {
  return (
    <img
      onClick={() => onSelect(movie)}
      src={`https://image.tmdb.org/t/p/w500${
        movie?.backdrop_path || movie?.poster_path
      }`}
      className={`object-cover rounded  cursor-pointer hoverCard ${
        isFirst ? "h-[200px] min-w-[150px]" : "min-w-[200px] h-[120px]"
      } `}
      alt={movie.title}
    />
  );
};

export default Thumbnail;
