require('dotenv').config();
const express = require('express');
const { HouseSample } = require('../../database/models/houseModel');
const { Zillow } = require('../../helper/helpfunc');
const okhttp = require('okhttp');

const HomeController = {
  get: (req, res) => {
    HouseSample.findAll({})
      .then(data => res.status(200).send(data))
      .catch(err => console.error(err));
  },

  post: (req, res) => {
    Zillow(req.body, (err, data) => {
      if (err) {
        console.error(err);
        res.status(404).send('not found');
      } else {
        console.log(req.body);
        res.status(201).send(data.body);
      }
    });
  },

  update: (req, res) => {
    res.status(202).send('hello from update');
  },

  delete: (req, res) => {
    res.status(200).send('hello from delete');
  },
};

module.exports = { HomeController };
