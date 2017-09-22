const DEFAULT_STATE = {
    rootColor: [42, 133, 234],
    wordList: [],
    headerText: 'This is the Header',
}

const reducer = (
    state=DEFAULT_STATE,
    action
) => {
    if (action.type === 'CHANGE_COLOR') {
        return {
            ...state,
            rootColor: action.payload,
        }
    }
    if (action.type === 'CHANGE_HEADER') {
        return {
            ...state,
            headerText: action.payload,
        }
    }
    return {
        ...state,
    }
}

export default reducer;