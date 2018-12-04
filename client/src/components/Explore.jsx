import React, { Component } from 'react';
import style from '../styles/Explore.css';

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
      isHover: false,
    };
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  mouseEnter() {
    console.log('true');
    this.setState({
      isHover: true,
    });
  }

  mouseLeave() {
    console.log('false');
    this.setState({
      isHover: false,
    });
  }

  render() {
    return (
      <div className="row large-up-2">
        {this.state.stockPhotos.map(photo => (
          <div className={`column ${style.column}`}>
            <img
              onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave}
              className={`image ${style.image}`}
              src={photo}
            />
            {this.state.isHover ? <div>Hello</div> : null}
          </div>
        ))}
      </div>
    );
  }
}
