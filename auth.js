const axios = require('axios');

const RAW_URL = 'https://raw.githubusercontent.com/TamaRebirth/BypassBotGuwa/main/tokens.json';

async function isTokenValid(token) {
  try {
    const res = await axios.get(RAW_URL); // ✅ tanpa header Authorization
    const list = res.data.tokens || [];
    return list.includes(token);
  } catch (err) {
    console.error('[AUTHEN] Error validasi:', err.message);
    return false;
  }
}

module.exports = { isTokenValid };
