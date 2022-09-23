import actionTypes from "./types";

export const bigDataWb = (bigData) => dispatch => dispatch( { type: actionTypes.BIG_DATA_WB, payload: bigData});
export const buttonTime = (time) => dispatch => dispatch( {type: actionTypes.BUTTON_TIME, payload: time})