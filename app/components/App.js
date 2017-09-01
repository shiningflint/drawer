import React from 'react';
import MenuList from './MenuList';
import InfoWindow from './InfoWindow';
import MapWindow from './MapWindow';

var infos = [
  [
    "https://s3-ap-southeast-1.amazonaws.com/acbw/uploads/2017/02/IMG_20170204_111814.jpg",
    "#c84d4b",
    "The Smell of a Coffee Dripper"
  ],
  [
    "https://s3-ap-southeast-1.amazonaws.com/acbw/uploads/2017/02/IMG_20170204_112254.jpg",
    "#634bc8",
    "The Eerie Silent of the Big City"
  ],
  [
    "https://s3-ap-southeast-1.amazonaws.com/acbw/uploads/2017/02/IMG_20170204_112535.jpg",
    "#c8ac4b",
    "City Race"
  ],
  [
    "https://s3-ap-southeast-1.amazonaws.com/acbw/uploads/2017/02/IMG_20170204_112604.jpg",
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
        <MapWindow />
        <InfoWindow
          info={infos[this.state.info_state - 1]}
          close={this.closeWindow}
          infowindow={this.state.info_window} />
      </div>
    )
  }
}

module.exports = App;
