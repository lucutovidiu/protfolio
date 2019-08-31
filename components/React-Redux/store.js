import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const myInitialState = {
  loggedInUser: "",
  isAuthenticaticated: false,
  GetPortfolios: null,
  jwt: ""
};
// console.log(myInitialState);
export const actionTypes = {
  AUTH_USER: "AUTH_USER",
  LOGOUT: "LOGOUT"
};

// REDUCERS
export const rootReducer = (state = myInitialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_USER: {
      const newState = {
        ...state,
        loggedInUser: action.payload.loggedInUser,
        isAuthenticaticated: true,
        jwt: action.payload.jwt,
        role: action.payload.role
      };
      window.sessionStorage.setItem("state", JSON.stringify(newState));
      return newState;
    }
    case actionTypes.LOGOUT: {
      window.sessionStorage.removeItem("state");
      window.location = "/";
      return myInitialState;
    }
    // case "GET_PORTFOLIOS": {
    //   // console.log(action.payload.GetPortfolios);
    //   return {
    //     // ...state,
    //     GetPortfolios: action.payload.GetPortfolios
    //   };
    // }
    // case "REMOVE_PORTFOLIOS": {
    //   console.log(state)
    //   return {
    //     ...state,
    //     GetPortfolios: state.GetPortfolios.filter(
    //       item => item.id === action.payload
    //     )
    //   };
    // }
    default: {
      return state;
    }
  }
};
// ACTIONS
export const serverRenderClock = () => {
  return { type: actionTypes.TICK, light: false, ts: Date.now() };
};

export function initializeStore(initialState = myInitialState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
}
