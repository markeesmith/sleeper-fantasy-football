const fetch = require('node-fetch');
var config = require('../sleeper.config');

var league = [];

league.getLeagueId = function() {
  return config.leagueId;
}

module.exports = league;