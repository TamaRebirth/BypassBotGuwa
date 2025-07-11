(async () => {
  const axios = require('axios');

  const RAW_URL = 'https://raw.githubusercontent.com/TamaRebirth/BypassBotGuwa/main/tokens.json';
  const GITHUB_TOKEN = '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'; // ganti token kamu

  async function isTokenValid(token) {
    try {
      const res = await axios.get(RAW_URL, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          'User-Agent': 'Validator'
        }
      });

      const list = res.data.tokens || [];
      return list.includes(token);
    } catch (err) {
      console.error('[AUTHEN] Error saat validasi:', err.message);
      return false;
    }
  }

  // WAJIB: Set fungsi ke global "exports"
  exports.isTokenValid = isTokenValid;
})();
