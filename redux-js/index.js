const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

function buyIcream() {
  return {
    type: BUY_ICECREAM,
  };
}

// const initialState = {
//   numberOfCakes: 20,
//   numberOfIceCreams: 20,
// };

const initialCakeState = {
  numberOfCakes: 10,
};

const initialIceCreamState = {
  numberOfIceCreams: 20,
};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "BUY_CAKE":
//       return {
//         ...state,
//         numberOfCakes: state.numberOfCakes - 1,
//       };

//     case "BUY_ICECREAM":
//       return {
//         ...state,
//         numberOfIceCreams: state.numberOfIceCreams - 1,
//       };

//     default:
//       return state;
//   }
// };

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };

    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case "BUY_ICECREAM":
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - 1,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
// const store = createStore(reducer);
const store = createStore(rootReducer, applyMiddleware(logger));

console.log("Intial State", store.getState());

const unsubscribe = store.subscribe(
  () => {}
  //   console.log("Updated State", store.getState())
);

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIcream());
store.dispatch(buyIcream());

unsubscribe();
