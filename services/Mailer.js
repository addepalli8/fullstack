const keys = require('../config/keys');
const sendgrid = require('sendgrid');
const helper = sendgrid.mail;

class Mailer extends helper.Mail {
	constructor({ subject, recipients }, content) {
        super();
        this.sgapi=sendgrid(keys.sendgridkey);
		this.from_email = new helper.Email('no-reply@email.com');
		this.subject = subject;
		this.body = new helper.Content('text/html', content);
		this.recipients = this.formatAddresses(recipients);

		this.addContent(this.body);
        this.addClickTracking();
        this.addrecipients();
	}
	formatAddresses(recipients) {
		return recipients.map(({ email }) => {
			return new helper.Email(email);
		});
	}
	addClickTracking() {
		const trackingsettings = new helper.TrackingSettings();
		const clicktracking = new helper.ClickTracking(true, true);
		trackingsettings.setClickTracking(clicktracking);
		this.addTrackingSettings(trackingsettings);
    }
    addrecipients(){
        const personalize=new helper.Personalization()
        this.recipients.forEach(recipients=>{
            personalize.addTo(recipients);
        });
        this.addPersonalization(personalize);
    }
   async send()
    {
        const request=this.sgapi.emptyRequest({
            method:'POST',
            path:'/v3/mail/send',
            body:this.toJSON()
        });
       const response=await this.sgapi.API(request);
       return response;
    }
}

module.exports = Mailer;
