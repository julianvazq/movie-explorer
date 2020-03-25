import React from 'react';
import styled from 'styled-components';

const AlertContainer = styled.div`
  text-align: center;

  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    color: ${props => props.theme.grayLight};
  }

  a {
    cursor: pointer;
    font-size: 1.25rem;
    font-weight: bold;
    letter-spacing: 0.5px;
    padding: 0.75rem 1rem;
    border-radius: ${props => props.theme.borderRadius};
    color: ${props => props.theme.light};
    border: 1px solid ${props => props.theme.gold};
    text-decoration: none !important;
    transition: background 250ms ease-in;

    &:hover {
      color: ${props => props.theme.dark};
      background: ${props => props.theme.gold};
    }
  }
`;

const Alert = ({ children }) => {
  return <AlertContainer>{children}</AlertContainer>;
};

export default Alert;
