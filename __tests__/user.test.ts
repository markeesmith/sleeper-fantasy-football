import { User } from '../lib/user';

test('Fetches user info from username', async () => {
  const user = new User('DaddyKee');
  const userInfo = await user.getUserInfo();
  expect(userInfo.user_id).toBe('325092146891735040');
});

test('Fetches user info from userId', async () => {
  const user = new User('325092146891735040');
  const userInfo = await user.getUserInfo();
  expect(userInfo.username.toUpperCase()).toBe('DADDYKEE');
});

const user = new User('325092146891735040');

test('Fetches all of users drafts for specified year', async () => {
  const userInfo = await user.getUserDrafts(2020);
  expect(userInfo[0].season).toBe('2020');
  expect(userInfo.length).toBeGreaterThanOrEqual(1);
});
