import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import colorsReducer from './reducers/colors';
import {
  changeColorAction,
  getWordsListFromApi,
} from './action';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('hello', () => {
  it('this is a simple test', () => {
    expect('abc').toBe('abc')
  })
})

describe('colorsReducer', () => {
  describe('when initialized', () => {
    it('returns default state', () => {
      expect(colorsReducer()).toEqual({
        rootColor: [255, 0, 0],
      })
    })
  })
  describe('when CHANGE_COLOR action occurs', () => {
    describe('returns new state', () => {
      it('updates states rootColor', () => {
        const initialState = colorsReducer();
        const action = {
          type: 'CHANGE_COLOR',
          payload: [124, 23, 34],
        }
        const nextState = colorsReducer(
          initialState,
          action
        )
        expect(nextState.rootColor).toEqual([124, 23, 34])
      })
    })
  })
})

describe('changeColorAction', () => {
  describe('when RGB is valid', () => {
    it('created action object with proper type', () => {
      const action = changeColorAction([122, 32, 42]);
      expect(action.type).toBe('CHANGE_COLOR');
    })
    it('created action object with proper payload', () => {
      const action = changeColorAction([122, 32, 42]);
      expect(action.payload).toEqual([122, 32, 42]);
    })
  })

  describe('when RGB is invalid', () => {
    it('raises an error', () => {
      expect(
        () => changeColorAction('abc')
      ).toThrow('RGB 값이 유효하지 않습니다')
    })
  })
})

describe('getWordsListFromApi', () => {
  beforeEach(() => {
    global.dispatch = jest.fn();
    global.fetch = jest.fn(() => {
      return Promise.resolve('hello')
    })
  })

  afterAll(() => {
    delete global.dispatch;
    delete global.fetch;
  })

  it('dispatches action with proper type', () => {
    getWordsListFromApi()(dispatch);

    expect(dispatch).toBeCalledWith({ type: "GET_WORDLIST_REQUEST" });
  })

  it('called fetch with proper url', () => {
    const fetch = jest.fn(() => Promise.resolve('hello'));
    const dispatch = jest.fn();
    global.fetch = fetch;

    getWordsListFromApi()(dispatch);
    expect(fetch).toBeCalledWith("http://localhost:3333/wordLists");
  })
})

describe('test', () => {
  it('hello', () => {
    expect('1').toBe('1');
  })
})
