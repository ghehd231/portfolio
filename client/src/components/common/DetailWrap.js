import React from 'react';
import styled from 'styled-components';
const DetailWrap = ({ children, direction }) => {
  return (
    <Wrap direction={direction}>
      {children}
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 2rem;

  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: ${props => props.direction};
  overflow: hidden;
  @media only screen and (max-width: 600px) {
    padding: 2rem 1rem;
  }
`;
export default DetailWrap;
