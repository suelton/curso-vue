<template>
    <div class="task-grid">
        <template v-if="tasks.length">
            <Task v-for="(task, index) in tasks" :key="task.name" :task="task"
                @taskDeleted="$emit('taskDeleted', index)" @taskStateChanged="$emit('taskStateChanged', index)" />

        </template>
        <p v-else class="no-task">Sua vida está em dia !</p>
    </div>
</template>

<script>
import Task from './Task.vue'

export default {
    props: {
        tasks: {
            type: Array,
            required: true
        }
    },
    components: {
        Task
    },
    data() {
        return {
            // Define your data properties here
        };
    },
    methods: {
        // Define your methods here
    },
    computed: {
        // Define your computed properties here
    }
}
</script>

<style>
.task-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.task-grid .task {
    margin: 10px;
    transition: all 0.3s ease;
}

.task-grid .task:hover {
    transform: scale(1.05);
}

.no-task {
    font-size: 2rem;
    font-weight: 300;
    color: #FFF;
}
</style>