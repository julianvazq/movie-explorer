import React from 'react';
import styled from 'styled-components';

const AlertContainer = styled.div`
  text-align: center;
`;

const Message = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.grayLight};
`;

const Alert = ({ message, button }) => {
  return (
    <AlertContainer>
      <Message>{message}</Message>
      {button}
    </AlertContainer>
  );
};

export default Alert;
