import React, { Component } from 'react';
import style from '../styles/BackgroundPic.css';
import Slider from 'react-slick';
// import '../styles/Slick.css';

export default class BackgroundPic extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const settings = {
      autoplay: true,
      autoplaySpeed: 5000,
      dots: false,
      arrow: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slideToScroll: 1,
      fade: true,
    };

    const img = this.props.slick;
    console.log(img);
    return (
      <div className="orbit-container">
        <Slider {...settings}>
          {img.map(image => (
            <img className={`image ${style.image}`} src={image} />
          ))}
        </Slider>
      </div>
    );
  }
}

/*

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
      */
