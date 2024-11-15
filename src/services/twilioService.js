const twilio = require('twilio');
const config = require('../config/config');

class TwilioService {
    constructor() {
        this.client = twilio(config.twilio.accountSid, config.twilio.authToken);
    }

    async sendMessage(to, message) {
        try {
            await this.client.messages.create({
                from: `whatsapp:${config.twilio.phoneNumber}`,
                to: `whatsapp:${to}`,
                body: message
            });
            console.log(`Mensagem enviada para ${to}`);
        } catch (error) {
            console.error(` Erro ao enviar mensagem para ${to}:`, error);
            throw error;
        }
    }
}

module.exports = new TwilioService();