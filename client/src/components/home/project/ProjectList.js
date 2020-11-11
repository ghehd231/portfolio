import React, { useRef } from 'react';
import styled from 'styled-components';
import Project from './Project';
const ProjectList = () => {
  const onWheel = e => {
    const container = scrollRef.current;
    const containerScrollPosition = scrollRef.current.scrollLeft;
    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
    });
  };

  const scrollRef = useRef(null);

  return (
    <ProjectListBlock onWheel={onWheel} ref={scrollRef}>
      {projects.map(project => <Project key={project.id} project={project} />)}
    </ProjectListBlock>
  );
};

const ProjectListBlock = styled.div`
  display: flex;
  overflow-x: scroll;
  padding-bottom: 1rem;
  &::-webkit-scrollbar {
    /* visibility: hidden; */
    width: 4px;
    height: 4px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.1);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 6px;
  }
`;

const projects = [
  {
    id: 1,
    title: '프로젝트 이름',
    stack: 'react javascript',
    desc: '프로젝트 소개',
    image: '../images/project-sample.png',
  },
  {
    id: 2,
    title: '프로젝트 이름',
    stack: 'react javascript',
    desc: '프로젝트 소개',
    image: '../images/project-sample.png',
  },
  {
    id: 3,
    title: '프로젝트 이름',
    stack: 'react javascript',
    desc: '프로젝트 소개',
    image: '../images/project-sample.png',
  },
  {
    id: 4,
    title: '프로젝트 이름',
    stack: 'react javascript',
    desc: '프로젝트 소개',
    image: '../images/project-sample.png',
  },
  {
    id: 5,
    title: '프로젝트 이름',
    stack: 'react javascript',
    desc: '프로젝트 소개',
    image: '../images/project-sample.png',
  },
  {
    id: 6,
    title: '프로젝트 이름',
    stack: 'react javascript',
    desc: '프로젝트 소개',
    image: '../images/project-sample.png',
  },
  {
    id: 7,
    title: '프로젝트 이름',
    stack: 'react javascript',
    desc: '프로젝트 소개',
    image: '../images/project-sample.png',
  },
];

export default ProjectList;
