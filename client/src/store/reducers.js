import actionTypes from './types';


const initState = {
    bigDataWB: []
}

// укажем state по default

export const reducers = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.BIG_DATA_WB:
            return {
                ...state, bigDataWB: action.payload
            }
        default:
            return state;
    }

};