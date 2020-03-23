import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { watchlistState } from '../features/movies/slices/watchlistSlice';
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
  const { watchlist } = useSelector(watchlistState);

  const [movieDetails, setMovieDetails] = useState(movie);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [similarMovieDetails, setSimilarMovieDetails] = useState(null);
  const [isMovieWatchlisted, setIsMovieWatchlisted] = useState(
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
      movieToAdd = {
        watchlisted: !similarMovieDetails.watchlisted,
        ...similarMovieDetails
      };
      setSimilarMovieDetails({
        ...similarMovieDetails,
        watchlisted: !similarMovieDetails.watchlisted
      });
      console.log(movieToAdd);
      //   if (movieToAdd.watchlisted) {
      //     setIsMovieWatchlisted(true);
      //   } else {
      //     setIsMovieWatchlisted(false);
      //   }

      //   if (watchlist.includes(similarMovieDetails)) {}
      //   setIsSimilarMovieWatchlisted(1);
      // Keeps track of similar movies in watchlist (for styling of heart icon)
      //   setSimilarMoviesInWatchlist(prevState => [
      //     ...prevState,
      //     similarMovieDetails.id
      //   ]);
    } else {
      movieToAdd = movieDetails;
      //   setIsSimilarMovieWatchlisted(0);
    }

    dispatch(toggleWatchlist(movieToAdd));
    // checkIfWatchlisted();
  };

  console.log(watchlist);

  // Checks if movie in modal is watchlisted
  const checkIfWatchlisted = () => {
    const movieToCheck = similarMovieDetails
      ? similarMovieDetails
      : movieDetails;

    const found = watchlist.find(movie => movie.id === movieToCheck.id);

    if (found) {
      setIsMovieWatchlisted(true);
    } else {
      setIsMovieWatchlisted(false);
    }
    // console.log(watchlist.includes(similarMovieDetails));
    // // console.log(watchlisted || watchlist.includes(similarMovieDetails));
    // if (similarMovieDetails) {
    //   if (similarMovieDetails.watchlisted) {
    //     setIsMovieWatchlisted(true);
    //   } else {
    //     setIsMovieWatchlisted(false);
    //   }
    // } else {
    //   if (movie.watchlisted) {
    //     setIsMovieWatchlisted(true);
    //   } else {
    //     setIsMovieWatchlisted(false);
    //   }

    // if (movie.watchlisted || watchlist.includes(similarMovieDetails)) {
    //   setIsMovieWatchlisted(true);
    // } else {
    //   setIsMovieWatchlisted(false);
    // }
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
    checkIfWatchlisted();
  }, [similarMovieDetails, watchlist, isMovieWatchlisted]);

  return (
    <Movie background_img={`url(${IMG_MOVIE_CARD})`} onClick={toggle}>
      <IconContainer onClick={handleWatchlist}>
        <HeartIcon watchlisted={movie.watchlisted ? 1 : 0} />
      </IconContainer>
      <CustomModal isOpen={modal} toggle={toggle}>
        <CustomModalBody>
          <IconContainer onClick={handleWatchlist}>
            <HeartIcon watchlisted={isMovieWatchlisted ? 1 : 0} />
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
