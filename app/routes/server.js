const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
const app = module.exports = express(); 
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieSession({name:'session', keys:'key'}));
app.listen(3000, "127.0.0.1", (err, res) => {
    if(err){
        return  console.log('Error has occured', err);
    }
    console.log('Server is running on 3000');
} );

app.use(express.static('public'));

