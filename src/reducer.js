const initialState = {
  page: 'introduction',
  sampler: 'weightedSample',
  metric: 'editDistance',
  graph: 'matrix',
  explain: {
    sampler: 'Sample randomly, with each stanza weighted appropriately',
    metric: 'Edit distance, letter by letter',
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_VIEW':
      return {
        ...state,
        [action.selector]: action.option,
      };
    default:
      return state;
  }
}
