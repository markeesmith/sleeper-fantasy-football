import { Avatar } from '../lib/avatar';

const avatar = new Avatar('9af57bf732c655bed5049dc29a117d64');

test('Fetches full avatar', async () => {
  const avatarImg = await avatar.getFullAvatar();
  expect(avatarImg).toMatch('PNG');
});

test('Fetches thumbnail avatar', async () => {
  const avatarImg = await avatar.getThumbnailAvatar();
  expect(avatarImg).toMatch('PNG');
});
