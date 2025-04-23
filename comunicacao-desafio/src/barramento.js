import vue from 'vue'

export const barramento = new vue({
    methods: {
        setUsuarioSelecionado(usuario) {
            this.$emit('usuarioSelecionado', usuario)
        },
        quandoUsuarioSelecionado(callback) {
            this.$on('usuarioSelecionado', callback)
        }
    }
})