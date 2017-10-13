import { SERVER_HOSTNAME } from './config';

export const changeColorAction = (RGB) => {
  if (!Array.isArray(RGB)) {
    throw new Error('RGB 값이 유효하지 않습니다');
  }

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
