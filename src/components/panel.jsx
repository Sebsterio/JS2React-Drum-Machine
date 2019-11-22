import React from "react";
import Pad from "./pad";
import { keys, soundBanks } from "../data";

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyBank: []
    };
    this.triggerPad = this.triggerPad.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
  }

  componentDidMount() {
    this.createKeyBank(this.props.currentBankIndex);
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentBankIndex !== this.props.currentBankIndex)
      this.createKeyBank(this.props.currentBankIndex);
  }

  render() {
    return (
      <div id="panel">
        {this.state.keyBank.map(pad => (
          <Pad
            key={pad.id}
            data={pad}
            triggerPad={this.triggerPad}
            handleTransitionEnd={this.handleTransitionEnd}
          />
        ))}
      </div>
    );
  }

  playSound(symbol) {
    const sound = document.getElementById("sound-"+symbol);
    if (!sound) return;
    sound.currentTime = 0;
    sound.play();
  }

  handleTransitionEnd(pad) {
    const newKeyBank = [ ...this.state.keyBank ]
    newKeyBank.map(key => {
      if (key.keySymbol === pad.keySymbol) {
        return key.isActive = false;
      }
    })
    this.setState({
      keyBank: newKeyBank
    })
  }

  triggerPad(pad) {
    this.playSound(pad.keySymbol);
    this.props.display(pad.id);
    const newKeyBank = [ ...this.state.keyBank ]
    newKeyBank.map(key => {
      if (key.keySymbol === pad.keySymbol) {
        return key.isActive = true;
      }
    })
    this.setState({
      keyBank: newKeyBank
    })
  }

  handleKeyDown(e) {
    const currentPad = this.state.keyBank.filter(key => {
      return key.keyCode === e.keyCode;
    })[0];
    this.triggerPad(currentPad)
  }

  createKeyBank(bankIndex) {
    this.props.display("Sound Bank #" + bankIndex);
    const newBank = [];
    for (let i = 0; i < keys.length; i++) {
      newBank.push({
        ...keys[i],
        ...soundBanks[bankIndex][i],
        isActive: false
      });
    }
    this.setState({ keyBank: newBank });
  }
}

export default Panel;
