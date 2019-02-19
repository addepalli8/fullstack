const express = require('express');
const mongoose=require('mongoose');
const cookiesession=require('cookie-session');
const keys = require('./config/keys');
const passport = require('passport');
require('./models/user');
require('./services/passport')

const app = express();
app.use(passport.initialize());
app.use(passport.session());
const authroutes = require('./routes/authroutes');


mongoose.connect(keys.mongoURI);
app.use(
    cookiesession({
        maxAge:2592000000,
        keys:[keys.cookiekey]
    })
);


const PORT = process.env.PORT || 2000;

authroutes(app);

console.log(PORT);
app.listen(PORT);
