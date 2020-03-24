import styled from 'styled-components';
import { Modal, ModalBody, Badge } from 'reactstrap';
import { MdClose } from 'react-icons/md';
import { FaHeart } from 'react-icons/fa';

/* Containers */
export const FullWidthContainer = styled.section`
  padding: 2rem 0.5rem;
  background-color: ${props => props.theme.dark};
  min-height: 100vh;

  @media (min-width: 600px) {
    padding: 2rem;
  }

  @media (min-width: 1200px) {
    margin: 0rem auto;
  }
`;

export const Container = styled.section`
  max-width: 1200px;
  min-height: 90vh;
  margin: 0 0.5rem 2rem;
  padding: 2rem 0.5rem;
  background: gray;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.07),
    0 6.7px 5.3px rgba(0, 0, 0, 0.05), 0 12.5px 10px rgba(0, 0, 0, 0.042),
    0 22.3px 17.9px rgba(0, 0, 0, 0.035), 0 41.8px 33.4px rgba(0, 0, 0, 0.028),
    0 100px 80px rgba(0, 0, 0, 0.02);

  @media (min-width: 600px) {
    padding: 2rem 2rem;
  }

  @media (min-width: 1200px) {
    margin: 0 auto 2rem;
  }
`;

export const MovieSectionContainer = styled.div`
  margin-bottom: 2rem;
`;

/* Headings */
export const MainHeading = styled.h1`
  font-size: 3.5rem;
  text-align: center;
`;

export const Heading = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 0;
  padding-bottom: 0.5rem;
  display: inline-block;
  border-bottom: 1.5px solid ${props => props.theme.gold};
  color: ${props => props.theme.light};

  @media (min-width: 500px) {
    font-size: 1.5rem;
  }

  @media (min-width: 500px) {
    font-size: 1.5rem;
  }
`;

/* Pagination */
export const PaginationContainer = styled.div`
  display: flex;
`;

export const PreviousPagination = styled.p`
  flex: 50%;
  margin-bottom: 0;
  text-align: left;
`;

export const NextPagination = styled.p`
  flex: 50%;
  margin-bottom: 0;
  text-align: right;
`;

export const PaginationButton = styled.span`
  display: inline-block;
  padding: 1rem 1rem 0.5rem;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: bold;
  color: ${props => props.theme.grayLight};
  cursor: pointer;
`;

/* Movie Grid */
export const Grid = styled.div`
  display: grid;
  grid-gap: 0.25rem;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 375px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 700px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

/* Movie Card */
export const Movie = styled.article`
  box-shadow: 0px 0px 5px 1px rgba(133, 133, 133, 0.15);
  border-radius: ${props => props.theme.borderRadius};
  background: ${props =>
    props.background_img ? props.background_img : props.theme.dark};
  min-height: 200px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transform: scale(1);
  transition: background 250ms ease-in, transform 250ms ease-in-out;
  color: ${props => props.theme.light};
  display: flex;

  h1 {
    font-size: 0.8rem;
    opacity: 0;
    transition: opacity 250ms ease-in;
    margin: auto;
    padding: 0 0.5rem;
    align-self: center;
    text-align: center;
  }

  &:hover {
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      ${props => props.background_img};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transform: scale(1.1);
    z-index: 10;
    cursor: pointer;
  }

  &:hover h1 {
    opacity: 1;
  }

  @media (min-width: 500px) {
    min-height: 250px;

    h1 {
      font-size: 1.25rem;
    }
  }

  @media (min-width: 750px) {
    min-height: 375px;
  }
`;

/* Movie Modal */
export const CustomModal = styled(Modal)`
  background: ${props => props.theme.gray} !important;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.22), 0 2px 2px rgba(0, 0, 0, 0.22),
    0 4px 4px rgba(0, 0, 0, 0.22), 0 8px 8px rgba(0, 0, 0, 0.22),
    0 16px 16px rgba(0, 0, 0, 0.22);
  top: 9%;

  @media (min-width: 600px) {
    top: 0%;
  }

  @media (min-width: 700px) {
    max-width: 600px !important;
  }
`;

