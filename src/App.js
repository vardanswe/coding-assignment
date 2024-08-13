import { Routes, Route, createSearchParams, useSearchParams, useNavigate } from 'react-router-dom';
import { useMovies } from './hooks/useMovies';
import Header from './components/Header/Header';
import Movies from './components/Movies/Movies';
import Starred from './components/Starred/Starred';
import WatchLater from './components/WatchLater/WatchLater';
import Modal from './components/Modal/Modal';
import './styles/app.scss';

const App = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const navigate = useNavigate();
  const { movies, videoKey, isOpen, viewTrailer, closeModal } = useMovies(searchQuery);

  const searchMovies = (query) => {
    navigate('/');
    setSearchParams(createSearchParams({ search: query }));
  };

  return (
      <div className="App">
        <Header searchMovies={searchMovies} searchParams={searchParams} setSearchParams={setSearchParams} />

        <div className="container">
          <Routes>
            <Route path="/" element={<Movies movies={movies} viewTrailer={viewTrailer} />} />
            <Route path="/starred" element={<Starred viewTrailer={viewTrailer} />} />
            <Route path="/watch-later" element={<WatchLater viewTrailer={viewTrailer} />} />
            <Route path="*" element={<h1 className="not-found">Page Not Found</h1>} />
          </Routes>

          <Modal isOpen={isOpen} onClose={closeModal} videoKey={videoKey} />
        </div>
      </div>
  );
};

export default App;
