import { getTrendingPlayers } from '../lib/player';

test('Fetches up trending players', async () => {
  const trendingPlayers = await getTrendingPlayers('add', 24, 24);
  expect(trendingPlayers.length).toBe(24);
});

test('Fetches down trending players', async () => {
  const trendingPlayers = await getTrendingPlayers('drop', 24, 24);
  expect(trendingPlayers.length).toBe(24);
});
