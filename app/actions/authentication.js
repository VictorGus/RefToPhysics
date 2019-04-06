const app = module.exports = require("../routes/server.js");
const passport = module.exports = require('passport');
var AuthLocalStrategy = require('passport-local').Strategy;
app.use(passport.initialize());
app.use(passport.session());

passport.use('local', new AuthLocalStrategy(
    function (username, password, done) {
        
        if (username == "admin" && password == "admin") {
            return done(null, {
                username: "admin",
            });
        }
        
        return done(null, false, { 
            message: 'Неверный логин или пароль'
        });
    }
));

passport.serializeUser(function (user, done) {
    done(null, JSON.stringify(user));
});

passport.deserializeUser(function (data, done) {
    try {
        done(null, JSON.parse(data));
    } catch (e) {
        done(err);
    }
});

