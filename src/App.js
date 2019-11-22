import React, { Component } from "react";
import Panel from "./components/panel";
import Controls from "./components/controls";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMsg: "",
      currentBankIndex: 0
    };
    this.display = this.display.bind(this);
    this.toggleBank = this.toggleBank.bind(this)
  }
  render() {
    return (
      <div id="drum-machine">
        <Panel display={this.display} currentBankIndex={this.state.currentBankIndex} />
        <Controls displayMsg={this.state.displayMsg} toggleBank={this.toggleBank}/>
      </div>
    );
  }
  display(id) {
    this.setState({ displayMsg: id });
  }
  toggleBank() {
    const newBankIndex = this.state.currentBankIndex === 0 ? 1 : 0;
    const newState = {...this.state, currentBankIndex: newBankIndex};
    this.setState(newState)
  }
}

export default App;
