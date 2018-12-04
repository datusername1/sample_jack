import React from 'react';
import style from '../styles/ContactUs.css';

const ContactUs = function(props) {
  return (
    <div className="row">
      <div
        className={`show-for-large large-3 columns ${style.imgParent} ${
          style.Imgrow
        }`}
      >
        <img src="https://www.jackluantran.com/account/acc_files/10000/7098/html/photo.jpg" />
        <p>Jack Tran Frontier Real Estate Services</p>
        <p>Westminster, CA 92683</p>
        <p>
          Real Estate Broker <br />
          DRE Lic#: 01852802
        </p>
      </div>
      <form>
        <div class={`row ${style.row}`}>
          <div class="large-4 columns">
            <label>
              <input type="text" placeholder="First Name" />
            </label>
          </div>
          <div class="large-4 columns">
            <label>
              <input type="text" placeholder="Last Name" />
            </label>
          </div>
          <div class="large-4 columns">
            <label>
              <input type="text" placeholder="Email" />
            </label>
          </div>
          <div class="large-4 columns">
            <label>
              <input type="text" placeholder="Phone" />
            </label>
          </div>
          <div className={`large-8 columns ${style.columns}`}>
            <label>
              Leave Us a Message
              <input
                className={`input ${style.input}`}
                type="text"
                placeholder="Message us"
              />
            </label>
            <div className="large-7 columns">
              <button className="button">SUBMIT</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
