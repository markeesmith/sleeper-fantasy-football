import { Draft } from '../lib/draft';

const draft = new Draft('515530667727593473');

test('Fetches draft detail', async () => {
  const draftDetail = await draft.getDraft();
  expect(draftDetail.season).toBe('2020');
  expect(draftDetail.status).toBe('complete');
});

test('Fetches draft pick detail', async () => {
  const draftPickDetail = await draft.getDraftPickDetail();
  expect(draftPickDetail.length).toBe(48);
});

test('Fetches traded draft picks', async () => {
  const draftTradedPicks = await draft.getDraftTradedPicks();
  for (const pick in draftTradedPicks) {
    expect(draftTradedPicks[pick].season).toBe('2020');
  }
});
