import React from 'react';
import Home from './containers/home'
import About from './containers/about/about'
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Project from './containers/project/Project'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/home'>
          <Redirect to='/' />
        </Route>
        <Route path='/about' component={About} />
        <Route path='/project' component={Project} />
      </Switch>
      {/* <Route path='/about' component={About} /> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
