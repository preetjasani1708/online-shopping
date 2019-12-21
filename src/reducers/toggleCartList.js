const initialState ={isOpenSideNav: false};
const toggleCartList = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_CART":
            let newState = {
                ...state,
                isOpenSideNav: action.isOpenSideNav
            };
            return newState
        default:
            return state;
    }
}

export default toggleCartList