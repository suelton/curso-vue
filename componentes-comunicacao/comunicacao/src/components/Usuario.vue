<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>Nome é <strong>{{ nome }}</strong></p>
        <p>Idade: <strong>{{ idade }}</strong></p>

        <button @click="alterarNome">Alterar Nome</button>
        <hr>
        <div class="componentes">
            <app-usuario-info :nome="nome" :idade="idade" @nomeMudou="nome = $event.nome"
                :reiniciarFn="reinicializarNome" />
            <app-usuario-editar :idade="idade" />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data() {
        return {
            nome: 'Pedro Silva',
            idade: 21
        }
    },
    methods: {
        alterarNome() {
            this.nome = 'Ana'
        },
        reinicializarNome() {
            this.nome = 'Pedro Silva'
            this.idade = 21
        },
    }
}
</script>

<style scoped>
.container {
    background-color: #27363b;
    color: #fff;
    padding: 10px;
}

.container hr {
    margin: 20px 10px;
}

.componentes {
    display: flex;
}

.componentes>* {
    margin: 10px;
}
</style>
