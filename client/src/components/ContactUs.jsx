import React, { Component } from 'react';
import style from '../styles/ContactUs.css';
import Axios from 'axios';

export default class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    };

    this.getInput = this.getInput.bind(this);
    this.submit = this.submit.bind(this);
  }

  getInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submit(e) {
    e.preventDefault();
    Axios.post('jack/message', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message,
    })
      .then(data => window.alert('Message received!'))
      .catch(err => console.error(err));
  }

  render() {
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
                <input
                  onChange={this.getInput}
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                />
              </label>
            </div>
            <div class="large-4 columns">
              <label>
                <input
                  onChange={this.getInput}
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                />
              </label>
            </div>
            <div class="large-4 columns">
              <label>
                <input
                  onChange={this.getInput}
                  type="text"
                  placeholder="Email"
                  name="email"
                />
              </label>
            </div>
            <div class="large-4 columns">
              <label>
                <input
                  onChange={this.getInput}
                  type="text"
                  placeholder="Phone"
                  name="phone"
                />
              </label>
            </div>
            <div className={`large-8 columns ${style.columns}`}>
              <label>
                Leave Us a Message
                <input
                  onChange={this.getInput}
                  className={`input ${style.input}`}
                  type="text"
                  placeholder="Message us"
                  name="message"
                />
              </label>
              <div className="large-7 columns">
                <button onClick={() => this.submit()} className="button">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
