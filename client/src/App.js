import './App.css';
import { ProjectProvider } from './contexts/projects';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { About, Detail, Home } from './pages';

function App() {
  return (
    <ProjectProvider>
      <BrowserRouter basename="/portfolio">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/detail/:projectId">
            <Detail />
          </Route>
        </Switch>
      </BrowserRouter>
    </ProjectProvider>
  );
}

export default App;
