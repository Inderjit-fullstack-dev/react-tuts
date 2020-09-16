import React from "react";
import Like from "./Like";
const MoviesTable = (props) => {
  const { movies, onDelete, onLike } = props;
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Number In Stock</th>
          <th>Daily Rental Rate</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.movies.map((movie) => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like movie={movie} onToggleLike={() => onLike(movie)} />
            </td>
            <td>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => onDelete(movie)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
