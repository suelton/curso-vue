export default {
    computed: {
        usuarioLogado() {
            return 'Maria Silva'
        }
    },

    created() {
        console.log('Mixin de usuário carregado');
    },
}