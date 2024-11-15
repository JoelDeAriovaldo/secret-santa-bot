class SecretSantaService {
    constructor() {
        this.assignments = new Map();
    }

    drawNames(participants) {
        const names = [...participants];
        const shuffled = [...names];
        let valid = false;

        while (!valid) {
            // Baralhar a matriz
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }

            // Verificar se ninguém se tirou a si mesmo 
            valid = true;
            for (let i = 0; i < names.length; i++) {
                if (names[i].name === shuffled[i].name) {
                    valid = false;
                    break;
                }
            }
        }

        // Criar atribuições
        for (let i = 0; i < names.length; i++) {
            this.assignments.set(names[i].name, shuffled[i].name);
        }

        return this.assignments;
    }

    getAssignment(name) {
        return this.assignments.get(name);
    }
}

module.exports = new SecretSantaService();