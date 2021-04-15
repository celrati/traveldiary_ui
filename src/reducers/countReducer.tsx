import { COUNTER_CHANGE } from '../constants';

const initialState = {
    counter1: 0
};

const countReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case COUNTER_CHANGE:
            return {
                ...state,
                count: action.payload
            };
        default:
            return state;
    }
}

export default countReducer;