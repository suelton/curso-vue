import Vue from 'vue'

export const barramento = new Vue({
    methods: {
        idadeMudou(idade) {
            this.$emit('idadeMudou', idade)
        },
        quandoIdadeMudar(callback) {
            this.$on('idadeMudou', callback)
        }
    }
})