import React from "react";
import { buyIceCream } from "../redux";
import { connect } from "react-redux";

function IceCreamContainer(props) {
  return (
    <div>
      <h2>Number of icecreams - {props.numberOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy Icecream</button>
    </div>
  );
}

//state from redux store is mapped to this component props
const mapStateToProps = (state) => {
  return {
    numberOfIceCreams: state.iceCream.numberOfIceCreams,
  };
};

//map dispatch of action creator to props of component
const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
