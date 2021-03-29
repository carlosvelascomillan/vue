<template>
    <div>
        <h1>USER LIST</h1>
        
        <button @click="addUser">Add User</button>
        <UserItem v-for="userId in users" :key="userId" v-bind:id="userId" @deleteUser=deleteUser />    
    </div>
</template>

<script>

import UserItem from './UserItem'

export default {
    name: 'UsersList',
    components: {
        UserItem
    },
    data() {
        return {
            users: [],
            counter: 0
        }
    },
    methods: {
        addUser() {
            this.users.push(this.counter++);
        },
        deleteUser(id) {
            const indexOf = this.users.indexOf(id);
            this.users.splice(indexOf, 1);
        }
    }
}
</script>

<style>

</style>
