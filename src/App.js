import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import ResultsViewContainer from './components/ResultsViewContainer';
import IntroPage from './components/IntroPage';
import ConclusionsPage from './components/ConclusionsPage';
import TopNav from './components/TopNav';
import {PAGES} from './constants';
import './App.css';

class App extends Component {
  render() {
    const currentPath = this.props.location.pathname;
    return (
      <div className={'App'}>
        <h1>Paradise Lost: A Topological Approach</h1>

        <TopNav items={PAGES} current={currentPath} />

        <Route exact path="/introduction" component={IntroPage} />
        <Route path="/conclusions" component={ConclusionsPage} />
        <Route path="/graphs" component={ResultsViewContainer} />

      </div>
    );
  }
}

export default App;
