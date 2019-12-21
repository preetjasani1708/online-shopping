export const sizeFilter = {
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

export const addToCart = id =>({
    type: 'ADD_TO_CART',
    id
})
