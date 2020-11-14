import React from 'react';
import Section from '../../common/Section';
// import ProjectList from './ProjectList';
import Project from './Project';

const ProjectSection = () => {
  return <Section title="Projects" component={Project} content={projects} />;
};

const projects = [
  {
    id: 1,
    category: 'All',
    title: 'Foodwar',
    stack: [
      'React',
      'SASS',
      'Node',
      'Express',
      'AWS(EC2, Rout53, SES)',
      'MongoDB',
      'Redux',
      'Redux-middleware',
      'React-geolocation',
      'Nginx',
    ],
    summary: '맛집 검색 && 점심시간 음식 추천 사이트',
    desc: '점심시간의 음식 선택의 고민을 줄여주기 위해 현제 위치를 기반하여 맛집을 검색해 추천해주는 사이트',
    thumbnail: 'foodwar-thumb',
    image: ['foodwar01', 'foodwar02', 'foodwar03', 'foodwar04', 'foodwar05'],
  },
  {
    id: 2,
    category: 'Front-end',
    title: '포트폴리오 페이지',
    stack: ['React', 'Styled-component', 'gh-pages'],
    summary: '자기소개 및 프로젝트 경험을 보여주는 페이지',
    desc: '프로젝트 소개~~~',
    thumbnail: 'portfolio',
    image: ['portfolio01', 'portfolio02', 'portfolio03', 'portfolio04', 'portfolio05'],
  },
  {
    id: 3,
    category: 'All',
    title: '제휴사 판매 통계페이지',
    stack: ['HTML', 'CSS', 'Javascript', 'Asp', 'Mssql', 'Chart.js'],
    summary: '제휴사의 판매 형황을 기간,시간별 그래프로 볼 수 있는 페이지',
    desc: '프로젝트 소개~~~',
    thumbnail: 'franken-alience',
    image: ['alience01', 'alience02', 'alience03', 'alience04', 'alience05'],
  },
];
export default ProjectSection;
