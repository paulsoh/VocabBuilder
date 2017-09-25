const INITIAL_STATE = {
    isLoading: false,
    errorState: false,
    wordsList: [],
}

const wordsReducer = (
    state = INITIAL_STATE,
    action
) => {
    if (action.type === 'GET_WORDLIST_SUCCESS') {
        return {
            ...state,
            isLoading: false,
            wordsList: action.payload,
        }
    }

    if (action.type === 'GET_WORDLIST_REQUEST') {
        return {
            ...state,
            isLoading: true,
        }
    }

    if (action.type === 'GET_WORDLIST_FAILED') {
        return {
            ...state,
            isLoading: false,
            errorState: true,
        }
    }
    return {
        ...state,
    }
}

export default wordsReducer;