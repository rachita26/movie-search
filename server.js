const express = require("express");

const app = express();

app.use(express.static("./dist/movie-search"));

app.get("/*", (req, res) =>
  res.sendFile("index.html", { root: "dist/movie-search/" })
);

app.listen(process.env.PORT || 8080);
