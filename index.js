const express = require('express');
require('./models/user');
require('./services/passport')
const mongoose=require('mongoose');
const cookiesession=require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');



mongoose.connect(keys.mongoURI);
const app = express();

app.use(
    cookiesession({
        maxAge:92000000,
        keys:[keys.cookiekey]
    })
);
app.use(passport.initialize());
app.use(passport.session());
const authroutes = require('./routes/authroutes');


const PORT = process.env.PORT || 2000;

authroutes(app);

console.log(PORT);
app.listen(PORT);
