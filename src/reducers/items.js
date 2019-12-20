const data = require('../data/shopping.json');

const items = (state = data, action = "Default_Display") => {
    switch (action.type) {
        case "Default_Display":
            return [...state]

        default:
            return state;
    }
}

export default items