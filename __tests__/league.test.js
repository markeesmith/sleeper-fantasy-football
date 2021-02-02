var league = require('../lib/league');

test('Reads leagueId from config file', () => {
  expect(league.getLeagueId()).toBe("649984475912036352")
});