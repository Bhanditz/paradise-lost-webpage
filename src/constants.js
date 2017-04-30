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

export const PAGES = [
  {displayName: 'Introduction', selector: 'introduction'},
  {displayName: 'Graphs', selector: 'graphs'},
  {displayName: 'Conclusions', selector: 'conclusions'},
];

export const EXPLAIN = {
  samplers: {
    windowSample: `It's reasonable to assume stanzas that appear near one-another are similar.  Thus, if I take a random stanza, I should also take ones near it.  In this case, I've taken "windows" of four stanzas throughout the text.\nAlternatively, one could sample by when stanzas were written in time (if that data were available).  With this sampling method, one could see how the same (or similar) samples change across editions of the poem.`,
    weightedSample: `Paradise Lost is broken up into chapters (or "books" in this edition).  Could one chapter contribute more to the "meaning" of the text than others?  In other words, one might choose to weight their samples by some measure of relative importance.\nIn this case, I weighted each chapter by the total number of lines, which weighed the chapters fairly evenly.  However, other weighting strategies could lead to more interesting results.`,
  },
  metrics: {
    editDistance: `Also known as the "edit distance," the Levenshtein metric determines the difference in letters between two stanzas.  Basically, between two stanzas, we ask how each character (including spaces) differ; 0 if they're the same, 1 if they're different.\nThis metric finds use in spellcheck software, as misspellings should have relatively small "edit distances."`,
    jaccardDistance: `How might one measure word usage?  The Jaccard Distance, which has applications far beyond NLP, gives an idea of how stanzas differ by their word content.\nFor two stanzas, count the words that appear in either one (don't double-count words).  Then count the words that appear in both stanzas.  Divide the second number by the first, and that represents the Jaccard Distance.`,
    syllableDistance: `How might one measure "rhythm" or "flow" in a stanza?  This metric counts the number of syllables in two stanza, divides each by the number of lines in the stanzas, and subtracts the two averages.  While rudimentary, I treated it as a first-step in creating a phoentically-based metric.`,
  },
  graphs: {
    persistence: 'This view contains the same information as the Barcode Diagram, but puts it in a different format.  A Persitence Diagram plots the "birth" of topological features against their "death," if they do die off.  As one increases the error threshold, different features are born and die.  The perpendicular distance between each point and the diagonal line indicate the persistence of that feature.',
    barcode: 'The standard graph for TDA, the BarCode Diagram shows how different features come and go as one increases the error threshold about the data points.  Each bar corresponds to a topological feature that appeared at the threshold.  Longer bars suggest the existence of a persistent feature, while shorter ones are more likely noise.',
    matrix: 'The matrix representation presents the data in its rawest form, as a distribution of the sampled points under the given metric.  While there are too many points to make sense of the diagram, this view gives some indication of a distribution.\nNote that boxes appear in no particular order, however boxes immediately to the north, south, east, and west of a box are correlated.',
  },
};
