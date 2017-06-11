import axios from 'axios'

const initialState = {
  input: '',
  results: []
}


/* ------------ REDUCER ------------------ */

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD:
      return Object.assign({}, state, {
        input: action.payload
      })

    case OUTPUT_RESULTS:
    console.log("this should be the action.payload", action.payload)
      return Object.assign({}, state, {
        results: action.payload
      })

    default:
      return state;
  }
}

/* ----------------- ACTIONS ------------------ */

const ADD = 'ADD';
const OUTPUT_RESULTS = 'OUTPUT_RESULTS';

/* ------------ ACTION CREATORS ------------------ */

export const addInputAction = input => ({
  type: ADD,
  payload: [['me', input]]
})

export const outputResultsAction = results => ({
  type: OUTPUT_RESULTS,
  payload: results
})


/* ------------------ DEFAULT EXPORT ------------------ */

export default reducer;







