import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/PaginationComponent/Pagination";
import { Paginate } from "../utils/Paginate";
import { genres } from "../services/fakeGenreService";
import ListGroup from "./common/ListGroupComponent/ListGroup";
import MoviesTable from "./MoviesTable";
class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: null,
  };

  componentDidMount() {
    const allGenres = [{ _id: "", name: "All Genres" }, ...genres];
    this.setState({ movies: getMovies(), genres: allGenres });
  }

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
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  render() {
    const { length: totalMovies } = this.state.movies;
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
    } = this.state;

    if (totalMovies === 0) return <p>No movies are here</p>;
    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;
    const movies = Paginate(filtered, currentPage, pageSize);
    return (
      <React.Fragment>
        <div className="row mt-5">
          <div className="col-3">
            <ListGroup
              items={this.state.genres}
              onItemSelect={this.handleGenreSelect}
              selectedItem={this.state.selectedGenre}
              heading="All Genres"
            />
          </div>
          <div className="col">
            <p>There are {filtered.length} number of movies.</p>
            <MoviesTable
              movies={movies}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
            />
            <Pagination
              itemsCount={filtered.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
