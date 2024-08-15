import React from 'react';
import Movie from './Movie';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import './movies.scss';

const Movies = ({ movies, viewTrailer, closeCard, loadMoreMovies, fetchStatus }) => {
    useInfiniteScroll(loadMoreMovies, fetchStatus);

    return (
        <div data-testid="movies" className="grid-container">
            {movies.results?.map((movie) => (
                <Movie
                    movie={movie}
                    key={movie.id}
                    viewTrailer={viewTrailer}
                    closeCard={closeCard}
                />
            ))}
            {fetchStatus === 'loading' && <p>Loading more movies...</p>}
            {fetchStatus === 'error' && <p>Error loading movies.</p>}
        </div>
    );
};

export default Movies;
