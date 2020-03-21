import styled from 'styled-components';
import { Modal, ModalBody } from 'reactstrap';
import { MdClose } from 'react-icons/md';

/* Containers */
export const FullWidthContainer = styled.section`
  padding: 2rem 0.5rem;

  @media (min-width: 600px) {
    padding: 2rem;
  }

  @media (min-width: 1200px) {
    margin: 2rem auto;
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

/* Headings */
export const MainHeading = styled.h1`
  font-size: 3.5rem;
  text-align: center;
`;

export const Heading = styled.h2`
  font-size: 1.25rem;
`;

/* Pagination */

export const PaginationContainer = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const PreviousPagination = styled.p`
  flex: 50%;
  margin-bottom: 0;
  text-align: left;
  margin-left: 1rem;
`;

export const NextPagination = styled.p`
  flex: 50%;
  margin-bottom: 0;
  text-align: right;
  margin-right: 1rem;
`;

export const PaginationButton = styled.span`
  display: inline-block;
  font-size: 1.125rem;
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
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.background_img};
  min-height: 200px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transform: scale(1);
  transition: background 250ms ease-in, transform 250ms ease-in-out;

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

  @media (min-width: 500px) {
    min-height: 250px;
  }

  @media (min-width: 750px) {
    min-height: 375px;
  }
`;

/* Movie Modal */
export const CloseButton = styled(MdClose)`
  color: red;
  font-size: 2rem;
  position: absolute;
  right: 6px;
  top: 3px;
`;

export const CustomModal = styled(Modal)`
  /* transform: translate(0%, 30%) !important; */
  top: 15%;
`;

export const CustomModalBody = styled(ModalBody)`
  min-height: 550px;
  /* margin: 0.5rem; */
`;

export const MainDiv = styled.div`
  /* border: 2px solid black; */
  margin: 1.25rem 0 0 !important;
  display: flex;
`;

export const ImageContainer = styled.div`
  flex: 50%;
  min-height: 150px;
  max-height: 180px;
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.background_img};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const InfoContainer = styled.div`
  flex: 50%;
  padding-left: 0.25rem;

  h1,
  h2 {
    margin-bottom: 0;
  }
  /* Title */
  h1 {
    font-size: 1.5rem;
  }
  /* Tagline */
  h2 {
    font-size: 1rem;
  }
`;

export const SimilarMoviesContainer = styled.section`
  min-height: 150px;
  border-radius: ${props => props.theme.borderRadius};
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
  /* background-repeat: no-repeat; */
`;

export const SimilarMoviesHeading = styled.h2`
  font-size: 1.25rem;
`;
