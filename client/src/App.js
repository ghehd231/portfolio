import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { About, Detail, Home } from './pages';
function App() {
  return (
    <BrowserRouter>
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
  );
}

export default App;
