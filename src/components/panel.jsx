import React from "react";
import Pad from "./pad";

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyBank: []
    };
    this.triggerPad = this.triggerPad.bind(this);
  }

  componentDidMount() {
    this.createKeyBank(this.props.currentBankIndex);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentBankIndex !== this.props.currentBankIndex)
      this.createKeyBank(this.props.currentBankIndex)
  }

  render() {
    return (
      <div id="panel">
        {this.state.keyBank.map(pad => (
          <Pad key={pad.id} data={pad} triggerPad={this.triggerPad} />
        ))}
      </div>
    );
  }

  playSound(symbol) {
    const sound = document.getElementById(symbol);
    if (!sound) return;
    sound.currentTime = 0;
    sound.play();
  }

  triggerPad(pad) {
    this.playSound(pad.keySymbol);
    this.props.display(pad.id);
  }

  createKeyBank(bankIndex) {
    this.props.display("Sound Bank #" + bankIndex);
    const newBank = [];
    for (let i = 0; i < keys.length; i++) {
      newBank.push({ ...keys[i], ...soundBanks[bankIndex][i] });
    }
    this.setState({ keyBank: newBank });
  }
}

const keys = [
  {
    keyCode: 81,
    keySymbol: "Q"
  },
  {
    keyCode: 87,
    keySymbol: "W"
  },
  {
    keyCode: 69,
    keySymbol: "E"
  },
  {
    keyCode: 65,
    keySymbol: "A"
  },
  {
    keyCode: 83,
    keySymbol: "S"
  },
  {
    keyCode: 68,
    keySymbol: "D"
  },
  {
    keyCode: 90,
    keySymbol: "Z"
  },
  {
    keyCode: 88,
    keySymbol: "X"
  },
  {
    keyCode: 67,
    keySymbol: "C"
  }
];
const soundBanks = [
  [
    {
      id: "Heater-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      id: "Heater-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      id: "Heater-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      id: "Heater-4",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      id: "Clap",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      id: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      id: "Kick-n'-Hat",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      id: "Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      id: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ],
  [
    {
      id: "Chord-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
    },
    {
      id: "Chord-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
    },
    {
      id: "Chord-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
    },
    {
      id: "Shaker",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
    },
    {
      id: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
    },
    {
      id: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
    },
    {
      id: "Punchy-Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
    },
    {
      id: "Side-Stick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
    },
    {
      id: "Snare",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
    }
  ]
];

export default Panel;
