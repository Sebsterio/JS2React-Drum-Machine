import React from "react";

const Pad = props => {
  const data = props.data;
  const symbol = data.keySymbol;
  const drumClassName = "drum-pad" + (props.isActive ? " active" : ""); // do: &&
  return (
    <div className="drum-pad-wrapper">
      <button
        id={"drum-pad" + symbol}
        className={drumClassName}
        onClick={()=>props.triggerPad(data)}
        onTransitionEnd={()=>props.killPads()}
      >
        <kbd>{symbol}</kbd>
        <audio id={"sound-" + symbol} src={data.url}></audio>
      </button>
    </div>
  );
};

export default Pad;
