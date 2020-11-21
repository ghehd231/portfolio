import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import DetailWrap from '../common/DetailWrap';
import StackItem from '../common/StackItem';

const ContentSection = ({ project }) => {
  const [windowHeight, reWindowHeight] = useState(window.innerHeight);

  useEffect(
    () => {
      // resizeWindow();
      window.addEventListener('resize', resizeWindow);
      return () => window.removeEventListener('resize', resizeWindow);
    },
    [windowHeight],
  );

  const resizeWindow = () => {
    reWindowHeight(window.innerHeight);
  };
  return (
    <ContentContainer>
      <DetailWrap direction="column">
        <SubSection>
          <ImgList height={windowHeight}>
            {project.image.map((img, i) =>
              <img key={i} src={`../images/project/${img}.png`} alt="project" />,
            )}
          </ImgList>
        </SubSection>
        <SubSection>
          <h1>소개 역활</h1>
          <p>
            {project.desc}
          </p>
        </SubSection>
        <SubSection>
          <h1>사용 기술</h1>
          <StackWrap>
            {project.stack.map((stack, i) => <StackItem key={i} stack={stack} />)}
          </StackWrap>
        </SubSection>
      </DetailWrap>
    </ContentContainer>
  );
};

const ContentContainer = styled.section`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  flex: 1;
`;

const SubSection = styled.div`
  width: 100%;
  color: ${palette.white};
  font-size: 1rem;
  flex: 2;
  & + & {
    flex: 1;
  }
  @media only screen and (max-width: 450px) {
    font-size: 0.8rem;
  }
  h1 {
    font-size: 1.5rem;
    margin: 1rem 0 0.5rem 0;
    @media only screen and (max-width: 450px) {
      font-size: 1.3rem;
    }
  }
`;

const ImgList = styled.div`
  display: flex;
  overflow-x: auto;
  height: 25rem;
  padding-bottom: 1rem;

  ${({ height }) => `max-height: ${Math.floor(height / 5) * 2 + 50}px;`};
  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    background: ${palette.gray};
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 6px;
  }
  @media only screen and (max-width: 450px) {
    height: 15rem;
  }
  img {
    height: 100%;
    margin-right: 1rem;
  }
`;
const StackWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  white-space: nowrap;
`;

export default ContentSection;
