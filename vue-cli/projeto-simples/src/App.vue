<template>
  <div id="app">
    {{ titulo}}
  </div>
</template>

<script>

export default {
  name: 'App',
  data: function() {
    return {
      titulo: 'Teste Data Usando Vue JS !!!'
    }
  }  
}
</script>

<style>
#app {
  background-color: chocolate;
  color: #fff;
}
</style>