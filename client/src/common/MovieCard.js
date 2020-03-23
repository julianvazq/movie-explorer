import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
  HeartIcon
} from '../styles/styled-components';
import SimilarMoviesSection from './SimilarMoviesSection';
import PosterUnavailable from '../images/poster_unavailable.png';

const MovieCard = ({ movie, toggleWatchlist, gridItems }) => {
  const dispatch = useDispatch();
  const [movieDetails, setMovieDetails] = useState(movie);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [similarMovieDetails, setSimilarMovieDetails] = useState(null);
  const [similarMoviesInWatchlist, setSimilarMoviesInWatchlist] = useState([]);

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
    revenue
  } = similarMovieDetails ? similarMovieDetails : movieDetails;

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

  // Always stays the same
  let IMG_MOVIE_CARD = `https://image.tmdb.org/t/p/w780${movie.poster_path}`;
  if (!movie.poster_path || !IMG_MOVIE_CARD) {
    IMG_MOVIE_CARD = PosterUnavailable;
  }

  // Changes when similar movie is selected
  let IMG_THUMBNAIL_URL = `https://image.tmdb.org/t/p/w500${poster_path}`;
  if (!poster_path && !IMG_THUMBNAIL_URL) {
    IMG_THUMBNAIL_URL = PosterUnavailable;
  }

  const fetchMovieDetails = async (movieId = id) => {
    const details = await axios.get(`/movies/${movieId}`);
    console.log('movie props: ', movie);
    console.log('new movie details: ', movieDetails);
    setMovieDetails({ ...details.data, watchlisted: movie.watchlisted });
  };

  const fetchSimilarMovieDetails = async id => {
    const details = await axios.get(`/movies/${id}`);
    setSimilarMovieDetails(details.data);
  };

  const fetchSimilarMovies = async (movieId = id) => {
    const similarMovies = await axios.get(`/movies/${movieId}/similar/1`);
    setSimilarMovies(similarMovies.data.results);
  };

  const changeToSimilarMovie = async id => {
    fetchSimilarMovieDetails(id);
    fetchSimilarMovies(id);
  };

  const formatMoney = num => {
    const money = num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    return '$' + money;
  };

  const handleWatchlist = e => {
    e.stopPropagation();
    let movieToAdd = null;

    // Checks if movie in modal has changed
    if (similarMovieDetails) {
      movieToAdd = similarMovieDetails;
      // Keeps track of similar movies in watchlist (for styling of heart icon)
      setSimilarMoviesInWatchlist(prevState => [
        ...prevState,
        similarMovieDetails.id
      ]);
    } else {
      movieToAdd = movieDetails;
    }

    dispatch(toggleWatchlist(movieToAdd));
  };

  //   const checkIfWatchlisted = () => {
  //     if (watchlisted || similarMoviesInWatchlist.includes(similar))
  //   }

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

  return (
    <Movie background_img={`url(${IMG_MOVIE_CARD})`} onClick={toggle}>
      <IconContainer
        watchlisted={movie.watchlisted ? 1 : 0}
        onClick={handleWatchlist}
      >
        <HeartIcon watchlisted={watchlisted ? 1 : 0} />
      </IconContainer>
      <CustomModal isOpen={modal} toggle={toggle}>
        <CustomModalBody>
          <IconContainer
            watchlisted={watchlisted ? 1 : 0}
            onClick={handleWatchlist}
          >
            <HeartIcon watchlisted={watchlisted ? 1 : 0} />
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
                    {genres.slice(0, 3).map(genre => (
                      <p key={genre.id}>{genre.name}</p>
                    ))}
                  </Details>
                )}
                <Details>
                  <h3>Runtime</h3>
                  <p>{runtime} minutes</p>
                </Details>
                <Details hidden={window.innerWidth < 450 ? true : false}>
                  <h3>Released</h3>
                  <p>{release_date}</p>
                </Details>
                <Details hidden={window.innerWidth < 450 ? true : false}>
                  <h3>Language</h3>
                  <p>{original_language.toUpperCase()}</p>
                </Details>
                {budget ? (
                  <Details hidden={window.innerWidth < 500 ? true : false}>
                    <h3>Budget</h3>
                    <p>{formatMoney(budget)}</p>
                  </Details>
                ) : null}
                {revenue ? (
                  <Details hidden={window.innerWidth < 500 ? true : false}>
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
