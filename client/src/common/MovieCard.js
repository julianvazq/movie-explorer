import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  watchlistState,
  remove,
} from '../features/movies/slices/watchlistSlice';
import axios from 'axios';
import {
  Movie,
  CustomModal,
  CustomModalBody,
  MainDiv,
  CloseButton,
  ImageContainer,
  MovieHeader,
  MovieImage,
  DetailsContainer,
  Details,
  Description,
  IconContainer,
  HeartIcon,
} from '../styles/styled-components';
import SimilarMoviesSection from './SimilarMoviesSection';
import PosterUnavailable from '../images/poster_unavailable.png';

const MovieCard = ({ movie, toggleWatchlist, gridItems }) => {
  const dispatch = useDispatch();
  const { watchlist } = useSelector(watchlistState);

  const [movieDetails, setMovieDetails] = useState(movie);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [similarMovieDetails, setSimilarMovieDetails] = useState(null);
  const [isMovieModalWatchlisted, setIsMovieModalWatchlisted] = useState(
    movie.watchlisted
  );

  const {
    watchlisted,
    id,
    poster_path,
    title,
    tagline,
    genres,
    runtime,
    overview,
    release_date,
    original_language,
    budget,
    revenue,
    vote_average,
    homepage,
  } = similarMovieDetails ? similarMovieDetails : movieDetails;

  // For Watchlist Component
  if (!toggleWatchlist) {
    toggleWatchlist = remove;
  }

  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
    if (!modal) {
      fetchSimilarMovies();
    }
    // When modal closes, reset similarmovieDetails to reset modal with
    // original data if users clicks again
    else {
      setSimilarMovieDetails(null);
    }
  };

  let width = 'w500';
  if (gridItems <= 4) {
    width = 'w342';
  } else {
    width = 'w500';
  }

  // Always stays the same
  let IMG_MOVIE_CARD = `https://image.tmdb.org/t/p/${width}${movie.poster_path}`;
  if (!movie.poster_path || !IMG_MOVIE_CARD) {
    IMG_MOVIE_CARD = PosterUnavailable;
  }

  // Changes when similar movie is selected
  let IMG_THUMBNAIL_URL = `https://image.tmdb.org/t/p/w342${poster_path}`;
  if (!poster_path || !IMG_THUMBNAIL_URL) {
    IMG_THUMBNAIL_URL = PosterUnavailable;
  }

  const fetchMovieDetails = async (movieId = id) => {
    const details = await axios.get(`/movies/${movieId}`);
    setMovieDetails({ ...details.data, watchlisted: movie.watchlisted });
  };

  const fetchSimilarMovieDetails = async (id) => {
    const details = await axios.get(`/movies/${id}`);

    const movieWatchlisted = watchlist.find(
      (movie) => movie.id === details.data.id
    );
    if (movieWatchlisted) {
      setSimilarMovieDetails({ ...details.data, watchlisted: true });
    } else {
      setSimilarMovieDetails({ ...details.data, watchlisted: false });
    }

    // setSimilarMovieDetails(details.data);
  };

  const fetchSimilarMovies = async (movieId = id) => {
    const similarMovies = await axios.get(`/movies/${movieId}/similar/1`);
    if (similarMovies.data.results) {
      setSimilarMovies(similarMovies.data.results);
    }
  };

  const changeToSimilarMovie = async (id) => {
    fetchSimilarMovieDetails(id);
    fetchSimilarMovies(id);
  };

  const formatMoney = (num) => {
    const money = num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    return '$' + money;
  };

  const getYear = (date) => {
    const dateObj = new Date(date);
    return dateObj.getFullYear();
  };

  const handleWatchlist = (e) => {
    e.stopPropagation();
    let movieToAdd = null;

    // Checks if movie in modal has changed
    if (similarMovieDetails) {
      movieToAdd = {
        watchlisted: !similarMovieDetails.watchlisted,
        ...similarMovieDetails,
      };
      setSimilarMovieDetails({
        ...similarMovieDetails,
        watchlisted: !similarMovieDetails.watchlisted,
      });
    } else {
      movieToAdd = movieDetails;
    }

    dispatch(toggleWatchlist(movieToAdd));
  };

  const checkIfMovieCardWatchlisted = () => {
    const movieToCheck = movieDetails;

    const found = watchlist.find((movie) => movie.id === movieToCheck.id);

    // Using 1s and 0s because of Styled Components limitation with boolean props
    if (found) {
      return 1;
    } else {
      return 0;
    }
  };

  // Checks if movie in modal is watchlisted
  const checkIfMovieModalWatchlisted = () => {
    const movieToCheck = similarMovieDetails
      ? similarMovieDetails
      : movieDetails;

    const found = watchlist.find((movie) => movie.id === movieToCheck.id);

    if (found) {
      setIsMovieModalWatchlisted(true);
    } else {
      setIsMovieModalWatchlisted(false);
    }
  };

  useEffect(() => {
    const fetchAsync = async () => {
      fetchMovieDetails();
    };
    fetchAsync();
  }, []);

  // Makes sure "watchlisted" stays in sync with client state
  // (b/c when movieDetails is fetched the server passes "watchlisted": false)
  useEffect(() => {
    setMovieDetails({ ...movieDetails, watchlisted: movie.watchlisted });
  }, [movie.watchlisted]);

  // When similar movie selected, check if watchlisted
  useEffect(() => {
    checkIfMovieModalWatchlisted();
  }, [similarMovieDetails, watchlist]);

  return (
    <Movie background_img={`url(${IMG_MOVIE_CARD})`} onClick={toggle}>
      <h1>{title}</h1>
      <IconContainer onClick={handleWatchlist}>
        <HeartIcon watchlisted={checkIfMovieCardWatchlisted()} />
      </IconContainer>
      <CustomModal isOpen={modal} toggle={toggle}>
        <CustomModalBody>
          <IconContainer onClick={handleWatchlist}>
            <HeartIcon watchlisted={isMovieModalWatchlisted ? 1 : 0} />
          </IconContainer>
          <CloseButton onClick={toggle} />
          <MainDiv>
            <ImageContainer>
              <MovieImage src={`${IMG_THUMBNAIL_URL}`}></MovieImage>
            </ImageContainer>
            <MovieHeader>
              <h1>{title}</h1>
              <h2>{tagline}</h2>
              <DetailsContainer>
                {genres && (
                  <Details>
                    <h3>Genres</h3>
                    {genres.slice(0, 3).map((genre) => (
                      <p key={genre.id}>{genre.name}</p>
                    ))}
                  </Details>
                )}
                {runtime ? (
                  <Details>
                    <h3>Runtime</h3>
                    <p>{runtime} minutes</p>
                  </Details>
                ) : null}
                {release_date ? (
                  <Details hidden={window.innerWidth < 375 ? true : false}>
                    <h3>Released</h3>
                    <p>{getYear(release_date)}</p>
                  </Details>
                ) : null}
                {vote_average ? (
                  <Details hidden={window.innerWidth < 375 ? true : false}>
                    <h3>Rating</h3>
                    <p>{vote_average}</p>
                  </Details>
                ) : null}
                {original_language ? (
                  <Details hidden={window.innerWidth < 450 ? true : false}>
                    <h3>Language</h3>
                    <p>{original_language.toUpperCase()}</p>
                  </Details>
                ) : null}
                {homepage ? (
                  <Details hidden={window.innerWidth < 450 ? true : false}>
                    <h3>Website</h3>
                    <p>
                      <a href={homepage}>Link</a>
                    </p>
                  </Details>
                ) : null}
                {budget ? (
                  <Details hidden={window.innerWidth < 450 ? true : false}>
                    <h3>Budget</h3>
                    <p>{formatMoney(budget)}</p>
                  </Details>
                ) : null}
                {revenue ? (
                  <Details hidden={window.innerWidth < 450 ? true : false}>
                    <h3>Revenue</h3>
                    <p>{formatMoney(revenue)}</p>
                  </Details>
                ) : null}
              </DetailsContainer>
            </MovieHeader>
          </MainDiv>
          {overview && <Description>{overview}</Description>}
          <SimilarMoviesSection
            similarMovies={similarMovies}
            gridItems={gridItems}
            change={changeToSimilarMovie}
          />
        </CustomModalBody>
      </CustomModal>
    </Movie>
  );
};

export default MovieCard;
