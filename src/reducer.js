const initialState = {
  page: 'introduction',
  sampler: 'windowSample',
  metric: 'editDistance',
  graph: 'barcode',
  explain: {
    sampler: 'Sample randomly, with each stanza weighted appropriately',
    metric: 'Edit distance, letter by letter',
  },
  showStatus: {
    sampler: true,
    metric: true,
    graph: true,
    analysis: true,
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_VIEW':
      return {
        ...state,
        [action.selector]: action.option,
      };
    case 'UPDATE_EXPLAIN':
      return {
        ...state,
        [state.showStatus[action.selector]]: action.status,
      };
    default:
      return state;
  }
}
