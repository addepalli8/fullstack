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
require('./routes/authroutes')(app);

if(process.env.NODE_ENV==='production')
{
 app.use(express.static('client/build'))  
 
 const path=require('path');
 app.get('*',(req,res)=>{
     res.sendFile(path.resolve(__dirname,'client','build','index.html'));
 });
 
}

const PORT = process.env.PORT || 2000;
console.log(PORT);
app.listen(PORT);
