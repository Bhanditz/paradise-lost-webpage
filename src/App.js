import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import styled from 'styled-components';
import ResultsViewContainer from './components/ResultsViewContainer';
import IntroPage from './components/IntroPage';
import ConclusionsPage from './components/ConclusionsPage';
import AboutPage from './components/AboutPage';
import TopNav from './components/TopNav';
import {PAGES} from './constants';
// import './App.css';

const TitleCard = styled.div`
  width: 50%;
  margin: 0 auto;

  h1 {
    text-align: left;
  }

  p {
    text-align: left;
    font-size: 1em;
  }
`;

class App extends Component {
  render() {
    const currentPath = this.props.location.pathname;
    return (
      <div className={'App'}>
        <TitleCard>
          <h1>Paradise Lost: A Topological Approach</h1>
          <p>PJ Trainor, 2016</p>
        </TitleCard>

        <TopNav items={PAGES} current={currentPath} />

        <Route path="/introduction" component={IntroPage} />
        <Route path="/conclusions" component={ConclusionsPage} />
        <Route path="/graphs" component={ResultsViewContainer} />
        <Route path="/about" component={AboutPage} />

      </div>
    );
  }
}

export default App;
