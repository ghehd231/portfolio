import withSplitting from '../withSplitting';

export const Main = withSplitting(() => import('../components/Main'));
export const Project = withSplitting(() => import('../components/Project'));
export const Skill = withSplitting(() => import('../components/Skill'));

export const Home = withSplitting(() => import('./Home'));
export const Detail = withSplitting(() => import('./Detail'));
export const About = withSplitting(() => import('./About'));
