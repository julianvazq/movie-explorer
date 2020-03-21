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
  SimilarMoviesContainer
} from '../styles/styled-components';
import PosterUnavailable from '../images/poster_unavailable.png';

const MovieCard = ({ movie, toggleWatchlist }) => {
  const dispatch = useDispatch();
  const [movieDetails, setMovieDetails] = useState(movie);
  const [similarMovies, setSimilarMovies] = useState([]);
  const { watchlisted, id, poster_path, title, tagline } = movieDetails;

  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
    if (!modal) {
      fetchSimilarMovies();
    }
  };

  let IMG_URL = `https://image.tmdb.org/t/p/w500${poster_path}`;
  if (!poster_path) {
    IMG_URL = PosterUnavailable;
  }

  const fetchSimilarMovies = async () => {
    const similarMovies = await axios.get(`/movies/${id}/similar/1`);
    setSimilarMovies(similarMovies.data.results);
  };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const details = await axios.get(`/movies/${id}`);
      setMovieDetails(details.data);
    };
    fetchMovieDetails();
  }, []);

  //   onClick={() => dispatch(toggleWatchlist(movie))}
  return (
    <Movie background_img={`url(${IMG_URL})`} onClick={toggle}>
      <CustomModal isOpen={modal} toggle={toggle}>
        <CustomModalBody>
          <CloseButton />
          <MainDiv>
            <ImageContainer background_img={`url(${IMG_URL})`}>
              {/* <img src={IMG_URL} alt={title} /> */}
            </ImageContainer>
            <InfoContainer>
              <h1>{title}</h1>
              <h2>{tagline}</h2>
              <h1>{title}</h1>
              <h2>{tagline}</h2>
            </InfoContainer>
          </MainDiv>
          <SimilarMoviesContainer></SimilarMoviesContainer>
        </CustomModalBody>
      </CustomModal>
    </Movie>
  );
};

export default MovieCard;
