const passport = require('passport');
const googlestrat = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const user = mongoose.model('users');

passport.serializeUser((user,done)=>{
done(null,user.id)
});
passport.deserializeUser((id,done)=>{
	user.findById(id).then(user=>{
		done(null,user);
	});
});
passport.use(
	new googlestrat(
		{
			clientID: keys.googleclientID,
			clientSecret: keys.googlesecret,
			callbackURL: '/auth/google/callback'
		},
		(accesstoken, refreshtoken, profile, done) => {
			user.findOne({ googleId: profile.id }).then((olduser) => {
				if (olduser) {
					done(null, olduser);
				} 
				else 
				{
					new user({ googleId: profile.id }).save().then(
						(user) => {
							done(null, user)
						});
				}
			});
		}
	)
);
