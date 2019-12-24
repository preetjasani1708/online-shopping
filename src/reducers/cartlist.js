const cartlist = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            let firstIndex = state.findIndex(e => e.id === action.id);
            let newState = Object.assign([], state);
            if (firstIndex > -1) {
                newState[firstIndex] = {
                    ...newState[firstIndex],
                    quantity: newState[firstIndex].quantity + 1
                }
            } else {
                newState = [...newState,{
                        id: action.id,
                        quantity: 1
                    }]
            }
            return newState;
        case 'REMOVE_TO_CART':
            return state.filter(x => x.id !== action.id);
        case 'INCREMENT_DECREMENT': {
            let firstIndex = state.findIndex(e => e.id === action.id);


            let incState = Object.assign([], state);
            if (action.flag === 'increment') {


                incState[firstIndex] = {
                    ...incState[firstIndex],
                    quantity: incState[firstIndex].quantity + 1
                }
            }
            else if (action.flag === 'decrement') {


                incState[firstIndex] = {
                    ...incState[firstIndex],
                    quantity: incState[firstIndex].quantity - 1
                }
            }
            return incState;
        }
        default:
            return state;
    }
}

export default cartlist