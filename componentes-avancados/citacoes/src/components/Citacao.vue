<template>
    <div class="citacao">
        <slot name="autor"></slot>
        <slot></slot>
        <slot name="fonte"></slot>
    </div>
</template>

<script>
export default {
    //props: ['texto', 'autor', 'fonte']
    created() {
        console.log('Criando o componente Citacao')
    },
    destroyed() {
        console.log('Destruindo o componente Citacao')
    },
    activated() {
        console.log('Ativando o componente Citacao')
    },
    deactivated() {
        console.log('Desativando o componente Citacao')
    }
}
</script>

<style scoped>
.citacao {
    border: 1px solid #DDD;
    background-color: rgba(0, 0, 0, .1);
    padding: 25px;
    max-width: 450px;
}
</style>
