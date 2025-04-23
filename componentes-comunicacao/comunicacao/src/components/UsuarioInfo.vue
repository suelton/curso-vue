<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ inverterNome() }}</strong></p>
        <p>Idade do Usuário: <strong>{{ idade }}</strong></p>
        <button @click="reinicializarNome">Reinicializar Nome</button>
        <button @click="reiniciarFn">Reiniciar Nome (Callback)</button>
    </div>
</template>

<script>
import { barramento } from '@/barramento'
export default {
    props: {
        nome: {
            type: String,
            required: true
        },
        idade: {
            type: Number,
            required: true
        },
        reiniciarFn: {
            type: Function,
            required: true
        }
    },
    methods: {
        inverterNome() {
            return this.nome.split('').reverse().join('')
        },
        reinicializarNome() {
            this.nome = 'Pedro Silva'
            this.$emit('nomeMudou', this.nome)
        }
    },
    created() {
        barramento.quandoIdadeMudar((novaIdade) => {
            this.idade = novaIdade
        })
    },
}
</script>

<style scoped>
.componente {
    flex: 1;
    background-color: #ec485f;
    color: #fff;
}
</style>
