import React from 'react';
import Slider from 'react-slick';
import Popup from 'reactjs-popup';
import style from '../styles/FeatureList.css';

const FeatureList = function(props) {
  const settings = {
    adaptiveHeight: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const homes = props.homes;
  console.log(homes);
  return (
    <div className={`featureListContainer ${style.featureListContainer}`}>
      <Slider {...settings}>
        {homes.map(home => (
          <div className="container">
            <img className={`images ${style.image}`} src={home.image} />
            <div className={`card-section ${style.cardSection}`}>
              <p className={`bedBath ${style.bedBath}`}>{`${home.bed}bd ${
                home.bath
              }ba`}</p>
              <p className={`address ${style.address}`}>{home.address}</p>
              <p>2500 sq ft</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeatureList;
