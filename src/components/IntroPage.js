import React from 'react';
import styled from 'styled-components';

const IntroBin = styled.div`
  background-color: #dcd9d9;
  border-radius: 5px;
  width: 50%;
  margin: 0 auto;
  padding: 0.5em 0em;

  p {
    font-size: 1.5em;
    padding: 0.5em 1em;
    text-align: left;
  }
`;

const IntroPage = props => {
  return (
    <IntroBin>
      <p>
        {`Topological Data Analysis (TDA) provides powerful tools for exploring and characterizing high-dimensional data.  Natural Language Processing (NLP) incorporates statistical methods and linguistic analysis to turn written (and spoken) documents into datasets.  This project seeks to wed the two, using methods in NLP to construct a dataset, and then leveraging TDA to characterize that dataset.`}
      </p>
      <p>
        {`This project shall explore Paradise Lost (1867), John Milton’s legendary poem, telling the story of The Fall of Man.  The poem is of substantial linguistic importance, acting as a seminal work in the canon of English language and literature.  Of course, like all epic poems, Paradise Lost is tremendous in length and content.  It is so long, that I could not feasibly process it in its entirety, so I turned to sampling.`}
      </p>
      <p>
        {`I chose to break the poem up into stanzas, figuring that taking chapters would be too broad and individual lines too granular.  TDA works by comparing the “distance” between pairs of points in one’s dataset, where “distance” is determined by any metric on that space.  NLP has many metrics, several of which I impose on our datasets.  If I were to used the whole dataset, I would have to find distances between every single pair of stanzas, which comes out to an very large number.  Thus, sampling is necessary.`}
        {' '}
      </p>
      <p>
        {`    In the context of TDA, sampling raises some interesting question.  Like always, one would hope that a sample is representative of the underlying population, but in topology, it brings into play the notions of homeomorphism and simplicial maps.  In other words, could one characterize the maps between samples to derive more topological properties of the space?  I shall explore this qualitatively in the upcoming analysis, although it hints at an areas of research in TDA.`}
        {' '}
      </p>
      <p>
        {`    Could the same be said about different metrics?  Could one infer topological properties when comparing two complexes formed under different metrics?  While one would hope different sampling techniques would not change our results drastically, that’s not a reasonable expectation for different metrics.  This project will also compare how our results differ between metrics.`}
        {' '}
      </p>
      <p>
        {`  Ultimately, this analysis will consist of several smaller analyses.  With two sampling techniques, and three metrics put on each sample, there’s a decent amount of ground to cover (note that one sampler/metric pair was too unusable for storage reasons).  Each analysis will have a Barcode Diagram, a commonly used graph in TDA.  However, there will not be any Persistence Diagrams, as the only homology groups groups captured were the 0th homology (an interesting property).  Instead, various interpretations of the distribution of the dataset are provided, which, when coupled with the Barcode diagram, will shed some light on what form the data takes.`}
        {' '}
      </p>
    </IntroBin>
  );
};

export default IntroPage;
