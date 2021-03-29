<template>
    <div>
        <h1>Users View</h1>
        <table class="center">
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>City</th>
                <th>Company</th>
            </tr>
            <tr v-for="user in users" :key="user.id">
                <td>{{user.name}}</td>
                <td>{{user.username}}</td>
                <td>{{user.email}}</td>
                <td>{{user.address.city}}</td>
                <td>{{user.company.name}}</td>
            </tr>
        </table>
        <br />
        <button @click="goToHome">Volver a Home</button>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
    name: 'UsersView',
    methods: {
        goToHome() {
            this.$router.push("/");
        } 
    },
    computed: {
        /*
        ...mapState({
            users: 'users'
        }),
        */
        ...mapGetters({
            users: 'users'
        })
    },
    mounted() {
        this.$store.dispatch('loadUsers')
    }
};
</script>

<style>
.center {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
}
table, th, td {
    border: 1px solid black;
}
</style>
