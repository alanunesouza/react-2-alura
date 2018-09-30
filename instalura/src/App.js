import React, { Component } from 'react';
import Header from './components/Header';
import TimeLine from './components/TimeLine';

class App extends Component {
  render() {
    return (
      <div id="root">
        <div className="main">
          <Header store={this.context.store}/>
          <TimeLine login={this.props.params.login} store={this.context.store}/>
         </div>
       </div>
    );
  }
}

App.contextTypes = {
  store : React.PropTypes.object.isRequired
}

export default App;
