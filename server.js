const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Hey this an test endpoint"));

const PORT = 8080;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
