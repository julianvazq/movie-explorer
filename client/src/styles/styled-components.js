import styled from 'styled-components';
import { Modal, ModalBody } from 'reactstrap';
import { MdClose } from 'react-icons/md';

/* Containers */
export const FullWidthContainer = styled.section`
  padding: 2rem 0.5rem;
  background-color: ${props => props.theme.dark};

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
  margin-top: 1rem;
  margin-bottom: 0.5rem;
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
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${props => props.theme.goldSecondary};
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
  background: ${props => props.theme.gray} !important;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.22), 0 2px 2px rgba(0, 0, 0, 0.22),
    0 4px 4px rgba(0, 0, 0, 0.22), 0 8px 8px rgba(0, 0, 0, 0.22),
    0 16px 16px rgba(0, 0, 0, 0.22);
  top: 9%;

  @media (min-width: 600px) {
    top: 0%;
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
  height: 222px;
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
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 450px) {
    flex-direction: row;
  }
`;

export const Details = styled.div`
  h3 {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${props => props.theme.gold};
    margin: 0.5rem 0 0.25rem !important;
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
  min-height: 150px;
  padding: 1.125rem;
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.theme.dark};
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
`;

export const SimilarMoviesHeading = styled.h2`
  font-size: 1.25rem;
  color: ${props => props.theme.light};
`;
