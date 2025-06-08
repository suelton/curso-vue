export default {
    computed: {
        // Exercício 3
        espacosPorVirgula() {
            return this.frase.replace(/ /g, ',');
        },
        tamanhoDasPalavras() {
            return this.frase.split(' ').map(word => `${word} (${word.length})`).join(' ');
        }
    },
    filters: {
        // Exercício 1
        espacosPorVirgula(value) {
            return value.replace(/ /g, ',');
        },
        // Exercício 2
        tamanhoDasPalavras(value) {
            return value.split(' ').map(word => `${word} (${word.length})`).join(' ');
        }
    },

}