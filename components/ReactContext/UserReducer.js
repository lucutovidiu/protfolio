let initState;
// if (global.window.sessionStorage.getItem("state")) {
//   initState = JSON.parse(global.window.sessionStorage.getItem("state"));
// } else
initState = {
  loggedInUser: "",
  isAuthenticaticated: false,
  jwt: ""
};

export default function UserReducer(state = initState, action) {
  switch (action.type) {
    case "AUTH_USER": {
      const newState = {
        ...state,
        loggedInUser: action.payload.loggedInUser,
        isAuthenticaticated: true,
        jwt: action.payload.jwt,
        role: action.payload.role
      };
      return newState;
    }
    case "LOGOUT": {
      return initState;
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
}
