import withSplitting from '../withSplitting';

export const MainSection = withSplitting(() => import('../components/home/main/MainSection'));
export const ProjectSection = withSplitting(() =>
  import('../components/home/project/ProjectSection'),
);
export const SkillSection = withSplitting(() => import('../components/home/skill/SkillSection'));

export const Home = withSplitting(() => import('./Home'));
export const Detail = withSplitting(() => import('./Detail'));
export const About = withSplitting(() => import('./About'));
