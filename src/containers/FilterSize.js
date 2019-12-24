import { connect } from 'react-redux';
import { sizeFilter, addToCart } from '../actions';
import Item from '../components/Item';

const sortItems = (items, filter) => {

    switch (filter) {
        case sizeFilter.XS:
            return items.filter(i => i.sizes.includes(sizeFilter.XS))
        case sizeFilter.S:
            return items.filter(i => i.sizes.includes(sizeFilter.S))
        case sizeFilter.M:
            return items.filter(i => i.sizes.includes(sizeFilter.M))
        case sizeFilter.ML:
            return items.filter(i => i.sizes.includes(sizeFilter.ML))
        case sizeFilter.L:
            return items.filter(i => i.sizes.includes(sizeFilter.L))
        case sizeFilter.XL:
            return items.filter(i => i.sizes.includes(sizeFilter.XL))
        case sizeFilter.XXL:
            return items.filter(i => i.sizes.includes(sizeFilter.XXL))
        default:
            return items;
    }
}

const orderByPrice = (items, selectedValue) => {
    console.log(selectedValue);
    
    switch (selectedValue) {
        case "LowestToHighest":
            return items.sort(function (a, b) { return a.price - b.price });
        case "HighestToLowest":
            return items.sort(function (a, b) { return b.price - a.price });
        default:
            return items;
    }
}

const mapStateToProps = state => ({
    items: sortItems(state.items, state.sizeFilter),
    orderByPrice: (items,value) => orderByPrice(items, value)
})
const mapDispatchToProps = (dispatch) => ({
    addToCart: (id) => dispatch(addToCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Item)