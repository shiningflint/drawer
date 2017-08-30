var React = require('react');

class InfoWindow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="info-window">
        <img src="https://source.unsplash.com/kUUacyTdChM/1024x768" />
        <div className="info-text-wrapper" style={{backgroundColor: "#c84d4b"}}>
          <p className="in-txt">in:</p>
          <h2 className="info-title">The Smell of a Coffee Dripper</h2>
        </div>
      </div>
    )
  }
}

module.exports = InfoWindow;
