interface IMovieListTop {
  type: "top100" | "top250";
}

const MovieListTop = ({type}: IMovieListTop) => {
  return (
    <div>
        <h1>{type === "top100" ? "TOP Movies 100" :  type === "top250" ? "TOP Movies 250" : ""}</h1>
    </div>
  )
};

export default MovieListTop;
