import React from 'react';
import Section from '../../common/Section';
import Experience from './Experience';

const ExperienceSection = () => {
  return <Section title="Experience" sub vertical component={Experience} content={experiences} />;
};

const experiences = [
  {
    id: 1,
    title: '웹개발팀',
    desc: 'HTML, CSS, Javascript, JQuery, ASP, MSSQL',
    thumbnail: 'ellen',
    date: '2018.02 - 2019.12',
  },
  {
    id: 2,
    title: 'FastCampus React로 구현하는 웹 어플리케이션 제작 오프라인 강의',
    desc: 'React, Prettier, ESLint, Redux, Redux-middleware, TypeScript 기초, code-splitting',
    thumbnail: 'fastcampus',
    date: '2019.01 - 2019.03',
  },
  {
    id: 3,
    title: '우아한테크 러닝3기 (React&TypeScript)',
    desc: 'Javascript, React, TypesScript, Redux',
    thumbnail: 'wooahan',
    data: '2020.09 - 2020.10',
  },
];

export default ExperienceSection;
