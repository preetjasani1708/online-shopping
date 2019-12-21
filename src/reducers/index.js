import { combineReducers } from 'redux';
import items from './items';
import toggleCartList from './toggleCartList';
import cartlist from './cartlist';

export default combineReducers({
    items,
    toggleCartList,
    cartlist
});
