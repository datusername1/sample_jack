import React from 'react';
import style from '../styles/Features.css';

const Features = function(props) {
  const home = props.homes;
  const sixHomes = home.slice(0, 6);
  return (
    <div className="row small-up-1 medium-up-2 large-up-3">
      {sixHomes.map(homes => (
        <div className={`column ${style.column}`}>
          <div className={`callout ${style.callout}`}>
            <p className={`listing ${style.listing}`}>{`Listing ${
              homes.listing_id
            }`}</p>
            <p className={`price ${style.price}`}>{`${homes.price}`}</p>
            <p>
              <img className={`imgs ${style.image}`} src={homes.image} />
            </p>
            <p className={`lead ${style.lead}`}>{homes.address}</p>
            <p className={`subheader ${style.subheader}`}>
              {homes.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
