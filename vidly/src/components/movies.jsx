import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./Like";
class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].like = !movie.like;
    this.setState({ movies });
  };

  render() {
    const { length: totalMovies } = this.state.movies;

    if (totalMovies === 0) return <p>No movies are here</p>;

    return (
      <React.Fragment>
        <h1>Movies</h1>
        <p>There are {totalMovies} number of movies.</p>
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
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like movie={movie} onToggleLike={this.handleLike} />
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(movie)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
