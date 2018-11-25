const Agents = require('express').Router();
const { AgentController } = require('../controller/agentController');

Agents.route('/agents')
  .get(AgentController.get)
  .post(AgentController.post)
  .put(AgentController.update)
  .delete(AgentController.delete);

module.exports = Agents;
