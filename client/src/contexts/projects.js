import { useReducer, useContext, createContext } from 'react';

const inintialProjects = [
  {
    id: 1,
    category: 'All',
    type: 'side',
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
    image: ['foodwar01', 'foodwar02', 'foodwar03', 'foodwar04', 'foodwar05', 'foodwar06'],
    demo: 'https://foodwar.kro.kr',
    github: 'https://github.com/food-war/foodwar',
  },
  {
    id: 2,
    category: 'Front-end',
    type: 'side',
    title: '포트폴리오 페이지',
    stack: ['React', 'Styled-component', 'gh-pages'],
    summary: '자기소개 및 프로젝트 경험을 보여주는 페이지',
    desc: '자기소개 및 프로젝트 경험을 보여주는 페이지',
    thumbnail: 'portfolio',
    image: ['portfolio01', 'portfolio02', 'portfolio03', 'portfolio04', 'portfolio05'],
    demo: '/',
    github: 'https://github.com/ghehd231/portfolio',
  },
  {
    id: 3,
    category: 'All',
    type: 'company',
    title: '제휴사 판매 통계페이지',
    stack: ['HTML', 'CSS', 'Javascript', 'Asp', 'Mssql', 'Chart.js'],
    summary: '제휴사의 판매 현황을 기간,시간별 그래프로 볼 수 있는 페이지',
    desc: '제휴사의 판매 현황을 기간, 시간별 그래프로 회사의 전광판을 통해 볼 수 있는 페이지',
    thumbnail: 'franken-alience',
    image: ['alience01', 'alience02', 'alience03', 'alience04'],
    demo:
      'http://admin.frankenmono.com/hd_test/alliance_styleShare.asp?start_year=2020&start_month=2',
  },
];

//context 객체 만듬
const ProjectStateContext = createContext();
const ProjectDispatchContext = createContext();

//reducer
function projectReducer(state, action) {
  switch (action.type) {
    case 'GET':
      return state.filter(project => project.id === action.id);
    case 'FILTER':
      return state.filter(project => project.category === action.category);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export function ProjectProvider({ children }) {
  const [state, dispatch] = useReducer(projectReducer, inintialProjects);
  return (
    <ProjectStateContext.Provider value={state}>
      <ProjectDispatchContext.Provider value={dispatch}>
        {children}
      </ProjectDispatchContext.Provider>
    </ProjectStateContext.Provider>
  );
}

export function useProjectState() {
  return useContext(ProjectStateContext);
}

export function useProjectDispatch() {
  return useContext(ProjectDispatchContext);
}
