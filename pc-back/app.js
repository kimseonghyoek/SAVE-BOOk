const conn = require("./DB/mysql");
const express = require('express');
const app = express();
const PORT = 8080;

app.set('view engine', 'html');

app.use(express.static(__dirname + '../../pc-front/pc-react/build'));
console.log(__dirname)

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.listen(PORT, () => {
  console.log(`http:localhost:${PORT}`);
})