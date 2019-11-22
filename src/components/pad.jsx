import React from "react";

class Pad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.deactivate = this.deactivate.bind(this);
    this.activate = this.activate.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }
  render() {
    const data = this.props.data;
    const symbol = data.keySymbol;
    const isActive = this.state.active ? " active" : "";
    return (
      <div className="drum-pad-wrapper">
        <button
          id={"drum-" + symbol}
          className={"drum-pad" + isActive}
          onClick={this.activate}
          onTransitionEnd={this.deactivate}
        >
          <kbd>{symbol}</kbd>
          <audio id={symbol} className="clip" src={data.url}></audio>
        </button>
      </div>
    );
  }
  handleKeyDown(e) {
    if (e.keyCode === this.props.data.keyCode) this.activate();
  }
  activate() {
    this.setState({ active: true });
    this.props.triggerPad(this.props.data);
  }
  deactivate() {
    this.setState({ active: false });
  }
}

export default Pad;
