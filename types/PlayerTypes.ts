type PlayerMetadata = {
  hashtag: string;
  depth_chart_position: number;
  status: string;
  sport: string;
  fantasy_positions: Array<string>;
  number: number;
  search_last_name: string;
  injury_start_date: unknown;
  weight: string;
  position: string;
  practice_participation: unknown;
  sportradar_id: string;
  team: string;
  last_name: string;
  college: string;
  fantasy_data_id: number;
  injury_status: unknown;
  player_id: string;
  height: string;
  search_full_name: string;
  age: number;
  stats_id: string;
  birth_country: string;
  espn_id: string;
  search_rank: number;
  first_name: string;
  depth_chart_order: number;
  years_exp: number;
  rotowire_id: unknown;
  rotoworld_id: number;
  search_first_name: string;
  yahoo_id: unknown;
};

type Players = {
  [id: string]: PlayerMetadata;
};

type PlayerTrendingTypes = 'add' | 'drop';

type PlayersTrending = {
  player_id: string;
  count: number;
};

export { Players, PlayerTrendingTypes, PlayersTrending };
