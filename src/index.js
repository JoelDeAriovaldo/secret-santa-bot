const twilioService = require('./services/twilioService');
const secretSantaService = require('./services/secretSantaService');
const { validateParticipant } = require('./utils/validation');
const participants = require('./data/participants');

async function runSecretSanta() {
    try {
        // Validar todos os participantes
        participants.forEach(validateParticipant);

        // Draw names
        const assignments = secretSantaService.drawNames(participants);

        // Enviar mensagens a cada participante
        for (const participant of participants) {
            const assignedPerson = secretSantaService.getAssignment(participant.name);
            const message = `🎅 Ho Ho Ho! Bem-vindo ao Amigo Oculto! 🎄\n\nCaro(a) ${participant.name},\nVocê é o Amigo Secreto de: ${assignedPerson}\n\nLembre-se de manter isso em segredo! 🤫`;

            await twilioService.sendMessage(participant.phone, message);
        }

        console.log('Amigo oculto foi concluída com êxito!');
    } catch (error) {
        console.error('Erro na execução', error);
    }
}

// Run the Secret Santa draw
runSecretSanta();