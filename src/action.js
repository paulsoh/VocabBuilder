export const changeColorAction = (RGB) => {
    return {
        type: 'CHANGE_COLOR',
        payload: RGB,
    }
}

export const fetchWordListFromAPI = (url) => {
    return (dispatch) => fetch(url)
    .then((resp) => resp.json())
    .then((response) => {
        return dispatch({
            type: 'GET_WORD_LIST',
            payload: response,
        })
    }).catch()
}

export const changeHeaderText = (text) => {
    return {
        type: 'CHANGE_HEADER',
        payload: text,
    }
}