import { combineReducers } from 'redux';
import items from './items';
import toggleCartList from './toggleCartList';
import cartlist from './cartlist';
import sizeFilter from './sizeFilter';

export default combineReducers({
    items,
    toggleCartList,
    cartlist,
    sizeFilter
});
