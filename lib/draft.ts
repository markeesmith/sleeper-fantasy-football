import fetch from 'node-fetch';
import {
  DraftDetail,
  DraftPickDetail,
  DraftTradedPicks,
} from '../types/DraftTypes';

class Draft {
  private draftId: string;

  constructor(id: string) {
    this.draftId = id;
  }

  async getDraft(): Promise<DraftDetail> {
    return fetch(
      `https://api.sleeper.app/v1/draft/${this.draftId}`
    ).then((res) => res.json());
  }

  async getDraftPickDetail(): Promise<Array<DraftPickDetail>> {
    return fetch(
      `https://api.sleeper.app/v1/draft/${this.draftId}/picks`
    ).then((res) => res.json());
  }

  async getDraftTradedPicks(): Promise<Array<DraftTradedPicks>> {
    return fetch(
      `https://api.sleeper.app/v1/draft/${this.draftId}/traded_picks`
    ).then((res) => res.json());
  }
}

export { Draft };
