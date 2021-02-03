const fetch = require('node-fetch');
var config = require('../sleeper.config');

const leagueId = config.leagueId;

function getLeagueId() {
  return config.leagueId;
}

async function getLeagueInfo() {
  return fetch(`https://api.sleeper.app/v1/league/${leagueId}`).then((res) =>
    res.json()
  );
}

async function getLeagueRosters() {
  return fetch(
    `https://api.sleeper.app/v1/league/${leagueId}/rosters`
  ).then((res) => res.json());
}

async function getLeagueUsers() {
  return fetch(
    `https://api.sleeper.app/v1/league/${leagueId}/users`
  ).then((res) => res.json());
}

async function getLeagueMatchups(week) {
  return fetch(
    `https://api.sleeper.app/v1/league/${leagueId}/matchups/${week}`
  ).then((res) => res.json());
}

async function getLeaguePlayoffBracket() {
  return fetch(
    `https://api.sleeper.app/v1/league/${leagueId}/winners_bracket`
  ).then((res) => res.json());
}

async function getLeagueTransations(round) {
  return fetch(
    `https://api.sleeper.app/v1/league/${leagueId}/transactions/${round}`
  ).then((res) => res.json());
}

async function getLeagueTradedPicks() {
  return fetch(
    `https://api.sleeper.app/v1/league/${leagueId}/traded_picks`
  ).then((res) => res.json());
}

module.exports = {
  getLeagueId,
  getLeagueInfo,
  getLeagueRosters,
  getLeagueUsers,
  getLeagueMatchups,
  getLeaguePlayoffBracket,
  getLeagueTransations,
  getLeagueTradedPicks,
};
