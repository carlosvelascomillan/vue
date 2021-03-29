<template>
    <div>
        <h1>PAGE 2</h1>
        <button @click="goBack">Volver a Home</button>
    </div>
</template>

<script>

export default {
    name: 'Page2View',
    methods: {
        goBack() {
            this.$router.push('/');
        }
    }
};
</script>
