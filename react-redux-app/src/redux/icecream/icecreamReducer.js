import { BUY_ICECREAM } from "./icecreamTypes";

const intialState = {
  numberOfIceCreams: 20,
};

const iceCreamReducer = (state = intialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - 1,
      };

    default:
      return state;
  }
};

export default iceCreamReducer;
