import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';

const Project = ({ item }) => {
  return (
    <ProjectItem to={`/detail:${item.id}`}>
      <ImageBox>
        <img src={`../images/project/thumb/${item.thumbnail}.png`} alt="project thumbnail" />
      </ImageBox>
      <Title>
        {item.title}
      </Title>
      <SubText>
        <StackContainer>
          {item.stack.map((stack, index) =>
            <StackItem key={index}>
              {stack}
            </StackItem>,
          )}
        </StackContainer>
      </SubText>
      <SubText>
        {item.summary}
      </SubText>
    </ProjectItem>
  );
};

const ProjectItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 18rem;
  color: ${palette.white};
  cursor: pointer;
  padding: 1rem;
  & + & {
    margin-left: 0.5rem;
  }
  
`;

const ImageBox = styled.div`
  margin-bottom: 0.5rem;
  width: 100%;

  border-radius: 10px;
  overflow: hidden;
  & > img {
    width: 100%;
    min-width: 210px;
    height: 100%;
    min-height: 140px;
  }
`;

const Title = styled.div`
  font-size: 1.5rem;
  color: ${palette.white};
  font-weight: 600;

  align-items: center;
  margin: 0.88rem 0;
`;

const SubText = styled.span`
  font-size: 1rem;
  color: ${palette.text_gray};
`;

const StackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  white-space: nowrap;
`;

const StackItem = styled.span`
  border: 1px solid ${palette.gray};
  border-radius: 4px;
  padding: 0 0.3rem;
  margin: 0 0.4rem 0.4rem 0;
  word-break: break-all;
  background: ${palette.button.bgDarkGray};
  color: ${palette.button.red};
  font-size: 0.88rem;
`;
export default Project;
