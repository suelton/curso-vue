<template>
	<div id="app">
		<h1>Tarefas</h1>
		<TaskProgress :progress="progress" />
		<NewTask @add-task="addTask" />
		<TaskGrid :tasks="tasks" @taskDeleted="deleteTask" @taskStateChanged="toggleTaskState" />
	</div>
</template>

<script>
import TaskGrid from './components/TaskGrid.vue'
import NewTask from './components/NewTask.vue'
import TaskProgress from './components/TaskProgress.vue'

export default {
	components: {
		TaskGrid,
		NewTask,
		TaskProgress
	},
	data() {
		return {
			// Define your data properties here
			tasks: [
			],
		};
	},
	computed: {
		progress() {
			const total = this.tasks.length;
			const done = this.tasks.filter(task => !task.pending).length;
			return total ? Math.round((done / total) * 100) : 0;
		}
	},
	watch: {
		// Define your watchers here
		tasks: {
			handler() {
				localStorage.setItem('tasks', JSON.stringify(this.tasks));
			},
			deep: true
		}
	},
	methods: {
		// Define your methods here
		addTask(task) {
			const sameName = t => t.name === task.name
			const reallyNew = this.tasks.filter(sameName).length === 0
			if (reallyNew) {
				this.tasks.push(task);
			}
		},

		deleteTask(index) {
			this.tasks.splice(index, 1);
		},
		toggleTaskState(index) {
			this.tasks[index].pending = !this.tasks[index].pending;
		},
	},
	created() {
		const storedTasks = localStorage.getItem('tasks');
		const array = JSON.parse(storedTasks);
		if (Array.isArray(array)) {
			this.tasks = array;
		} else {
			this.tasks = [];
		}
	}
}
</script>

<style>
body {
	font-family: 'Lato', sans-serif;
	background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
	color: #FFF;
}

#app {
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
}

#app h1 {
	margin-bottom: 5px;
	font-weight: 300;
	font-size: 3rem;
}
</style>
