import React from 'react';
import styled from 'styled-components';

const ConclusionsBin = styled.div`
  background-color: #dcd9d9;
  border-radius: 5px;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 3em;
  padding: 0.5em 0em;
`;

const ConclusionEntry = styled.div`
  h3 {
    font-size: 2em;
    padding: 0em 1em;
    text-align: left;
  }

  p {
    font-size: 1.5em;
    padding: 0.5em 2em;
    text-align: left;
  }
`;

const ConclusionsPage = props => {
  return (
    <ConclusionsBin>
      <ConclusionEntry>
        <h3>Sampling Technique</h3>
        <p>
          {`The graphs suggest that topological features were preserved under sampling, even if the actual distributions of the distances differed.  This supports the notion that with sufficient sample sizes and distributions, the sampling method returns a truthful representation of the underlying complex.  While this might not be the case for every data set, it poses some interesting questions regarding sampling text-based datasets.`}
        </p>
      </ConclusionEntry>
      <ConclusionEntry>
        <h3>Metric</h3>
        <p>
          {`On the variance of the metrics, it seems that each metric captured very different topological features.  While the final complexes of the Levenshtein and Syllable metrics might have been similar, their growth was substantially different.  The Levenshtein metric seemed less evenly distributed than the Syllable metric, and the shape of the Barcode diagrams support that as well.`}
        </p>
        <p>
          {`The Jaccard Distance proved to be much different (at least in the case we could observe).  Given more time and processing power, I would like to see if the windowed sample saw the same results, namely that the complex consisted of many disconnected components.`}
        </p>
        <p>
          {`The differences between metrics hinted at some interesting topological features.  Perhaps a metric imposed between complexes would give a sense of how “close” these metrics are to one another.  Like the sampling, this is another area of research worth investigating.`}
        </p>
      </ConclusionEntry>
      <ConclusionEntry>
        <h3>Sumary</h3>
        <p>
          {`Overall, the analysis showed that TDA can enrich NLP analysis.  Topological tools can expose patterns one might not see otherwise, which could help support more sophisticated methods in NLP.  When dealing with such nebulous data, it is important to consider many approaches.  Multiple perspectives enrich exploration of complicated datasets, and lead to inquiries beyond the original analysis.`}
        </p>
      </ConclusionEntry>
    </ConclusionsBin>
  );
};

export default ConclusionsPage;
