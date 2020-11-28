import React from 'react';
import Section from '../../common/Section';
import Skill from './Skill';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiJquery,
  SiReact,
  SiNodeDotJs,
  SiAmazon,
  SiMongodb,
  SiGit,
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
const SkillSection = () => {
  return <Section title="Skills" scroll component={Skill} content={skills} />;
};

const skills = [
  {
    id: 1,
    icon: <SiJavascript />,
    color: '#F7DF1B',
    category: 'Front-end',
    name: 'JavaScript',
    level: 4,
  },

  {
    id: 2,
    icon: <SiReact />,
    color: '#5ED4F4',
    category: 'Front-end',
    name: 'React.js',
    level: 3,
  },

  {
    id: 3,
    icon: <SiHtml5 />,
    color: '#E96328',
    category: 'Front-end',
    name: 'HTML',
    level: 5,
  },
  {
    id: 4,
    icon: <SiCss3 />,
    color: '#2A65F0',
    category: 'Front-end',
    name: 'CSS',
    level: 4,
  },
  {
    id: 5,
    icon: <SiJquery />,
    color: '#0F66A9',
    category: 'Front-end',
    name: 'JQuery',
    level: 4,
  },
  {
    id: 6,
    icon: <SiNodeDotJs />,
    color: '#73AF5A',
    category: 'Back-end',
    name: 'Node.js',
    level: 1,
  },
  {
    id: 7,
    icon: <SiAmazon />,
    color: '#FCAD24',
    category: 'Cloud',
    name: 'AWS',
    level: 3,
  },
  {
    id: 8,
    icon: <FaDatabase />,
    color: '#43759B',
    category: 'Database',
    name: 'MSSQL',
    level: 4,
  },
  {
    id: 9,
    icon: <SiMongodb />,
    color: '#489242',
    category: 'Database',
    name: 'MongoDB',
    level: 2,
  },
  {
    id: 10,
    icon: <SiGit />,
    color: '#E94F31',
    category: 'Etc',
    name: 'Git',
    level: 3,
  },
];

export default React.memo(SkillSection);
