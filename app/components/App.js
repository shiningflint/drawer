var React = require('react');
var MenuList = require('./MenuList');
var InfoWindow = require('./InfoWindow');

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="base-app">
        <MenuList />
        <InfoWindow />
      </div>
    )
  }
}

module.exports = App;
