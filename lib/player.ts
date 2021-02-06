import fetch from 'node-fetch';
import fs from 'fs';
import { PlayersTrending, PlayerTrendingTypes } from '../types/PlayerTypes';

async function downloadPlayerList(): Promise<void> {
  const list = await fetch(`https://api.sleeper.app/v1/players/nfl`);
  const filestream = fs.createWriteStream('./playerList.json');
  await new Promise((resolve, reject) => {
    list.body.pipe(filestream);
    list.body.on('error', reject);
    filestream.on('finish', resolve);
  });
}

async function getTrendingPlayers(
  type: PlayerTrendingTypes,
  hoursBack: number,
  listLength: number
): Promise<Array<PlayersTrending>> {
  return fetch(
    `https://api.sleeper.app/v1/players/nfl/trending/${type}?lookback_hours=${hoursBack}&limit=${listLength}`
  ).then((res) => res.json());
}

export { downloadPlayerList, getTrendingPlayers };
