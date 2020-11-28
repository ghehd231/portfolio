import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import StackItem from '../../common/StackItem';

const Project = ({ item }) => {
  return (
    <ProjectItem to={`/detail/${item.id}`}>
      <ImageBox img={item.thumbnail}>
        {/* <img src={`../images/project/thumb/${item.thumbnail}.png`} alt="project thumbnail" /> */}
      </ImageBox>
      <MetaBox>
        <TypeText>
          {item.type} project
        </TypeText>
        <Title>
          {item.title}
        </Title>
        <SubText>
          {item.summary}
        </SubText>

        <StackContainer>
          {item.stack.map((stack, index) => <StackItem key={index} stack={stack} />)}
        </StackContainer>
      </MetaBox>
    </ProjectItem>
  );
};

const ProjectItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% / 4);
  color: ${palette.white};
  cursor: pointer;
  padding: 1rem;
  
  @media only screen and (max-width: 1200px) {
    /* width: 32%; */
    width: calc(100% / 3);
  }
  @media only screen and (max-width: 850px) {
    /* width: 48%; */
    width: calc(100% / 2);
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    flex-direction: row;
    padding: 1rem 0;
    height: 11rem;
    margin-left: 0;
    
  }
  
  
`;

const ImageBox = styled.div`
  margin-bottom: 0.5rem;
  width: 100%;
  height: 10rem;
  border-radius: 10px;
  overflow: hidden;
  /* & > img {
    width: 100%;
    height: 100%;
    min-width: 210px;
    min-height: 140px;
  } */
  background: ${props => `url("${props.img}")`};
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  @media only screen and (max-width: 600px) {
    flex: 1;
    height: 100%;
  }
`;

const TypeText = styled.span`
  color: ${palette.white};
  font-size: 0.8rem;
  @media only screen and (max-width: 480px) {
    font-size: 1rem;
    margin: 0.1rem 0 0.3rem;
  }
`;

const Title = styled.div`
  font-size: 1.5rem;
  color: ${palette.white};
  font-weight: 600;
  align-items: center;
  margin: 0.1rem 0 0.5rem;
`;

const MetaBox = styled.div`
  @media only screen and (max-width: 600px) {
    width: 60%;
    margin-left: 1rem;
  }
`;

const SubText = styled.span`
  font-size: 1rem;
  color: ${palette.text_gray};
  word-break: keep-all;
  margin-bottom: 0.2rem;
  @media only screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const StackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media only screen and (max-width: 480px) {
    max-height: 9vh;
    overflow: scroll;
    /* &::-webkit-scrollbar {
      width: 0px;
    } */
  }
`;

export default React.memo(Project);
