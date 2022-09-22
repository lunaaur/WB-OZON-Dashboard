import actionTypes from './types';


const initState = {
    bigDataWB: [],
    revenue_OZ: [],
}

// укажем state по default

export const reducers = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.BIG_DATA_WB:
            return {
                ...state, bigDataWB: action.payload
            }

            case actionTypes.REVENUE_OZ:
            return {
                ...state, revenue_OZ: action.payload
            }
        default:
            return state;
    }

};