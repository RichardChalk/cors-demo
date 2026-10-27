const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Tillåt vår webbsida på port 5500 att läsa API-svar.
app.use(cors({ origin: "http://127.0.0.1:5500" }));

// Ett enkelt API med testdata.
app.get("/api/customers", (req, res) => {
  res.json([
    { id: 1, name: "Anna" },
    { id: 2, name: "Erik" },
  ]);
});

app.listen(PORT, () => {
  console.log(`API kör på http://localhost:${PORT}`);
});
