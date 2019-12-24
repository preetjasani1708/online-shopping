import {sizeFilter} from '../actions';

const sizeFilters = (state = sizeFilter.SHOW_ALL, action) => {
    switch (action.type) {
        case 'SIZE_FILTER':
            return action.filter;
        default:
            return state;
    }
}

export default sizeFilters