var React = require('react');
var MenuList = require('./MenuList');
var InfoWindow = require('./InfoWindow');

var infos = {
  info1: [
    "https://source.unsplash.com/kUUacyTdChM/1024x768",
    "#c84d4b",
    "The Smell of a Coffee Dripper"
  ],
  info2: [
    "https://source.unsplash.com/AETe6TuEBck/1024x768",
    "#634bc8",
    "The Eerie Silent of the Big City"
  ],
  info3: [
    "https://source.unsplash.com/vM97bob4ZGk/1024x768",
    "#c8ac4b",
    "City Race"
  ],
  info4: [
    "https://source.unsplash.com/lcg5PdLCOWs/1024x768",
    "#3d9e4d",
    "The Fear of God is the First Step"
  ]
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      info_state: infos.info1,
      info_window: 0
    }

    this.handleClick = this.handleClick.bind(this);
    this.closeWindow = this.closeWindow.bind(this);
  }

  handleClick(e) {
    if (e.target.innerHTML === "1") {
      this.setState({
        info_state: infos.info1,
        info_window: 1
      });
    } else if (e.target.innerHTML === "2") {
      this.setState({
        info_state: infos.info2,
        info_window: 1
      });
    } else if (e.target.innerHTML === "3") {
      this.setState({
        info_state: infos.info3,
        info_window: 1
      });
    } else {
      this.setState({
        info_state: infos.info4,
        info_window: 1
      });
    }
  }

  closeWindow() {
    this.setState({
      info_window: 0
    })
  }

  render() {
    var infowindow = "";
    if(this.state.info_window === 1) {
      infowindow = <InfoWindow
        info={this.state.info_state}
        close={this.closeWindow} />;
    } else {
      infowindow = "";
    }
    return(
      <div className="base-app">
        <MenuList topChange={this.handleClick} />
        {infowindow}
      </div>
    )
  }
}

module.exports = App;
