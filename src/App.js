import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ResultsViewContainer from './components/ResultsViewContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h1>Paradise Lost View</h1>
          <ResultsViewContainer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
