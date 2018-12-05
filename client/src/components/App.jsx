import React, { Component } from 'react';
import Axios from 'axios';
import style from '../styles/App.css';

import NavBar from './NavBar';
import BackgroundPicture from './BackgroundPic';
import Heading from './Heading';

import FindYourHome from './FindYourHome';
import FeatureList from './FeatureList';
import Features from './Features';
import Catchphrase from './Catchphrase';

import Explore from './Explore';
import MeetOurTeam from './MeetOurTeam';

//conditional render
import HomeValue from './HomeValue/HomeValue';

import ContactUs from './ContactUs';
import Footer from './Footer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agents: [],
      homes: [],
      slick: [
        `https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
        `https://images.pexels.com/photos/1439710/pexels-photo-1439710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
        `https://images.pexels.com/photos/1027516/pexels-photo-1027516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
        `https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
        `https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
      ],
      rooms: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      view: 'HOME',
    };

    Axios.defaults.baseURL =
      'http://ec2-54-218-247-109.us-west-2.compute.amazonaws.com';

    this.myRef = React.createRef();
    this.refScroll = this.refScroll.bind(this);
    this.getAgents = this.getAgents.bind(this);
    this.valueToRender = this.valueToRender.bind(this);
  }

  componentDidMount() {
    this.getAgents();
    this.getHomes();
  }

  getAgents() {
    Axios.get('/jack/agents')
      .then(data => {
        let agents = data.data.slice(0, 6);
        this.setState({
          agents,
        });
      })
      .catch(err => console.error(err));
  }

  getHomes() {
    Axios.get('/jack/homes')
      .then(data => {
        let datas = data.data;
        const random = datas.sort(() => 0.5 - Math.random());
        const homes = random.slice(0, 6);
        this.setState({
          homes,
        });
      })
      .catch(err => console.error(err));
  }

  refScroll() {
    window.scrollTo({
      top: this.myRef.current.offsetTop,
      behavior: 'smooth',
    });
  }

  valueToRender(e) {
    console.log(e);
    const text = e.target.text;
    console.log(text);
    this.setState({
      view: text,
    });
  }

  toRender() {
    if (this.state.view === 'HOME') {
      return (
        <div>
          <div className={`BackgroundAndHeading ${style.backgroundAndHeading}`}>
            <div className="slick">
              <BackgroundPicture slick={this.state.slick} />
            </div>
            <div className={`heading ${style.heading}`}>
              <Heading />
            </div>
          </div>

          <div className={`catchphrase ${style.catchphrase}`} ref={this.myRef}>
            <Catchphrase />
          </div>

          {/* <div className={`search ${style.search}`}>
            <FindYourHome rooms={this.state.rooms} />
          </div> */}
          <div
            className={`features ${
              style.row
            } row small-up-1 medium-up-2 large-up-3`}
          >
            <h2>Featured Homes</h2>
            <FeatureList homes={this.state.homes} />
          </div>
          {/* <div
            className={`features ${
              style.row
            } row small-up-1 medium-up-2 large-up-3`}
          >
            <h2>Featured Homes</h2>
            <Features homes={this.state.homes} />
          </div> */}
          <div>
            <div className={`explore ${style.row}`}>
              <h2>Explore Neighorhoods</h2>
              <Explore />
            </div>
          </div>
        </div>
      );
    } else if ('MEET OUR TEAM') {
      return (
        <div className={`row ${style.row} small-up-1 medium-up-2 large-up-3`}>
          <h2>MEET OUR TEAM</h2>
          <MeetOurTeam agents={this.state.agents} />
        </div>
      );
    }
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

        <div className={`navigation ${style.navigation}`}>
          <NavBar valueToRender={this.valueToRender} />
        </div>

        {this.toRender()}

        <div className={` row contactUs ${style.row}`}>
          <h2>Contact Us</h2>
          <div className={`contact ${style.contactUs}`}>
            <ContactUs />
          </div>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}
