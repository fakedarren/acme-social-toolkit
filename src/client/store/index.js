import React, { createContext, useContext, useReducer } from 'react';
import {
  SET_ACTION,
  SET_COLOR,
  SET_SHARE,
  SHARING_CANCEL,
  SHARING_START,
} from '../utils/constants';

const defaultState = {
  action: 1,
  color: 1,
  share: 1,
  sharing: false,
};

function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case SET_ACTION:
      return {
        ...state,
        action: action.action,
      };
    case SET_COLOR:
      return {
        ...state,
        color: action.color,
      };
    case SET_SHARE:
      return {
        ...state,
        color: 1,
        share: action.index,
      };
    case SHARING_CANCEL:
      return {
        ...state,
        sharing: false,
      };
    case SHARING_START:
      return {
        ...state,
        sharing: true,
      };
    default:
      return state;
  }
}

const StoreContext = createContext(null);

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const value = { state, dispatch };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}

export const useStore = () => useContext(StoreContext);
