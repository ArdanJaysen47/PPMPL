const express = require('express'); // Perbaiki tanda petik pada require

const app = express();

app.get('/*', (req, res) => { // Tutup string dan fungsi dengan benar
  res.send("Hello, World!");   // Tutup string dengan benar
});

module.exports = app; // Perbaiki spasi tambahan
