import React, { Component } from 'react';
import Header from './components/Header';
import TimeLine from './components/TimeLine';

class App extends Component {
  render() {
    return (
      <div id="root">
        <div className="main">
          <Header/>
          <TimeLine login={this.props.params.login}/>
         </div>
       </div>
    );
  }
}

export default App;
