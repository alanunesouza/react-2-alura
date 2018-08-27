import { Component } from 'react';
import { browserHistory } from 'react-router';

export default class Logout extends Component {

  componentDidWillMount() {
    localStorage.removeItem('auth-token');
    browserHistory.push('/');
  }

  render() {
    return null;
  }
}
