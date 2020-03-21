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
  InfoContainer,
  SimilarMoviesContainer,
  SimilarMoviesGrid
} from '../styles/styled-components';
import PosterUnavailable from '../images/poster_unavailable.png';
import SimilarMovie from './SimilarMovie';

const MovieCard = ({ movie, toggleWatchlist, gridItems }) => {
  const dispatch = useDispatch();
  const [movieDetails, setMovieDetails] = useState(movie);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [similarMovieDetails, setSimilarMovieDetails] = useState(null);

  const { watchlisted, id, poster_path, title, tagline } = similarMovieDetails
    ? similarMovieDetails
    : movieDetails;

  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
    if (!modal) {
      fetchSimilarMovies();
    } else {
      setSimilarMovieDetails(null);
    }
  };

  let IMG_MOVIE_CARD = `https://image.tmdb.org/t/p/w780${movieDetails.poster_path}`;
  if (!poster_path && !IMG_MOVIE_CARD) {
    IMG_MOVIE_CARD = PosterUnavailable;
  }

  // Changes when similar movie is selected
  let IMG_THUMBNAIL_URL = `https://image.tmdb.org/t/p/w500${poster_path}`;
  if (!poster_path) {
    IMG_THUMBNAIL_URL = PosterUnavailable;
  }

  const fetchMovieDetails = async (movieId = id) => {
    const details = await axios.get(`/movies/${movieId}`);

    setMovieDetails(details.data);
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
    const similarMovieDetails = fetchSimilarMovieDetails(id);
    setSimilarMovieDetails(similarMovieDetails);
    fetchSimilarMovies(id);
  };

  useEffect(() => {
    const fetchAsync = async () => {
      fetchMovieDetails();
    };
    fetchAsync();
  }, []);

  //   onClick={() => dispatch(toggleWatchlist(movie))}
  return (
    <Movie background_img={`url(${IMG_MOVIE_CARD})`} onClick={toggle}>
      <CustomModal isOpen={modal} toggle={toggle}>
        <CustomModalBody>
          <CloseButton onClick={toggle} />
          <MainDiv>
            <ImageContainer
              background_img={`url(${IMG_THUMBNAIL_URL})`}
            ></ImageContainer>
            <InfoContainer>
              <h1>{title}</h1>
              <h2>{tagline}</h2>
              <h1>{title}</h1>
              <h2>{tagline}</h2>
            </InfoContainer>
          </MainDiv>
          <SimilarMoviesContainer>
            <SimilarMoviesGrid>
              {similarMovies.slice(0, gridItems).map(movie => (
                <SimilarMovie
                  key={movie.id}
                  id={movie.id}
                  change={changeToSimilarMovie}
                  posterPath={`url(https://image.tmdb.org/t/p/w500${movie.poster_path})`}
                />
              ))}
            </SimilarMoviesGrid>
          </SimilarMoviesContainer>
        </CustomModalBody>
      </CustomModal>
    </Movie>
  );
};

export default MovieCard;
