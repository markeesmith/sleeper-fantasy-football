type DraftUserSettings = {
  teams: number;
  slots_wr: number;
  slots_te: number;
  slots_super_flex: number;
  slots_rb: number;
  slots_qb: number;
  slots_flex: number;
  slots_bn: number;
  rounds: number;
  reversal_round: number;
  player_type: number;
  pick_timer: number;
  cpu_autopick: number;
  alpha_sort: number;
};

type DraftUserMetadata = {
  scoring_type: string;
  name: string;
  description: string;
};

type DraftForUser = {
  type: string;
  status: string;
  start_time: number;
  sport: string;
  settings: DraftUserSettings;
  season_type: string;
  season: string;
  metadata: DraftUserMetadata;
  league_id: string;
  last_picked: number;
  last_message_time: number;
  last_message_id: string;
  draft_order: unknown;
  draft_id: string;
  creators: unknown;
  created: number;
};

type DraftLeagueSettings = {
  teams: number;
  slots_wr: number;
  slots_te: number;
  slots_super_flex: number;
  slots_rb: number;
  slots_qb: number;
  slots_flex: number;
  slots_bn: number;
  rounds: number;
  reversal_round: number;
  player_type: number;
  pick_timer: number;
  cpu_autopick: number;
  alpha_sort: number;
};

type DraftLeagueMetadata = {
  scoring_type: string;
  name: string;
  description: string;
};

type DraftOrder = {
  [id: number]: number;
};

type DraftForLeague = {
  type: string;
  status: string;
  start_time: number;
  sport: string;
  settings: DraftLeagueSettings;
  season_type: string;
  season: string;
  metadata: DraftLeagueMetadata;
  league_id: string;
  last_picked: number;
  last_message_time: number;
  last_message_id: string;
  draft_order: DraftOrder;
  draft_id: string;
  creators: Array<string>;
  created: number;
};

type DraftSlotToRoster = {
  [slot: number]: number;
};

type DraftSettings = {
  teams: number;
  slots_wr: number;
  slots_te: number;
  slots_super_flex: number;
  slots_rb: number;
  slots_qb: number;
  slots_flex: number;
  slots_bn: number;
  rounds: number;
  reversal_round: number;
  player_type: number;
  pick_timer: number;
  cpu_autopick: number;
  alpha_sort: number;
};

type DraftMetadata = {
  scoring_type: string;
  name: string;
  description: string;
};

type DraftDetail = {
  type: string;
  status: string;
  start_time: number;
  sport: string;
  slot_to_roster_id: DraftSlotToRoster;
  settings: DraftSettings;
  season_type: string;
  season: string;
  metadata: DraftMetadata;
  league_id: string;
  last_picked: number;
  last_message_time: number;
  last_message_id: string;
  draft_order: DraftOrder;
  draft_id: string;
  creators: Array<string>;
  created: number;
};

type DraftPickMetadata = {
  years_exp: string;
  team: string;
  status: string;
  sport: string;
  position: string;
  player_id: string;
  number: string;
  news_updated: string;
  last_name: string;
  injury_status: string;
  first_name: string;
};

type DraftPickDetail = {
  round: number;
  roster_id: number;
  player_id: string;
  picked_by: string;
  pick_no: number;
  metadata: DraftPickMetadata;
  is_keeper: unknown;
  draft_slot: number;
  draft_id: string;
};

type DraftTradedPicks = {
  season: string;
  round: number;
  roster_id: number;
  previous_owner_id: number;
  owner_id: number;
  draft_id: number;
};

export {
  DraftForUser,
  DraftForLeague,
  DraftDetail,
  DraftPickDetail,
  DraftTradedPicks,
};
