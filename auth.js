const axios = require('axios');

const RAW_URL = 'https://raw.githubusercontent.com/TamaRebirth/BypassBotGuwa/main/tokens.json';
const GITHUB_TOKEN = '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'; // bisa kamu hardcode atau hapus kalau file public

exports.isTokenValid = async function(token) {
  try {
    const res = await axios.get(RAW_URL, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        'User-Agent': 'Validator'
      }
    });

    const content = res.data.tokens || [];
    return content.includes(token);
  } catch (err) {
    console.error('[AUTHEN] Error saat validasi:', err.message);
    return false;
  }
};
