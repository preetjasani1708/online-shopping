export const sizeFilter = {
    SHOW_ALL: 'SHOW_ALL',
    XS: 'XS',
    S: 'S',
    M: 'M',
    ML: 'ML',
    L: 'L',
    XL: 'XL',
    XXL: 'XXL'
}

export const toggleSideNav = isOpenSideNav => ({
    type: 'TOGGLE_CART',
    isOpenSideNav: isOpenSideNav
})

export const addToCart = id => ({
    type: 'ADD_TO_CART',
    id
})

export const removeToCart = id => ({
    type: 'REMOVE_TO_CART',
    id
})

export const incrementDecrement = (id, flag) => ({
    type: 'INCREMENT_DECREMENT',
    id,
    flag
})

export const setSizeFilter = filter => ({
    type: 'SIZE_FILTER',
    filter
})