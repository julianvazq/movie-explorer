import React from 'react';
import styled from 'styled-components';

const AlertContainer = styled.div`
  text-align: center;
`;

const Alert = ({ message, button }) => {
  const Message = styled.p`
    font-size: 1.25rem;
    margin-bottom: 2rem;
    color: ${props => props.theme.light};
  `;

  return (
    <AlertContainer>
      <Message>{message}</Message>
      {button}
    </AlertContainer>
  );
};

export default Alert;
