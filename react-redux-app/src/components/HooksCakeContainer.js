import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

function HooksCakeContainer() {
  //hook to access state in redux store
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  //hook to access redux dispatch function
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of cakes - {numberOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default HooksCakeContainer;
