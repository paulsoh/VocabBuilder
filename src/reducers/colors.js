const DEFAULT_STATE = {
  rootColor: [255, 0, 0],
}

const colorsReducer = (
  state = DEFAULT_STATE,
  action = {}
) => {
  if (action.type === 'CHANGE_COLOR') {
    return {
      ...state,
      rootColor: action.payload
    }
  } return {
    ...state
  }
}

export default colorsReducer;
