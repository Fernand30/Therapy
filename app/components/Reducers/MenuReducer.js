export default (state = false, action) => {
  switch (action.type) {
    case 'open_menu':
      return true;
    case 'close_menu':
      return false;
    case 'toggle_menu':
      return !state;
    default:
      return state;
  }
};
