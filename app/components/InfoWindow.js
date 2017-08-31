var React = require('react');

class InfoWindow extends React.Component {
  constructor(props) {
    super(props);
    this.mountStyle = this.mountStyle.bind(this);
    this.unMountStyle = this.unMountStyle.bind(this);
    this.transitionEnd = this.transitionEnd.bind(this);
    this.state = {
      show: false,
      active: ""
    }
  }

  unMountStyle() {
    this.setState({ active: "" })
  }

  mountStyle() {
    this.setState({ active: " active" })
  }

  transitionEnd() {
    if(!this.props.infowindow){
      return this.setState({show: false})
    }
  }

  componentWillReceiveProps(new_props) {
    console.log(new_props);
    if (!new_props.infowindow) {
      setTimeout(this.unMountStyle, 10)
    } else {
      this.setState({ show: true });
      setTimeout(this.mountStyle, 10);
    }
  }

  render() {
    return(
      this.state.show &&
        <div className={"info-window"+this.state.active}
          onTransitionEnd={this.transitionEnd}>
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
