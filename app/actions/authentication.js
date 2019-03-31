const app = module.exports = require("/home/victor/Documents/forPashuss/app/routes/server.js");
const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());
