import React from 'react';
import styled from 'styled-components';

const AboutBin = styled.div`
  background-color: #dcd9d9;
  border-radius: 5px;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 3em;
  padding: 0.5em 0em;
`;

const AboutEntry = styled.div`
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

const AboutPage = () => (
  <AboutBin>
    <AboutEntry>
      <h3>Sources</h3>
      <p>
        Milton, John. (1867). Paradise Lost. Urbana, Illinois: Project Gutenberg. Retrieved February 21, 2017, from
        {' '}
        <a href="http://www.gutenberg.org/ebooks/26">
          www.gutenberg.org/ebooks/26
        </a>
        .
      </p>
    </AboutEntry>
    <AboutEntry>
      <h3>Resources</h3>
      <p>
        <a href="http://people.maths.ox.ac.uk/nanda/perseus/">Perseus</a>
        , a persistent homology library for Python
      </p>
      <p>
        <a href="http://www.nltk.org/">NLTK</a>
        , the Natural Language Toolkit, for Python
      </p>
    </AboutEntry>
  </AboutBin>
);

export default AboutPage;
