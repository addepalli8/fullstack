const mongoose = require('mongoose');
const requirelogin = require('../middleware/requirelogin');
const Survey = mongoose.model('surveys');
const Mailer=require('../services/Mailer')
const surveytemplate=require('../services/email-template/surveytemplate')

module.exports = (app) => {
	app.post('/api/survey', requirelogin, (req, res) => {
		const { title, subject, body, recipients } = req.body;

		const survey = new Survey({
			title,
			subject,
			body,
            recipients: recipients.split(',').map((email) => ({email:email.trim()})),
            _user:req.user.id,
            datesent:Date.now()
        });
        const mailer=new Mailer(survey,surveytemplate(survey));
        mailer.send();
	});
};


// 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
