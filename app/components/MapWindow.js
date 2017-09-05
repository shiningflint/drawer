import React from 'react';
import LocationsFile from '../../assets/locations.json';

class MapWindow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: LocationsFile[0]
    });
    var markers = this.setMarkers(LocationsFile, map);
  }

  setMarkers(locations, map) {
    locations.map((location, index) => {
      var onemark = new google.maps.Marker({
        position: location,
        map: map
      });
      onemark.addListener('click', this.props.pinClick.bind(this, index+1));
    });
  }

  render() {
    return(
      <div className="map-window" id="map">
      </div>
    )
  }
}

module.exports = MapWindow;
