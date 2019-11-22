import React from "react";

const Controls = props => {
  return (
    <div id="controls">
      <div id="display"> {props.displayMsg} </div>
      <div className="bank-select">
        <button className="bank-select-button" onClick={props.toggleBank}>
          &larr;
        </button>
        <button className="bank-select-button" onClick={props.toggleBank}>
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default Controls;
