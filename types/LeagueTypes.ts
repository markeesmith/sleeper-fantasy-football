type LeagueSettings = {
  max_keepers: number;
  draft_rounds: number;
  trade_review_days: number;
  reserve_allow_dnr: number;
  capacity_override: number;
  pick_trading: number;
  taxi_years: number;
  taxi_allow_vets: number;
  last_report: number;
  disable_adds: number;
  waiver_type: number;
  bench_lock: number;
  reserve_allow_sus: number;
  type: number;
  reserve_allow_cov: number;
  waiver_clear_days: number;
  daily_waivers_last_ran: number;
  waiver_day_of_week: number;
  start_week: number;
  playoff_teams: number;
  num_teams: number;
  reserve_slots: number;
  playoff_round_type: number;
  daily_waivers_hour: number;
  waiver_budget: number;
  reserve_allow_out: number;
  offseason_adds: number;
  playoff_seed_type: number;
  daily_waivers: number;
  playoff_week_start: number;
  daily_waivers_days: number;
  league_average_match: number;
  leg: number;
  trade_deadline: number;
  reserve_allow_doubtful: number;
  taxi_deadline: number;
  reserve_allow_na: number;
  taxi_slots: number;
  playoff_type: number;
};

type ScoreSettings = {
  pass_2pt: number;
  pass_int: number;
  fgmiss: number;
  rec_yd: number;
  xpmiss: number;
  def_pr_td: number;
  fgm_30_39: number;
  blk_kick: number;
  pts_allow_7_13: number;
  ff: number;
  fgm_20_29: number;
  fgm_40_49: number;
  pts_allow_1_6: number;
  st_fum_rec: number;
  def_st_ff: number;
  st_ff: number;
  pts_allow_28_34: number;
  fgm_50p: number;
  fum_rec: number;
  def_td: number;
  fgm_0_19: number;
  int: number;
  pts_allow_0: number;
  pts_allow_21_27: number;
  rec_2pt: number;
  rec: number;
  xpm: number;
  st_td: number;
  def_st_fum_rec: number;
  def_st_td: number;
  sack: number;
  fum_rec_td: number;
  rush_2pt: number;
  rec_td: number;
  pts_allow_35p: number;
  pts_allow_14_20: number;
  rush_yd: number;
  pass_yd: number;
  pass_td: number;
  rush_td: number;
  def_kr_td: number;
  fum_lost: number;
  fum: number;
  safe: number;
};

type LeagueInfo = {
  total_rosters: number;
  status: string;
  sport: string;
  shard: number;
  settings: LeagueSettings;
  season_type: string;
  season: string;
  score_settings: ScoreSettings;
  roster_positions: Array<string>;
  previous_league_id: string;
  name: string;
  metadata: unknown;
  loser_bracket_id: unknown;
  league_id: string;
  last_read_id: unknown;
  last_pinned_message_id: unknown;
  last_message_time: number;
  last_message_text_map: unknown;
  last_message_text: string;
  last_message_id: string;
  last_message_attachment: unknown;
  last_author_is_bot: boolean;
  last_author_id: string;
  last_author_display_name: string;
  last_author_avatar: string;
  group_id: unknown;
  draft_id: string;
  company_id: unknown;
  bracket_id: unknown;
  avatar: unknown;
};

type RosterSettings = {
  wins: number;
  waiver_position: number;
  waiver_budget_used: number;
  total_moves: number;
  ties: number;
  losses: number;
  fpts: number;
};

type RosterMetadata = {
  record: string;
  [nickname: string]: string;
};

type LeagueRosters = {
  taxi: unknown;
  starters: Array<string>;
  settings: RosterSettings;
  roster_id: number;
  reserve: Array<string>;
  players: Array<string>;
  player_map: unknown;
  owner_id: string;
  metadata: RosterMetadata;
  league_id: string;
  co_owners: unknown;
};

type LeagueUserMetadata = {
  mention_pn: string;
  mascot_message_emotion_leg_1: string;
  mascot_item_type_id_leg_9: string;
  mascot_item_type_id_leg_8: string;
  mascot_item_type_id_leg_7: string;
  mascot_item_type_id_leg_6: string;
  mascot_item_type_id_leg_5: string;
  mascot_item_type_id_leg_4: string;
  mascot_item_type_id_leg_3: string;
  mascot_item_type_id_leg_2: string;
  mascot_item_type_id_leg_17: string;
  mascot_item_type_id_leg_16: string;
  mascot_item_type_id_leg_15: string;
  mascot_item_type_id_leg_14: string;
  mascot_item_type_id_leg_13: string;
  mascot_item_type_id_leg_12: string;
  mascot_item_type_id_leg_11: string;
  mascot_item_type_id_leg_10: string;
  mascot_item_type_id_leg_1: string;
  allow_pn: string;
};

type LeagueUsers = {
  user_id: string;
  settings: unknown;
  metadata: LeagueUserMetadata;
  league_id: string;
  is_owner: boolean;
  is_bot: unknown;
  display_name: string;
  avatar: string;
};

type LeagueMatchups = {
  starters_points: Array<number>;
  starters: Array<string>;
  roster_id: number;
  points: number;
  players: Array<string>;
  matchup_id: number;
  custom_points: unknown;
};

type LeagueWinnersBracket = {
  w: unknown;
  t2: number;
  t1: number;
  r: number;
  m: number;
  l: number;
};

type TransactionSettings = {
  waiver_bid: number;
  seq: number;
};

type TransactionMetadata = {
  notes: string;
};

type TransactionDrops = {
  [id: number]: number;
};

type TransactionAdds = {
  [id: number]: number;
};

type TransactionDraftPicks = {
  season: string;
  round: number;
  roster_id: number;
  previous_owner_id: number;
  owner_id: number;
  league_id: unknown;
};

type LeagueTransactions = {
  waiver_budget: Array<number>;
  type: string;
  transaction_id: string;
  status_updated: number;
  status: string;
  settings: TransactionSettings;
  roster_ids: Array<number>;
  metadata: TransactionMetadata;
  leg: number;
  drops: TransactionDrops;
  draft_picks: Array<TransactionDraftPicks>;
  creator: string;
  created: number;
  consenter_ids: Array<number>;
  adds: TransactionAdds;
};

type LeagueTradedPicks = {
  season: string;
  round: number;
  roster_id: number;
  previous_owner_id: number;
  owner_id: number;
};

export {
  LeagueInfo,
  LeagueRosters,
  LeagueUsers,
  LeagueMatchups,
  LeagueWinnersBracket,
  LeagueTransactions,
  LeagueTradedPicks,
};
