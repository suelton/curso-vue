<template>
    <div>
        <ul>
            <li v-for="(fruta, index) in frutas" :key="index">
                {{ fruta }}
                <button @click="removerFruta(index)">Remover</button>
            </li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="adicionarFruta" placeholder="Digite o nome da fruta">
        <button @click="adicionarFruta">Adicionar Fruta</button>
    </div>
</template>

<script>
import frutasMixin from './frutasMixin.js'
import usuarioMixin from './usuarioMixin.js'

export default {
    mixins: [frutasMixin, usuarioMixin],
    created() {
        console.log('Componente Frutas criado');
    }

}
</script>

<style></style>