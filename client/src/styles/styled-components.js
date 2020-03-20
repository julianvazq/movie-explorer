// import { Button } from 'reactstrap';
import styled from 'styled-components';

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
