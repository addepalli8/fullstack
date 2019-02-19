const passport = require('passport');
const googlestrat = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const user = mongoose.model('users');

passport.serializeUser((user, done) => {
	done(null, user.id);
});
passport.deserializeUser((id, done) => {
	user.findById(id).then((user) => {
		done(null, user);
	});
});
passport.use(
	new googlestrat(
		{
			clientID: keys.googleclientID,
			clientSecret: keys.googlesecret,
			callbackURL: '/auth/google/callback',
			proxy: true
		},
		async (accesstoken, refreshtoken, profile, done) => {
			const olduser = await user.findOne({ googleId: profile.id });

			if (olduser) {
				return done(null, olduser);
			} else {
				const user = await new user({ googleId: profile.id }).save();
				done(null, user);
			}
		}
	)
);
