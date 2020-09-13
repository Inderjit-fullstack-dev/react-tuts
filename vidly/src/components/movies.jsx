import React, {Component} from 'react';
import { getMovies, deleteMovie } from '../services/fakeMovieService';
class Movies extends Component {
    
    state = { 
        movies: getMovies()
    }

    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies});
    }

    render() {
        const { length: totalMovies } = this.state.movies;

        if (totalMovies ===0)
            return <p>No movies are here</p>

        return  (
            <React.Fragment>
                <h1>Movies</h1>
                <p>There are { totalMovies } number of movies.</p>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Number In Stock</th>
                            <th>Daily Rental Rate</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.movies.map(movie => (
                            <tr  key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td>
                                    <button 
                                        className="btn btn-danger btn-sm"
                                        onClick={() => this.handleDelete(movie)}>
                                            Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        )}
}

export default Movies;