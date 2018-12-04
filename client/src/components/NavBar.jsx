import React from 'react';
import style from '../styles/NavBar.css';

const NavBar = function(props) {
  return (
    <div
      className={`top-bar ${style.topBar}`}
      id="realEstateMenu"
      data-topbar
      role="navigation"
    >
      <div className="top-bar-left">
        <ul className="menu">
          <li className={`menu-text ${style.title}`} role="menuitem">
            Jack Luan Tran - Real Estate
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu" data-responsive-menu="accordion">
          <li className={`menu-text ${style.menuText}`}>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">TESTIMONIALS</a>
          </li>
          <li>
            <a href="#">MEET OUR TEAM</a>
          </li>
          <li>
            <a href="#">HOME VALUE</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
