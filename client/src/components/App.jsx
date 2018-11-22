import React, { Component } from 'react';
import Axios from 'axios';
import style from '../styles/App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('hello');
  }

  render() {
    return (
      <div>
        <div>
          <h1>Hello Will Render Once React Sets Up</h1>
          This is going to be the navigational Bar
          <div>This is the search Bar</div>
        </div>
      </div>
    );
  }
}
