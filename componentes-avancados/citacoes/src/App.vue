<template>
	<div id="app">
		<span>
			<button @click="componente = 'Sobre'">Sobre</button>
			<button @click="componente = 'Citacoes'">Citações</button>
		</span>
		<keep-alive>
			<component :is="componente" />
		</keep-alive>
	</div>
</template>

<script>
import Citacoes from './components/Citacoes'
import Sobre from './components/Sobre'

export default {
	components: { Citacoes, Sobre },
	data() {
		return {
			componente: 'Sobre',
		}
	}
}
</script>

<style>
#app {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	font-size: 1.6rem;
}

button {
	outline: none;
	padding: 5px 15px 10px;
	margin: 10px 5px;
	border-radius: 3px;
	font-size: 2rem;
	font-weight: 300;
	color: #FFF;
	background-color: rgba(0, 0, 0, .5);
}
</style>