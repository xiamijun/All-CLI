import { GET_COUNT, SET_COUNT } from '../actions/countActions';

const initState = {
  count: 0
}

function countReducers(state = initState, action) {
  switch (action.type) {
    case GET_COUNT:
      return state;
    case SET_COUNT:
      return {
        ...initState,
        count: action.payload
      };
    default:
      return state;
  }
}

export default countReducers