import React from "react";
import Pad from "./pad";

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activatedKey: ""
    };
    this.triggerPad = this.triggerPad.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.killPads = this.killPads.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return (
      <div id="panel">
        {this.props.keyBank.map(pad => {
          const isActive = pad.keySymbol === this.state.activatedKey;
          return (
            <Pad
              key={pad.id}
              data={pad}
              isActive={isActive}
              triggerPad={this.triggerPad}
              killPads={this.killPads}
            />
          );
        })}
      </div>
    );
  }

  playSound(symbol) {
    const sound = document.getElementById("sound-" + symbol);
    if (!sound) return;
    sound.currentTime = 0;
    sound.play();
  }

  killPads() {
    this.setState({
      activatedKey: ""
    });
  }

  triggerPad(pad) {
    if (pad) {
      this.playSound(pad.keySymbol);
      this.props.updateMsg(pad.id);
      this.setState({
        activatedKey: pad.keySymbol
      });
    } else this.props.updateMsg("key not mapped");
  }

  handleKeyDown(e) {
    const currentPad = this.props.keyBank.filter(key => {
      return key.keyCode === e.keyCode;
    })[0];
    this.triggerPad(currentPad);
  }
}

export default Panel;
