import actionTypes from './types';


const initState = {
    buttonTime: {date_from: '2022-08-01', date_to: '2022-09-22'},
    bigDataWB: [],
}

// укажем state по default

export const reducers = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.BIG_DATA_WB:
            return {
                ...state, bigDataWB: action.payload
            }
        case actionTypes.BUTTON_TIME:
            return {
                ...state, buttonTime: action.payload
            }
        default:
            return state;
    }

};