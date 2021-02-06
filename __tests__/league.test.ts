import { League } from '../lib/league';
import config from '../sleeper.config.json';

const league = new League(config.leagueId);

test('Reads leagueId from config file', () => {
  expect(league.getLeagueId()).toBe('649984475912036352');
});

test('Fetches league information', async () => {
  const leag = await league.getLeagueInfo();
  expect(leag.league_id).toBe(league.getLeagueId());
});

test('Fetches league rosters', async () => {
  const rosters = await league.getLeagueRosters();
  for (const roster in rosters) {
    expect(rosters[roster].league_id).toBe(league.getLeagueId());
  }
});

test('Fetches league users', async () => {
  const users = await league.getLeagueUsers();
  for (const user in users) {
    expect(users[user].league_id).toBe(league.getLeagueId());
  }
});

test('Fetches league matchups', async () => {
  const matchups = await league.getLeagueMatchups(1);
  expect(typeof matchups).toBe('object');
});

test('Fetches playoff mathcups', async () => {
  const matchups = await league.getLeaguePlayoffBracket();
  expect(typeof matchups).toBe('object');
});

test('Fetches league transaction', async () => {
  const transactions = await league.getLeagueTransations(1);
  expect(typeof transactions).toBe('object');
});

test('Fetches traded picks', async () => {
  const picks = await league.getLeagueTradedPicks();
  expect(typeof picks).toBe('object');
});

test('Fetches all drafts for league', async () => {
  const drafts = await league.getLeagueDrafts();
  expect(drafts.length).toBeGreaterThanOrEqual(1);
});
