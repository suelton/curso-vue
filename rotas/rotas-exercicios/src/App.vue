<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
		<router-view name="menu" />
		<transition mode="out-in"
			enter-active-class="animated rubberBand"
			leave-active-class="animated rollOut">
			<router-view />
		</transition>

		<router-view name="menuInferior" />

	</div>
</template>

<script>

export default {
	
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
