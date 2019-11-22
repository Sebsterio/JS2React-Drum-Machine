import React from "react";

const Pad = props => {
  const data = props.data;
  const symbol = data.keySymbol;
  const isActive = data.isActive ? " active" : "";
  return (
    <div className="drum-pad-wrapper">
      <button
        id={"drum-pad" + symbol}
        className={"drum-pad" + isActive}
        onClick={()=>props.triggerPad(data)}
        onTransitionEnd={()=>props.handleTransitionEnd(data)}
      >
        <kbd>{symbol}</kbd>
        <audio id={"sound-" + symbol} src={data.url}></audio>
      </button>
    </div>
  );
};

export default Pad;
