import actionTypes from './types';


const initState = {
    loaders: [
        {
            isLoadSal: false,
        },
        {
            isLoadOrd: false,
        },
        {
            isLoadRef: false,
        },
        {
            isLoadLog: false
        }
    ],
    bigDataWB: []
}

// укажем state по default

export const reducers = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.SET_LOAD_SAL:
            return { ...state, loaders: [...state.loaders[0].isLoadSal = true] }

        case actionTypes.BIG_DATA_WB:
            return {
                ...state, bigDataWB: action.payload
            }

        default:
            return state;
    }

};