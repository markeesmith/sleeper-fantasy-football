import fetch from 'node-fetch';
import { UserInfo } from '../types/UserTypes';

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
}

export { User };
