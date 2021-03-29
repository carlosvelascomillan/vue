<template>
    <div>
        <h1>CONTACT VIEW</h1>

        <label for="nombre">Nombre:</label>
        <input name="nombre" type="text" placeholder="Nombre" v-model="nombre">
        <br />
        <label for="email">Email:</label>
        <input name="email" type="text" placeholder="Email" v-model="email">
        <br />
        <label for="mensaje">Mensaje:</label>
        <input name="mensaje" type="text" placeholder="Mensaje" v-model="mensaje">

        <br /><br />
        <button @click="goBack">Volver a Home</button>
    </div>
</template>

<script>

export default {
    name: 'ContactView',
    data() {
        return {
            nombre: '',
            email: '',
            mensaje: ''
        }
    },
    methods: {
        goBack() {
            this.$router.push('/');
        }
    }
};
</script>

<style>

</style>
