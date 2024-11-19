new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Alerta exibido!')
        },
        armazenaValor(event) {
            this.valor = event.target.value
        },
        armazenaValor2(event) {
            this.valor = event.target.value
        }
    }
})