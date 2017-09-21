const DEFAULT_STATE = {
  rootColor: [120, 42, 52],
}

const reducer = (state = DEFAULT_STATE, action) => {

  if (action.type === 'CHANGE_COLOR') {
    return {
      ...state,
      rootColor: action.payload,
    }
  }

  return {
    ...state
  };
}

export default reducer;
