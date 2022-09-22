import actionTypes from "./types";

export const setLoadSal = (isLoadSal) => ({})
export const ReadDate = (date) => dispatch => dispatch({type: actionTypes.DATE_PERIOD, payload: date})
export const revenue90Doz = (revenue) => dispatch => dispatch( { type: actionTypes.REVENUE_OZ, payload: revenue})
export const bigDataWb = (bigData) => dispatch => dispatch( { type: actionTypes.BIG_DATA_WB, payload: bigData})
// указывает и экспортируем все actions и прописывает и экспортируем все асинхронные функции (пишем через карировние)