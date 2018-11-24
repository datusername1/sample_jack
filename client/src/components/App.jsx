import React, { Component } from 'react';
import Axios from 'axios';
import style from '../styles/App.css';
import NavBar from './NavBar';

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
        {/* <div
          className="title-bar"
          data-responsive-toggle="realEstateMenu"
          data-hide-for="small"
        >
          <button class="menu-icon" type="button" data-toggle />
          <div class="title-bar-title">Menu</div>
        </div> */}
        <div className="navigation fixed">
          <NavBar />
        </div>

        <div className="large-12 cell">
          <h1>Hello Will Render Once React Sets Up</h1>
          This is going to be the navigational Bar
          <div>This is the search Bar</div>
        </div>
      </div>
    );
  }
}
