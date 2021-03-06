import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import * as Actions from '../actions';
import ResultsView from './ResultsView';
// import DATA from '../data/test.json';

const mapStatetoProps = state => {
  return {
    // data: DATA[state.sampler][state.metric],
    sampler: state.sampler,
    metric: state.metric,
    graph: state.graph,
    explain: state.explain,
    showStatus: state.showStatus,
  };
};

const mapDispatchtoProps = dispatch => {
  return {actions: bindActionCreators(Actions, dispatch)};
};

export default withRouter(
  connect(mapStatetoProps, mapDispatchtoProps)(ResultsView)
);
