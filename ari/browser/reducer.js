import axios from 'axios'

const initialState = {
  input: '',
  resultsCore: [],
  resultsGoogle: [],
  resultsWatson: []
}


/* ------------ REDUCER ------------------ */

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD:
      return Object.assign({}, state, {
        input: action.payload
      })

    case OUTPUT_RESULTS_CORE:
      return Object.assign({}, state, {
        resultsCore: action.payload
      })

    case OUTPUT_RESULTS_GOOGLE:
      return Object.assign({}, state, {
        resultsGoogle: action.payload
      })

    case OUTPUT_RESULTS_WATSON:
      return Object.assign({}, state, {
        resultsWatson: action.payload
      })

    default:
      return state;
  }
}

/* ----------------- ACTIONS ------------------ */

const ADD = 'ADD';
const OUTPUT_RESULTS_CORE = 'OUTPUT_RESULTS_CORE';
const OUTPUT_RESULTS_WATSON = 'OUTPUT_RESULTS_WATSON';
const OUTPUT_RESULTS_GOOGLE = 'OUTPUT_RESULTS_GOOGLE';


/* ------------ ACTION CREATORS ------------------ */

export const addInputAction = input => ({
  type: ADD,
  payload: input
})

export const outputResultsActionCore = results => ({
  type: OUTPUT_RESULTS_CORE,
  payload: results
})

export const outputResultsActionGoogle = results => ({
  type: OUTPUT_RESULTS_GOOGLE,
  payload: results
})

export const outputResultsActionWatson = results => ({
  type: OUTPUT_RESULTS_WATSON,
  payload: results
})


/* ------------------ DEFAULT EXPORT ------------------ */

export default reducer;







