export default {
    data() {
        return {
            fruta: '',
            frutas: ['banana', 'maçã', 'laranja']
        }
    },
    methods: {
        adicionarFruta() {
            if (this.fruta) {
                this.frutas.push(this.fruta);
                this.fruta = '';
            }
        },

        removerFruta(index) {
            this.frutas.splice(index, 1);
        }
    }
}