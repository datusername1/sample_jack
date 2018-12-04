import React, { Component } from 'react';
import style from '../styles/Explore.css';
import Fade from 'react-reveal/Fade';

export default class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stockPhotos: [
        `https://media.gettyimages.com/photos/huntington-beach-pier-picture-id166832971`,
        `https://media.gettyimages.com/photos/main-entrance-to-asian-garden-mall-little-saigon-westminster-in-picture-id564015205`,
        `https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
        `https://image.shutterstock.com/z/stock-photo-beautiful-street-with-modern-residential-houses-in-summer-sunny-day-768370642.jpg`,
      ],
      isHover: '',
    };
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  mouseEnter(e) {
    console.log(e.target.id);
    this.setState({
      isHover: e.target.id,
    });
  }

  mouseLeave(e) {
    console.log(e.target.id);
    this.setState({
      isHover: '',
    });
  }

  render() {
    return (
      <div className="row large-up-2">
        {this.state.stockPhotos.map((photo, id) => (
          <div className={`column ${style.column}`}>
            <img
              id={id}
              onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave}
              className={`image ${style.image}`}
              src={photo}
            />
          </div>
        ))}
        {this.state.isHover === '0' ? (
          <div className={`container ${style.containerhb}`}>
            <Fade bottom cascade>
              <h2 className={`fadeIn ${style.hb}`}>HUNTINGTON BEACH</h2>
            </Fade>
          </div>
        ) : null}
        {this.state.isHover === '1' ? (
          <div className={`container ${style.containerwest}`}>
            <Fade bottom cascade className={style.containerwest}>
              <div className={`fadeIn ${style.west}`}>WESTMINSTER</div>
            </Fade>
          </div>
        ) : null}
        {this.state.isHover === '2' ? (
          <div className={`container ${style.containerfv}`}>
            <Fade bottom cascade>
              <div className={`fv ${style.fv}`}>FOUNTAIN VALLEY</div>
            </Fade>
          </div>
        ) : null}
        {this.state.isHover === '3' ? (
          <div className={`container ${style.containergg}`}>
            <Fade bottom cascade>
              <div className={`gg ${style.gg}`}>GARDEN GROVE</div>
            </Fade>
          </div>
        ) : null}
      </div>
    );
  }
}
