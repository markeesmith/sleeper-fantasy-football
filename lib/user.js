const fetch = require('node-fetch');

async function getUserFromUsername(username) {
  return fetch(`https://api.sleeper.app/v1/user/${username}`).then((res) =>
    res.json()
  );
}

async function getUserFromUserId(userId) {
  return fetch(`https://api.sleeper.app/v1/user/${userId}`).then((res) =>
    res.json()
  );
}

module.exports = {
  getUserFromUsername,
  getUserFromUserId,
};
