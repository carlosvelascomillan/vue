<template>
    <div>
        <label for="nombre">Nombre: </label>
        <input type="text" v-model="nombre" placeholder="Nombre">
        <label for="apellidos">Apellidos:</label>
        <input type="text" v-model="apellidos" placeholder="Apellidos">
        <button @click="deleteUser" class="redButton">X</button>
    </div>
</template>

<script>

export default {
    name: 'UserItem',
    props: {
        id: Number
    },
    data() {
        return {
            nombre: '',
            apellidos: ''
        }
    },
    methods: {
        deleteUser() {
            this.$emit('deleteUser', this.id);
        }
    }
}
</script>

<style>
.redButton {
    background: red;
}
</style>
