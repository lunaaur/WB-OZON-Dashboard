import actionTypes from './types';
import React, {useState} from 'react';


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
    ]
}

// укажем state по default

export const reducers = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.SET_LOAD_SAL:
            return {...state, loaders: [...state.loaders[0].isLoadSal = true ]}
    
        default:
            return state;
    }
   
};