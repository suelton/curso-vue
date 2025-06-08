<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p>Usuário Logado: {{ usuarioLogado }}</p>
		<p>CPF: {{ cpf | cpf | inverter }}</p>
		<input type="text" :value="cpf | cpf" placeholder="Digite o CPF">

		<hr>

		<frutas />

		<hr>
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
	</div>
</template>

<script>

import frutasMixin from './frutasMixin.js'
import usuarioMixin from './usuarioMixin.js'
import Frutas from './Frutas.vue'

export default {
	components: {
		Frutas
	},
	mixins: [frutasMixin, usuarioMixin],
	data() {
		return {
			cpf: '66442907368'
		}
	},
	filters: {
		cpf(value) {
			if (!value) return '';
			return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
		}
	},
	created() {
		console.log('Componente App criado');
	},
}

</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}

input {
	font-size: 2rem;
	padding: 10px;
	border-radius: 5px;
	border: 1px solid #ccc;
	margin-top: 20px;
}
</style>
