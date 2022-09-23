const express = require('express');
const app = express();
const PORT = 8081;
const authRouter = require('./Routes/authRouter');
const passport = require('passport');
const cors = require('cors');
const session = require('express-session');

app.set('view engine', 'html');
app.use(cors({ credentials: true, origin: "http://localhost:8081"}))
app.use(express.static(__dirname + '../../save-front/build'));
app.get("/", (req, res) => {
  res.sendFile("index.html");
});
app.use(session({ secret:"test",resave:false,saveUninitialized:true}));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

// router
app.use("/signup", authRouter);

app.listen(PORT, () => {
  console.log(`http:localhost:${PORT}`);
})