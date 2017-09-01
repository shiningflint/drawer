import React from 'react';

class MapWindow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
    marker.addListener('click', this.props.pinClick.bind(this, 1));
  }

  render() {
    return(
      <div className="map-window" id="map">
      </div>
    )
  }
}

module.exports = MapWindow;
