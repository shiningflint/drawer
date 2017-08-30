var React = require('react');

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <button className="menu" onClick={this.props.goChange}>{this.props.number}</button>
    )
  }
}

module.exports = Menu
