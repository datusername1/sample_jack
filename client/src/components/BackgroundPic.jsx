import React, { Component } from 'react';
import style from '../styles/BackgroundPic.css';

export default class BackgroundPic extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const orbit = this.props.orbit;
    const firstOrbit = orbit.slice(0, 1);
    return (
      <div className="orbit" role="region" aria-label="sample" data-orbit>
        <div class="orbit-wrapper">
          <div class="orbit-controls">
            <button class="orbit-previous">
              <span class="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;
            </button>
            <button class="orbit-next">
              <span class="show-for-sr">Next Slide</span>&#9654;&#xFE0E;
            </button>
          </div>

          <ul className="orbit-container">
            <li className="is-active orbit-slide">
              <figure className="orbit-figure">
                <img
                  className="orbit-image"
                  src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Space"
                />
              </figure>
            </li>
          </ul>
        </div>
        <nav className={`orbit-bullets ${style.orbitBullets}`}>
          <button className="is-active" data-slide="0">
            <span className="show-for-sr">First slide details.</span>
            <span className="show-for-sr">Current Slide</span>
          </button>
          <button data-slide="1">
            <span className="show-for-sr">Second slide details.</span>
          </button>
          <button data-slide="2">
            <span className="show-for-sr">Third slide details.</span>
          </button>
          <button data-slide="3">
            <span className="show-for-sr">Fourth slide details.</span>
          </button>
        </nav>
      </div>
    );
  }
}
