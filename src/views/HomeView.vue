<template>
    <div>
        <h1>HOME VIEW</h1>

        <button @click="goToPage2" >Go to Page 2</button>
        <button @click="goToContact" >Go to Contact</button>
        <button @click="goToAuthor" >Go to Author</button>
        <br />
        <p>---------</p>

        <h3>Kata VII</h3>
        <p>Idioma: {{session.lenguaje}}, Ancho: {{session.ancho}}, Alto: {{session.alto}} </p>
        <p>---------</p>
        <h3>Kata VIII</h3>
        <button @click="goToUsers">Go to Users View</button>
        <p>---------</p>

        <p> GLOBAL COUNTER {{ counter }} </p>
        <button @click="incrementCounter">Incrementar Contador</button>
        <br />
        <UsersList />
    </div>
</template>

<script>
import UsersList from '@/components/UsersList' 
import { mapState} from 'vuex';

export default {
    name: 'HomeView',
    components: {
        UsersList
    },
    methods: {
        goToPage2() {
            this.$router.push("/page2");
        },
        goToContact() {
            this.$router.push("/contact");
        },
        goToAuthor() {
            this.$router.push("/author");
        },
        incrementCounter() {
            // Para Mutaciones
            // this.$store.commit('increment');
            // Para Acciones
            this.$store.dispatch('incrementAsync');
        },
        goToUsers() {
            this.$router.push("/users");
        }
    },
    computed: {
        ...mapState({
            counter: 'counter',
            session: 'session'
        })
    },
    mounted() {
        this.session.lenguaje = navigator.language;
        this.session.ancho = window.innerWidth;
        this.session.alto = window.innerHeight;
    }
};
</script>

<style>

</style>
