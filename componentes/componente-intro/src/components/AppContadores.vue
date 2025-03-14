<template>
    <div class="contadores">
        <h1>Contadores</h1>
        <app-contador v-for="c in 5" :key="c" />
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
div {
    border: 1px solid red;
}
</style>