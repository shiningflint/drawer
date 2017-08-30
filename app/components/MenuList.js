var React = require('react');
var Menu = require('./Menu');

class MenuList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="menu-list">
        <Menu number="1" />
        <Menu number="2" />
        <Menu number="3" />
        <Menu number="4" />
      </div>
    )
  }
}

module.exports = MenuList;
