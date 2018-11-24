require('dotenv').config();
const express = require('express');
const { HouseSample } = require('../../database/models/houseModel');

const HomeController = {
  get: (req, res) => {
    HouseSample.findAll({})
      .then(data => res.status(200).send(data))
      .catch(err => console.error(err));
  },

  post: (req, res) => {
    res.status(201).send('hello from post');
  },

  update: (req, res) => {
    res.status(202).send('hello from update');
  },

  delete: (req, res) => {
    res.status(200).send('hello from delete');
  },
};

module.exports = { HomeController };
