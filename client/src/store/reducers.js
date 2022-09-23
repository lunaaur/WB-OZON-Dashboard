import actionTypes from './types';


const initState = {
    bigDataWB: [],
    revenue_OZ: [],
    returns_OZ: [],
    ordered_OZ: [],
    datePeriod: {},
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
            case actionTypes.DATE_PERIOD:
                return {
                    ...state, datePeriod: action.payload
                }

                case actionTypes.RETURN_OZ:
                    return {
                        ...state, returns_OZ: action.payload
                    }
                    case actionTypes.ORDERED_UNIT_OZ:
                        return {
                            ...state, ordered_OZ: action.payload
                        }
        default:
            return state;
    }

};