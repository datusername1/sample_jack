const Agents = require('express').Router();
const { AgentController } = require('../controller/agentController');

Agents.route('/agent')
  .get(AgentController.get)
  .post(AgentController.post)
  .put(AgentController.update)
  .delete(AgentController.delete);

module.exports = Agents;
