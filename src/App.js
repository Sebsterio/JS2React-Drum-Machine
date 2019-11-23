import React from "react";
import Panel from "./components/panel";
import Controls from "./components/controls";
import { keys, soundBanks } from "./data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBankIndex: 0,
      keyBank: [],
      displayMsg: ""
    };
    this.toggleBank = this.toggleBank.bind(this);
    this.updateMsg = this.updateMsg.bind(this);
  }
  componentDidMount() {
    this.createKeyBank(this.state.currentBankIndex);
  }
  // componentDidUpdate(prevState) {
  //   if (prevState.currentBankIndex !== this.state.currentBankIndex)
  //     this.createKeyBank(this.state.currentBankIndex);
  // }
  render() {
    return (
      <div id="drum-machine">
        <Panel keyBank={this.state.keyBank} updateMsg={this.updateMsg} />
        <Controls
          displayMsg={this.state.displayMsg}
          toggleBank={this.toggleBank}
        />
      </div>
    );
  }
  updateMsg(id) {
    this.setState({ displayMsg: id });
  }
  createKeyBank(newBankIndex) {
    const newMsg = "Sound Bank #" + newBankIndex; // do: +1
    const newBank = [];
    for (let i = 0; i < keys.length; i++) {
      newBank.push({
        ...keys[i],
        ...soundBanks[newBankIndex][i]
      });
    }
    this.setState({
      currentBankIndex: newBankIndex,
      keyBank: newBank,
      displayMsg: newMsg
    });
  }
  toggleBank() {
    const newBankIndex = this.state.currentBankIndex === 0 ? 1 : 0;
    this.createKeyBank(newBankIndex);
  }
}

export default App;
