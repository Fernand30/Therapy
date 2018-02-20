import { combineReducers } from 'redux';
import MenuReducer from './MenuReducer';
import ChildrenListReducer from './ChildrenListReducer';

export default combineReducers({
  menuIsOpen: MenuReducer,
  participants: ChildrenListReducer
});
