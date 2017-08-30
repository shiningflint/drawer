var React = require('react');

class InfoWindow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="info-window">
        <span className="close-window" onClick={this.props.close}>Close</span>
        <img src={this.props.info[0]} />
        <div className="info-text-wrapper" style={{backgroundColor: this.props.info[1]}}>
          <p className="in-txt">in:</p>
          <h2 className="info-title">{this.props.info[2]}</h2>
        </div>
      </div>
    )
  }
}

module.exports = InfoWindow;
