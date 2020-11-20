import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import BgSection from '../common/BgSection';
import Button from '../common/Button';
import { FaBars, FaGithub } from 'react-icons/fa';

const Head = () => {
  return (
    <BgSection bgName="main-bg4" column>
      <div>
        <Title>About</Title>
      </div>
      <ButtonBox>
        {links.map(link => <ButtonLink key={link.id} link={link} />)}
      </ButtonBox>
    </BgSection>
  );
};

const ButtonLink = ({ link }) => {
  return (
    <Button
      to={{
        pathname: link.path,
      }}
      target="_blank"
    >
      {link.name}
      {link.icon}
    </Button>
  );
};

const Title = styled.h1`
  color: ${palette.white};
  font-size: 2.7rem;
  font-weight: 700;
  margin: 0rem 0;
  & > span {
    font-weight: 500;
    font-size: 2.2rem;
  }
`;
const ButtonBox = styled.div`display: flex;`;

const links = [
  {
    id: 1,
    name: 'Resume',
    path: 'https://www.notion.so/ghehd231/Hello-world-cc9096d09e024843a0db40f584e7b7b7',
    icon: <FaBars />,
  },
  {
    id: 2,
    name: 'Github',
    path: 'https://github.com/ghehd231',
    icon: <FaGithub />,
  },
];
export default Head;
