<template>
    <div class="task-progress">
        <span class="progress-value"> {{ progress }}%</span>
        <div class="progress-bar" :class="progressClass" :style="{ width: progress + '%' }"></div>
    </div>
</template>

<script>
export default {

    props: {
        progress: {
            type: Number,
            default: 0,
            required: true
        }
    },
    computed: {
        progressClass() {
            return this.progress < 50 ? 'low-progress' : 'high-progress';
        }
    },
    methods: {
        resetProgress() {
            this.$emit('update:progress', 0);
        }
    }
}
</script>

<style>
.task-progress {
    position: relative;
    width: 80%;
    border: 1px solid #FFF;
    border-radius: 8px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* Added alignment for items */
    height: 20px;
    /* Added height for the progress bar */
}

.progress-bar {
    position: absolute;
    border-radius: 8px;
    height: 100%;
    background-color: #4CAF50;
    align-self: flex-start;
}

.progress-value {
    z-index: 1;
    /* Added margin for spacing */
}
</style>