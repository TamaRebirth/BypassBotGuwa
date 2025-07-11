const axios = require('axios');

const RAW_URL = 'https://raw.githubusercontent.com/TamaRebirth/BypassBotGuwa/main/tokens.json'; // ganti jika path berubah
const GITHUB_TOKEN = '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'; // ganti dengan GitHub token kamu (wajib kalau repo private)

async function isTokenValid(token) {
  try {
    const res = await axios.get(RAW_URL, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        'User-Agent': 'TamaBotValidator'
      }
    });

    const list = res.data.tokens || [];
    return list.includes(token);
  } catch (err) {
    console.error('[AUTHEN] Gagal membaca tokens.json dari GitHub:', err.message);
    return false;
  }
}

// ⛔ PENTING! Ekspor fungsi agar bisa dibaca di index.js lewat eval
exports.isTokenValid = isTokenValid;
