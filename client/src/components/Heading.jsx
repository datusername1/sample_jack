import React from 'react';
import style from '../styles/Heading.css';

const Heading = function(props) {
  return (
    <div className={`callout secondary ${style.blockquote}`}>
      <blockquote>
        <h2>
          Simple home buying solutions <br />
          Let us do the work
        </h2>
        <h3 className={style.head3}>
          Real estate, home lending, investing or buying houses with discounted
          fees and full benefits.
        </h3>
        <cite>Established 2008</cite>
      </blockquote>
    </div>
  );
};

export default Heading;
