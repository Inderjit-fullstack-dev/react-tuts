import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./Like";
import Pagination from "./common/PaginationComponent/Pagination";
import { Paginate } from "../utils/Paginate";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
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

  handlePageChange = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  render() {
    const { length: totalMovies } = this.state.movies;
    const { pageSize, currentPage, movies: allMovies } = this.state;

    if (totalMovies === 0) return <p>No movies are here</p>;

    const movies = Paginate(allMovies, currentPage, pageSize);
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
            {movies.map((movie) => (
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
        <Pagination
          itemsCount={this.state.movies.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
