import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useProjectState } from '../contexts/projects';
import Summary from '../components/detail/Summary';
import Content from '../components/detail/Content';
const Detail = () => {
  const { projectId } = useParams();
  const projectState = useProjectState();

  const project = projectState.filter(project => project.id === Number(projectId))[0];

  return (
    <DetailContainer>
      <Summary project={project} />
      <Content project={project} />
    </DetailContainer>
  );
};

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;
export default Detail;
