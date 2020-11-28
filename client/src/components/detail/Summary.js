import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import DetailWrap from '../common/DetailWrap';
import Button from '../common/Button';
import { useHistory } from 'react-router-dom';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { AiOutlinePlaySquare } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';
const Summary = ({ project }) => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <SummaryContainer>
      <DetailWrap direction="row">
        <ImgBox>
          <img src={`../${project.thumbnail}`} />
        </ImgBox>
        <DescBox>
          <Title>
            {project.title}
          </Title>
          <p>
            {project.summary}
          </p>
          <LinkBox>
            <Button onClick={goBack} iconright="true" mini="true">
              <RiArrowGoBackLine />돌아가기
            </Button>
            {project.demo &&
              <Button
                to={{
                  pathname: project.demo,
                }}
                target="_blank"
                iconright="true"
                mini="true"
                marginleft="true"
              >
                <AiOutlinePlaySquare />
                demo
              </Button>}
            {project.notion &&
              <Button
                to={{ pathname: project.notion }}
                target="_blank"
                iconright="true"
                mini="true"
                marginleft="true"
              >
                <SiNotion />
                Notion
              </Button>}
            <Button
              to={
                project.github
                  ? {
                      pathname: project.github,
                    }
                  : ''
              }
              target="_blank"
              iconright="true"
              mini="true"
              marginleft="true"
              disable={project.github ? false : true}
            >
              <FaGithub />
              {project.github ? 'GitHub' : 'Private'}
            </Button>
          </LinkBox>
        </DescBox>
      </DetailWrap>
    </SummaryContainer>
  );
};

const SummaryContainer = styled.section`
  width: 100%;
  height: 23%;
  display: flex;
  border-bottom: 1px solid ${palette.gray};
  color: ${palette.white};
  @media only screen and (max-width: 850px) {
    height: 20%;
  }
  @media only screen and (max-width: 600px) {
    height: 15%;
    min-height: 10rem;
  }
  @media only screen and (max-width: 450px) {
    height: unset;
  }
`;
const ImgBox = styled.div`
  width: 15rem;
  height: 100%;
  overflow: hidden;
  & > img {
    height: 100%;
  }
  @media only screen and (max-width: 450px) {
    display: none;
  }
`;
const DescBox = styled.div`
  margin-left: 1rem;
  & > p {
    font-size: 0.9rem;
    margin: 0.7rem 0;
    color: ${palette.text_gray};
    @media only screen and (max-width: 600px) {
      font-size: 0.8rem;
      margin: 0.5rem 0;
    }
  }
  @media only screen and (max-width: 450px) {
    margin-left: 0;
  }
`;
const Title = styled.h1`
  margin: 0;
  @media only screen and (max-width: 850px) {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.3rem;
  }
`;
const LinkBox = styled.div`display: flex;`;
export default React.memo(Summary);
