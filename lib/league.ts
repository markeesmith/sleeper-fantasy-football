import fetch from 'node-fetch';
import {
  LeagueInfo,
  LeagueRosters,
  LeagueUsers,
  LeagueMatchups,
  LeagueWinnersBracket,
  LeagueTransactions,
  LeagueTradedPicks,
} from '../types/LeagueTypes';
import { DraftForLeague } from '../types/DraftTypes';

class League {
  private leagueId: string;

  constructor(id: string) {
    this.leagueId = id;
  }

  getLeagueId(): string {
    return this.leagueId;
  }

  async getLeagueInfo(): Promise<LeagueInfo> {
    return fetch(
      `https://api.sleeper.app/v1/league/${this.leagueId}`
    ).then((res) => res.json());
  }

  async getLeagueRosters(): Promise<Array<LeagueRosters>> {
    return fetch(
      `https://api.sleeper.app/v1/league/${this.leagueId}/rosters`
    ).then((res) => res.json());
  }

  async getLeagueUsers(): Promise<Array<LeagueUsers>> {
    return fetch(
      `https://api.sleeper.app/v1/league/${this.leagueId}/users`
    ).then((res) => res.json());
  }

  async getLeagueMatchups(week: number): Promise<Array<LeagueMatchups>> {
    return fetch(
      `https://api.sleeper.app/v1/league/${this.leagueId}/matchups/${week}`
    ).then((res) => res.json());
  }

  async getLeaguePlayoffBracket(): Promise<Array<LeagueWinnersBracket>> {
    return fetch(
      `https://api.sleeper.app/v1/league/${this.leagueId}/winners_bracket`
    ).then((res) => res.json());
  }

  async getLeagueTransations(
    round: number
  ): Promise<Array<LeagueTransactions>> {
    return fetch(
      `https://api.sleeper.app/v1/league/${this.leagueId}/transactions/${round}`
    ).then((res) => res.json());
  }

  async getLeagueTradedPicks(): Promise<Array<LeagueTradedPicks>> {
    return fetch(
      `https://api.sleeper.app/v1/league/${this.leagueId}/traded_picks`
    ).then((res) => res.json());
  }

  async getLeagueDrafts(): Promise<Array<DraftForLeague>> {
    return fetch(
      `https://api.sleeper.app/v1/league/${this.leagueId}/drafts`
    ).then((res) => res.json());
  }
}

export { League };
