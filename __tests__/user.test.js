const user = require('../lib/user');

test('Fetches user info from username', async () => {
  const userInfo = await user.getUserFromUsername('DaddyKee');
  expect(userInfo.user_id).toBe('325092146891735040');
});

test('Fetches user info from userId', async () => {
  const userInfo = await user.getUserFromUserId('325092146891735040');
  expect(userInfo.username.toUpperCase()).toBe('DaddyKee'.toUpperCase());
});
