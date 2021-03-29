<template>
    <div>
        <h1>AUTHOR VIEW</h1>
        <p>Ola ke ase</p>
        <button @click="goBack">Volver a Home</button>
    </div>
</template>

<script>

export default {
    name: 'AuthorView',
    methods: {
        goBack() {
            this.$router.push('/');
        }
    }
};
</script>

<style>

</style>
