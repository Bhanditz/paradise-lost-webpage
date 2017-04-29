export const updateView = (selector, option) => {
  return {
    type: 'UPDATE_VIEW',
    selector,
    option,
  };
};
