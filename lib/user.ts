import fetch from 'node-fetch';
import { UserInfo } from '../types/UserTypes';
import { DraftForUser } from '../types/DraftTypes';

class User {
  private userId: string;

  constructor(id: string) {
    this.userId = id;
  }

  async getUserInfo(): Promise<UserInfo> {
    return fetch(`https://api.sleeper.app/v1/user/${this.userId}`).then((res) =>
      res.json()
    );
  }

  async getUserDrafts(year: number): Promise<Array<DraftForUser>> {
    return fetch(
      `https://api.sleeper.app/v1/user/${this.userId}/drafts/nfl/${year}`
    ).then((res) => res.json());
  }
}

export { User };
