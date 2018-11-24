require('dotenv').config();
const express = require('express');
const { AgentSample } = require('../database/models/agentModels');

const Controller = {
  get: (req, res) => {
    res.status(200).send('hello from get');
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

module.exports = { Controller };
