import React, { Component } from 'react';
import Axios from 'axios';
import style from '../styles/App.css';
import NavBar from './NavBar';
import BackgroundPicture from './BackgroundPic';
import FindYourHome from './FindYourHome';
import Catchphrase from './Catchphrase';
import Features from './Features';
import YouMayLike from './YouMayLike';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agents: [],
      homes: [],
      rooms: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };

    this.getAgents = this.getAgents.bind(this);
  }

  componentDidMount() {
    this.getAgents();
    this.getHomes();
  }

  getAgents() {
    Axios.get('/jack/agents')
      .then(data => {
        let agents = data.data;
        this.setState({
          agents,
        });
      })
      .catch(err => console.error(err));
  }

  getHomes() {
    Axios.get('/jack/homes')
      .then(data => {
        let homes = data.data;
        this.setState({
          homes,
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    const orbit = [
      `https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
      `https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
      `https://images.pexels.com/photos/1027516/pexels-photo-1027516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
      `https://images.pexels.com/photos/1439710/pexels-photo-1439710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
      `https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
    ];
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

        <div className={`navigation ${style.navigation}`}>
          <NavBar />
        </div>

        <div className="BackgroundAndSearch">
          <div className="orbit">
            <BackgroundPicture orbit={orbit} />
          </div>
          <div className={`search ${style.search}`}>
            <FindYourHome rooms={this.state.rooms} />
          </div>
        </div>
        <div className={`catchphrase ${style.catchphrase}`}>
          <Catchphrase />
        </div>

        <div
          className={`features ${
            style.row
          } row small-up-1 medium-up-2 large-up-3`}
        >
          <h2>Featured Homes</h2>
          <Features homes={this.state.homes} />
        </div>

        <div className="youMayLike">
          <YouMayLike />
        </div>
      </div>
    );
  }
}
