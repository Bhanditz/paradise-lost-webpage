export const updateView = (selector, option) => {
  return {
    type: 'UPDATE_VIEW',
    selector,
    option,
  };
};

export const updateExplain = (selector, bool) => ({
  type: 'UPDATE_EXPLAIN',
  selector,
  status: !bool,
});
