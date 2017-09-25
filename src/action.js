import { SERVER_HOSTNAME } from './config';

export const changeColorAction = (RGB) => {
    return {
        type: 'CHANGE_COLOR',
        payload: RGB,
    }
}

export const getWordsListFromApi = () => {
    return (dispatch) => {
        dispatch({
            type: 'GET_WORDLIST_REQUEST',
        })
        fetch(`${SERVER_HOSTNAME}/wordLists`)
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: 'GET_WORDLIST_SUCCESS',
                payload: data,
            })
        })
        .catch(error => {
            dispatch({
                type: 'GET_WORDLIST_FAILED',
            })
        })
    }
}

export const changeHeaderText = (text) => {
    return {
        type: 'CHANGE_HEADER',
        payload: text,
    }
}