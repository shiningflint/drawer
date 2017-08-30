var React = require('react');
var MenuList = require('./MenuList');
var InfoWindow = require('./InfoWindow');

var infos = [
  [
    "https://source.unsplash.com/kUUacyTdChM/1024x768",
    "#c84d4b",
    "The Smell of a Coffee Dripper"
  ],
  [
    "https://source.unsplash.com/AETe6TuEBck/1024x768",
    "#634bc8",
    "The Eerie Silent of the Big City"
  ],
  [
    "https://source.unsplash.com/vM97bob4ZGk/1024x768",
    "#c8ac4b",
    "City Race"
  ],
  [
    "https://source.unsplash.com/lcg5PdLCOWs/1024x768",
    "#3d9e4d",
    "The Fear of God is the First Step"
  ]
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      info_state: 2,
      info_window: false
    }

    this.handleClick = this.handleClick.bind(this);
    this.closeWindow = this.closeWindow.bind(this);
  }

  handleClick(e) {
    this.setState({
      info_state: e.target.innerHTML,
      info_window: true
    });
  }

  closeWindow() {
    this.setState({
      info_window: false
    })
  }

  render() {
    return(
      <div className="base-app">
        <MenuList topChange={this.handleClick} />
        {this.state.info_window &&
          <InfoWindow
            info={infos[this.state.info_state - 1]}
            close={this.closeWindow} />
        }
      </div>
    )
  }
}

module.exports = App;
