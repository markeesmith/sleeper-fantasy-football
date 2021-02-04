const avatar = require('../lib/avatar');

test('Fetches full avatar', async () => {
  const avatarImg = await avatar.getFullAvatar(
    '9af57bf732c655bed5049dc29a117d64'
  );
  expect(avatarImg).toMatch('PNG');
});

test('Fetches thumbnail avatar', async () => {
  const avatarImg = await avatar.getThumbnailAvatar(
    '9af57bf732c655bed5049dc29a117d64'
  );
  expect(avatarImg).toMatch('PNG');
});