export const CustomModalBody = styled(ModalBody)`
  padding: 0;
  background: ${props => props.theme.gray} !important;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.52), 0 2px 2px rgba(0, 0, 0, 0.52),
    0 4px 4px rgba(0, 0, 0, 0.52), 0 8px 8px rgba(0, 0, 0, 0.52),
    0 16px 16px rgba(0, 0, 0, 0.52);
`;

export const MainDiv = styled.div`
  color: ${props => props.theme.light};
  padding: 1.25rem 1.25rem 0.625rem;
  display: flex;
  min-height: 200px;
`;

export const ImageContainer = styled.div`
  flex: 50%;
`;
export const MovieImage = styled.img`
  width: 90%;
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.background_img};
  background-position: left;
  background-size: contain;
  background-repeat: no-repeat;

  @media (min-width: 450px) {
    width: 90%;
    height: auto;
  }
`;

export const MovieHeader = styled.div`
  flex: 50%;
  padding-left: 0.5rem;

  /* Title */
  h1 {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
  }
  /* Tagline */
  h2 {
    font-size: 0.9rem;
    font-weight: 400;
    color: ${props => props.theme.gold};
    margin-bottom: 0;
    margin-top: 0.25rem;
  }

  a {
    color: ${props => props.theme.light};
  }

  @media (min-width: 600px) {
    flex: 75%;
  }
`;

export const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 0.125rem;
  margin-top: 0.5rem;

  @media (min-width: 375px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 0.75rem;
    grid-row-gap: 0.5rem;
  }

  @media (min-width: 450px) {
    /* grid-template-columns: repeat(2, 1fr); */
    /* grid-row-gap: 0.5rem; */
  }
`;

export const Details = styled.div`
  visibility: ${props => (props.hidden ? 'hidden' : 'visible')};

  h3 {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: ${props => props.theme.grayLight} !important;
    margin-bottom: 0.25rem !important;
  }

  p {
    margin-bottom: 0;
    font-size: 0.9rem;
  }

  @media (min-width: 450px) {
    flex: 50%;
  }
`;

export const Description = styled.p`
  margin: 0;
  padding: 0.5rem 1.125rem 1.125rem;
  font-size: 0.9rem;
  color: ${props => props.theme.light};
  line-height: 1.5;
`;

export const SimilarMoviesContainer = styled.section`
  /* min-height: 150px; */
  padding: 1.125rem;
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.theme.dark};

  p {
    margin-bottom: 0;
    color: ${props => props.theme.grayLight};
  }
`;

export const SimilarMoviesGrid = styled.div`
  display: grid;
  grid-gap: 0.25rem;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 375px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 700px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const MovieThumbnail = styled.div`
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.background_img};
  min-height: 150px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const SimilarMoviesHeading = styled.h2`
  font-size: 1.25rem;
  color: ${props => props.theme.light};
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  top: 4px;
  left: 5px;
  height: 35px;
  width: 37px;
  background: hsla(46, 0%, 50%, 0.5);
  transform: scale(1);
  transition: all 250ms ease-in;

  &:hover {
    transform: scale(1.1);
    background: hsla(46, 0%, 50%, 0.5);
  }
`;

/* Icons */
export const HeartIcon = styled(FaHeart)`
  font-size: 1.125rem;
  color: ${props => (props.watchlisted ? props.theme.red : '#fff')};
  transition: color 250ms ease-in;

  ${IconContainer}:hover & {
    color: ${props => props.theme.red};
  }
`;

export const CloseButton = styled(MdClose)`
  color: ${props => props.theme.red};
  font-size: 2rem;
  position: absolute;
  right: 6px;
  top: 3px;
  cursor: pointer;
`;
