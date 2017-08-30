var React = require('react');
var Menu = require('./Menu');

class MenuList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="menu-list">
        <Menu number="1" goChange={this.props.topChange} />
        <Menu number="2" goChange={this.props.topChange} />
        <Menu number="3" goChange={this.props.topChange} />
        <Menu number="4" goChange={this.props.topChange} />
      </div>
    )
  }
}

module.exports = MenuList;
