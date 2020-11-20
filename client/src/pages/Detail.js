import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useProjectState } from '../contexts/projects';
import Summary from '../components/detail/Summary';

import ContentSection from '../components/detail/ContentSection';

const Detail = () => {
  const { projectId } = useParams();
  const projectState = useProjectState();

  const project = projectState.filter(project => project.id === Number(projectId))[0];

  return (
    <DetailContainer>
      <Summary project={project} />
      <ContentSection project={project} />
    </DetailContainer>
  );
};

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  @media only screen and (max-width: 600px) {
    overflow: auto;
  }
`;
export default Detail;
