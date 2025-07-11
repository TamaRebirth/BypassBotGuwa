const axios = require('axios');

const RAW_URL = 'https://raw.githubusercontent.com/TamaRebirth/BypassBotGuwa/main/tokens.json';
const GITHUB_TOKEN = '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'; // ganti dengan token GitHub kamu jika repo private

async function isTokenValid(token) {
  try {
    const res = await axios.get(RAW_URL, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        'User-Agent': 'TamaBot'
      }
    });

    const list = res.data.tokens || [];
    return list.includes(token);
  } catch (err) {
    console.error('[AUTHEN] Error validasi:', err.message);
    return false;
  }
}

module.exports = { isTokenValid };
