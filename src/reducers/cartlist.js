const cartlist = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            let newState = [...state, {
                id: action.id
                
            }];
            return newState;
        default:
            return state;
    }
}

export default cartlist