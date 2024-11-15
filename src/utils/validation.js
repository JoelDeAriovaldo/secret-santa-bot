const validateParticipant = (participant) => {
    if (!participant.name || !participant.phone) {
        throw new Error('O participante deve ter nome e número de telefone');
    }

    //  Validação básica do número de telefone
    const phoneRegex = /^\+258[8-9]\d{7}$/;
    if (!phoneRegex.test(participant.phone)) {
        throw new Error('Formato de número de telefone inválido');
    }

    return true;
};

module.exports = {
    validateParticipant
};