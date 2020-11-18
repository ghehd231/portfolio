import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import DetailWrap from '../common/DetailWrap';
import Button from '../common/Button';
import { useHistory } from 'react-router-dom';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { AiOutlinePlaySquare } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
const Summary = ({ project }) => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <SummaryContainer>
      <DetailWrap direction="row">
        <ImgBox>
          <img src={`../images/project/thumb/${project.thumbnail}.png`} />
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
            <Button
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
  height: 20%;
  display: flex;
  border-bottom: 1px solid ${palette.gray};
  color: ${palette.white};
`;
const ImgBox = styled.div`
  width: 15rem;
  & > img {
    width: 100%;
  }
`;
const DescBox = styled.div`
  margin-left: 1rem;
  & > p {
    font-size: 0.9rem;
    color: ${palette.text_gray};
  }
`;
const Title = styled.h1`margin: 0;`;
const LinkBox = styled.div`display: flex;`;
export default Summary;
