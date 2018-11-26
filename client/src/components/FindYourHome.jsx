import React, { Component } from 'react';
import style from '../styles/FindYourHome.css';

class FindYourHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const rooms = this.props.rooms;
    return (
      <form>
        <div class="row">
          <div class="large-3 columns">
            <label className={style.label}>
              Address
              <input type="text" placeholder="Address, City, State, Zip" />
            </label>
          </div>
          <div class="large-2 columns">
            <label className={style.label}>
              Radius
              <input type="text" placeholder="2 - 20 miles" />
            </label>
          </div>
          <div class="large-2 columns">
            <label className={style.label}>
              Min Price
              <input type="text" placeholder="$300,000" />
            </label>
          </div>
          <div class="large-2 columns">
            <label className={style.label}>
              Max Price
              <input type="text" placeholder="$800,000" />
            </label>
          </div>
          <div class="large-1 columns">
            <label className={style.label}>
              Beds
              <select>
                {rooms.map(room => (
                  <option value={room}>{room}</option>
                ))}
              </select>
            </label>
          </div>
          <div class="large-1 columns">
            <label className={style.label}>
              Bath
              <select>
                {rooms.map(room => (
                  <option value={room}>{room}</option>
                ))}
              </select>
            </label>
          </div>
          <div class="large-1 columns">
            <a className={`button ${style.button}`}>FIND</a>
          </div>
        </div>
      </form>
    );
  }
}

export default FindYourHome;
