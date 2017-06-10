import axios from 'axios'

const initialState = {
  messages: [['watson', "Please enter a search term"]],
  results: ["initial results"]
}


/* ------------ REDUCER ------------------ */

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD:
      if (state.messages.length > 100) {
         return Object.assign({}, state, {
            messages: state.messages.slice(1).concat(action.payload)
         })
      }
      else {
        return Object.assign({}, state, {
          messages: state.messages.concat(action.payload)
        })
      }

    case OUTPUT_RESULTS:
      console.log(action.payload)
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

export const addResponseAction = response => ({
  type: ADD,
  payload: [['watson', response]]
})

export const outputResultsAction = results => ({
  type: OUTPUT_RESULTS,
  payload: results
})


/* ------------------ DEFAULT EXPORT ------------------ */

export default reducer;







