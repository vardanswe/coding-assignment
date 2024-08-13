import Movie from './Movie'
import './movies.scss'

const Movies = ({ movies, viewTrailer, closeCard }) => {

    return (
        <div data-testid="movies" className="grid-container">
            {movies.movies.results?.map((movie) => (
                <Movie
                    movie={movie}
                    key={movie.id}
                    viewTrailer={viewTrailer}
                    closeCard={closeCard}
                />
            ))}
        </div>

    )
}

export default Movies
