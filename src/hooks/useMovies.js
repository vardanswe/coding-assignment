import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../data/moviesSlice';
import { ENDPOINT_SEARCH, ENDPOINT_DISCOVER, API_KEY, ENDPOINT } from '../constants';

export const useMovies = (searchQuery) => {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies);
    const [videoKey, setVideoKey] = useState(null);
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        const getMovies = async () => {
            const endpoint = searchQuery
                ? `${ENDPOINT_SEARCH}&query=${searchQuery}`
                : ENDPOINT_DISCOVER;
            dispatch(fetchMovies(endpoint));
        };

        getMovies();
    }, [searchQuery, dispatch]);

    const getMovie = async (id) => {
        const URL = `${ENDPOINT}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
        const response = await fetch(URL);
        const videoData = await response.json();

        if (videoData.videos && videoData.videos.results.length) {
            const trailer = videoData.videos.results.find(vid => vid.type === 'Trailer');
            setVideoKey(trailer ? trailer.key : videoData.videos.results[0].key);
        }
    };

    const viewTrailer = async (movie) => {
        await getMovie(movie.id);
        setOpen(true);
    };

    const closeModal = () => setOpen(false);

    return { movies, videoKey, isOpen, viewTrailer, closeModal };
};
