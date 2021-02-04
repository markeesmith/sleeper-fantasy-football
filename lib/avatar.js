const fetch = require('node-fetch');

async function getFullAvatar(avatarId) {
  return fetch(`https://sleepercdn.com/avatars/${avatarId}`).then((res) =>
    res.text()
  );
}

async function getThumbnailAvatar(avatarId) {
  return fetch(
    `https://sleepercdn.com/avatars/thumbs/${avatarId}`
  ).then((res) => res.text());
}

module.exports = {
  getFullAvatar,
  getThumbnailAvatar,
};
