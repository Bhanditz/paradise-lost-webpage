export const SAMPLERS = [
  {
    displayName: 'Window',
    selector: 'windowSample',
  },
  {
    displayName: 'Weighted',
    selector: 'weightedSample',
  },
];

export const METRICS = [
  {
    displayName: 'Levenshtein',
    selector: 'editDistance',
  },
  {
    displayName: 'Jaccard',
    selector: 'jaccardDistance',
  },
  {
    displayName: 'Syllables',
    selector: 'syllableDistance',
  },
];

export const GRAPHS = [
  {displayName: 'Barcode', selector: 'barcode'},
  {displayName: 'Persistence', selector: 'persistence'},
  {displayName: 'Matrix', selector: 'matrix'},
];
