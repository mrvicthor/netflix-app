const ProfileRows = ({ color, title, quality, message }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h3 className="text-slate-300">{title}</h3>
        <p className="text-slate-300 text-sm -mt-1">{quality}</p>
      </div>{" "}
      <div>
        <button
          className={`${color} py-2 px-4 font-medium text-lg rounded hover:opacity-40 text-white`}
        >
          {message}
        </button>
      </div>
    </div>
  );
};

export default ProfileRows;
