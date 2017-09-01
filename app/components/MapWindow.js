import React from 'react';

class MapWindow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="map-window" ref="map"></div>
    )
  }
}

module.exports = MapWindow;
