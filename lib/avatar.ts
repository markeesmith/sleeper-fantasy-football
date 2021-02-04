import fetch from 'node-fetch';

class Avatar {
  private avatarId: string;

  constructor(id: string) {
    this.avatarId = id;
  }

  async getFullAvatar(): Promise<string> {
    return fetch(
      `https://sleepercdn.com/avatars/${this.avatarId}`
    ).then((res) => res.text());
  }

  async getThumbnailAvatar(): Promise<string> {
    return fetch(
      `https://sleepercdn.com/avatars/thumbs/${this.avatarId}`
    ).then((res) => res.text());
  }
}

export { Avatar };
