new Vue({
    el: '#desafio',
    data: {
        nome: 'Suelton',
        idade: 42,
        imagemAleatoria: 'https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
    },
    methods: {
        idadeMulti3() {
            return this.idade * 3;
        },
        numZeroOuUm() {
            return Math.random();
        }
    }
});