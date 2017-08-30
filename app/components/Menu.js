var React = require('react');

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <button className="menu">{this.props.number}</button>
    )
  }
}

module.exports = Menu
