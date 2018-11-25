import React from 'react';
import style from '../styles/Footer.css';

const Footer = function(props) {
  return (
    <footer>
      <div className={`row expanded callout secondary ${style.wrapper}`}>
        <table>
          <thead>
            <tr>
              <th width="150">Legal information</th>
              <th width="150">Legal information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Legal information</td>
              <td>Legal information</td>
            </tr>
          </tbody>
        </table>
      </div>
    </footer>
  );
};

export default Footer;
