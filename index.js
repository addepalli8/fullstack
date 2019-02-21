const bodyParser = require('body-parser')
const express = require('express');
const mongoose=require('mongoose');
const cookiesession=require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/user');
require('./models/survey');
require('./services/passport');


mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
const app = express();
app.use(bodyParser.json());

app.use(
    cookiesession({
        maxAge:92000000,
        keys:[keys.cookiekey]
    })
);
app.use(passport.initialize());
app.use(passport.session());
require('./routes/authroutes')(app);
require('./routes/surveyroutes')(app);

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
