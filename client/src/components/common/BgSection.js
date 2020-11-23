import React from "react";
import styled from "styled-components";

const BgSection = ({ bgName, column, children }) => {
  return (
    <>
      <Bg bgName={bgName} />
      <MainBolok>
        <GradientBox>
          <MainWrap column={column}>{children}</MainWrap>
        </GradientBox>
      </MainBolok>
    </>
  );
};
const Bg = styled.div`
  width: 100%;
  height: 32rem;
  position: fixed;
  background: ${(props)=> `url("images/${props.bgName}.${props.bgName.indexOf('gif')>0 ? "gif" : "jpg" }")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  top: 0;
  @media only screen and (max-width: 600px) {
    height: 23rem;
  }
`;
const MainBolok = styled.section`
  width: 100%;
  height: 32rem;
  position: relative;
  @media only screen and (max-width: 600px) {
    height: 23rem;
  }
`;

const GradientBox = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 0;
  height: 15rem;
  align-items: center;
  background: linear-gradient(
    360deg,
    rgba(0, 0, 0, 1) 8.98%,
    rgba(0, 0, 0, 0) 100%
  );
  @media only screen and (max-width: 600px) {
    height: 7.5rem;
  }
`;
const MainWrap = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  height: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 480px) {
    ${(props) =>
     props.column && "flex-direction:column;  align-items: flex-start;"};
    }
`;


export default BgSection;