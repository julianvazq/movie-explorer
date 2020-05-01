import React from 'react';
import {
  FullWidthContainer,
  IconContainer,
  HeartIcon,
} from '../styles/styled-components';
import styled from 'styled-components';
import IronManImageMedium from '../images/iron_man_md.jpg';
import IronManImageLarge from '../images/iron_man_lg.jpg';

const FullWidthBackground = styled(FullWidthContainer)`
  color: #fff;

  @media (min-width: 1px) {
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(${IronManImageMedium});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
  }

  @media (min-width: 850px) {
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(${IronManImageLarge});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: unset;
  }
`;

const Container = styled.section`
  max-width: 1200px;
  min-height: 90vh;
  text-align: center;
  margin: 0 0.5rem 2rem;
  padding: 2rem 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 600px) {
    padding: 2rem 2rem;
  }

  @media (min-width: 1200px) {
    margin: 0 auto 2rem;
  }
`;

const MainHeading = styled.h1`
  font-size: 4rem;
  text-align: center;
`;

const SubHeading = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: #c3c3c3;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  max-width: 500px;
  margin: 4rem auto 0 auto;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: ${(props) => props.theme.borderRadius};
`;

const Heart = styled(HeartIcon)`
  color: ${(props) => props.theme.red};
`;

const InnerIconContainer = styled(IconContainer)`
  position: relative;
  top: 10px;
  left: 13px;
  flex-basis: 45px;
  cursor: none;
`;

const Paragraph = styled.p`
  flex: 100%;
  font-size: 1.125rem;
  padding-left: 2rem;
  margin-bottom: 0;
  text-align: left;
`;

const HeroSection = () => {
  return (
    <div style={{ background: 'hsl(250, 40%, 5%)' }}>
      <FullWidthBackground>
        <Container>
          <MainHeading>Movie Explorer</MainHeading>
          <SubHeading>Discover awesome movies.</SubHeading>
          <FlexContainer>
            <InnerIconContainer>
              <Heart />
            </InnerIconContainer>
            <Paragraph>click the heart icon to add to watchlist</Paragraph>
          </FlexContainer>
        </Container>
      </FullWidthBackground>
    </div>
  );
};

export default HeroSection;
