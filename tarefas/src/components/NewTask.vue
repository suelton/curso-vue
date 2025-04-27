<template>
    <div class="new-task">
        <input type="text" v-model="taskName" @keydown.enter="addTask" placeholder="Digite o nome da tarefa"
            class="form-element" />
        <button @click="addTask" class="form-element">+</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            taskName: ''
        };
    },
    methods: {
        addTask() {
            if (this.taskName.trim()) {
                this.$emit('add-task', { name: this.taskName, pending: true });
                this.taskName = '';
            } else {
                alert('Por favor, digite o nome da tarefa.');
            }
        }
    }
}
</script>

<style>
.new-task {
    margin: 35px;
}

.form-element {
    outline: none;
    font-size: 2rem;
    border: 1px solid #FFF;
    padding: 5px 10px 8px;
    color: #FFF;
    /* Added padding for better spacing */
}

input.form-element {
    width: 500px;
    background: #FFF2;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}

button.form-element {
    background: #2196F3;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    border-left: none;
}
</style>