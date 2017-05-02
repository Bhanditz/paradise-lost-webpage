import React from 'react';
import {GRAPHS, SAMPLERS, METRICS, EXPLAIN} from '../constants';
import {ANALYSIS} from '../text/analysis';
import NavBar from './NavBar';
import BarCode from './BarCode';
// import PersDiagram from './PersDiagram';
import DistMatrix from './DistMatrix';
import Histogram from './Histogram';
import InfoBin from './InfoBin';
import GraphError from './GraphError';
import '../css/graphPage.css';

// DATA
import weightedSample_editDistance
  from '../data/weightedSample_editDistance.json';
import weightedSample_syllableDistance
  from '../data/weightedSample_syllableDistance.json';
import weightedSample_jaccardDistance
  from '../data/weightedSample_jaccardDistance.json';
import windowSample_editDistance from '../data/windowSample_editDistance.json';
// import windowSample_jaccardDistance
//   from '../data/windowSample_jaccardDistance.json';
import windowSample_syllableDistance
  from '../data/windowSample_syllableDistance.json';

const graphStyles = {
  width: 400,
  height: 400,
  margin: {
    sides: 20,
    top: 10,
    bottom: 10,
  },
};

const getData = (sampler, metric) => {
  switch (`${sampler}_${metric}`) {
    case 'weightedSample_editDistance':
      return weightedSample_editDistance;
    case 'weightedSample_syllableDistance':
      return weightedSample_syllableDistance;
    case 'weightedSample_jaccardDistance':
      return weightedSample_jaccardDistance;
    case 'windowSample_editDistance':
      return windowSample_editDistance;
    case 'windowSample_syllableDistance':
      return windowSample_syllableDistance;
    case 'windowSample_jaccardDistance':
      return [];
    default:
  }
};

const renderMetricGraph = (graph, data, graphStyles) => {
  switch (graph) {
    case 'barcode':
      return <BarCode data={data.persistenceData} styles={graphStyles} />;
    // case 'persistence':
    //   return <PersDiagram data={data.persistenceData} styles={graphStyles} />;
    case 'matrix':
      return <DistMatrix data={data.matrix} styles={graphStyles} />;
    case 'histogram':
      return <Histogram data={data.matrix} styles={graphStyles} />;
    default:
      return <div>Select a View!</div>;
  }
};

const renderNavBar = (identifier, data, fcn) => {
  switch (identifier) {
    case 'Sample':
      return (
        <NavBar
          identifier={'Sample'}
          items={SAMPLERS}
          navSelector={'sampler'}
          navFcn={fcn}
          selectQuery={data}
        />
      );
    case 'Metric':
      return (
        <NavBar
          identifier={'Metric'}
          items={METRICS}
          navSelector={'metric'}
          navFcn={fcn}
          selectQuery={data}
        />
      );
    case 'Graph':
      return (
        <NavBar
          identifier={'Graph'}
          items={GRAPHS}
          navSelector={'graph'}
          navFcn={fcn}
          selectQuery={data}
        />
      );
    default:
      return <div>NavBar</div>;
  }
};

function ResultsView({sampler, metric, graph, explain, actions, showStatus}) {
  const updateView = actions.updateView;
  const updateExplain = actions.updateExplain;
  const data = getData(sampler, metric);
  return (
    <div className={'graphPage'}>
      <div className={'controls'}>
        {renderNavBar('Sample', sampler, updateView)}
        {renderNavBar('Metric', metric, updateView)}
        {renderNavBar('Graph', graph, updateView)}
        <div className={'svgBin'}>
          <svg width={graphStyles.width} height={graphStyles.height}>
            {`${sampler}_${metric}` !== 'windowSample_jaccardDistance'
              ? renderMetricGraph(graph, data, graphStyles)
              : <GraphError />}
          </svg>
        </div>
      </div>
      <div className={'info'}>
        <InfoBin
          type={'sampler'}
          content={EXPLAIN.samplers[sampler]}
          header={'How are we sampling?'}
          status={showStatus.sampler}
          updater={updateExplain}
        />
        <InfoBin
          type={'metric'}
          content={EXPLAIN.metrics[metric]}
          header={'What is our metric?'}
          status={showStatus.metric}
          updater={updateExplain}
        />
        <InfoBin
          type={'graph'}
          content={EXPLAIN.graphs[graph]}
          header={'What does the graph show?'}
          status={showStatus.graph}
          updater={updateExplain}
        />
        {/* TODO put in selectors for analysis */}
        <InfoBin
          type={'analysis'}
          content={ANALYSIS[sampler][metric]}
          header={'What do we observe?'}
          status={showStatus.analysis}
          updater={updateExplain}
        />
      </div>
    </div>
  );
}

export default ResultsView;
