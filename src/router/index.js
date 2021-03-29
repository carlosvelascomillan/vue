import VueRouter from 'vue-router';

import HomeView from '@/views/HomeView';
import Page2View from '@/views/Page2View';
import ContactView from '@/views/ContactView';
import AuthorView from '@/views/AuthorView';
import UsersView from '@/views/UsersView';

const routes = [
    { path: '/', component: HomeView, name: 'home' },
    { path: '/page2', component: Page2View, name: 'page2' },
    { path: '/contact', component: ContactView, name: 'contact'},
    { path: '/author', component: AuthorView, name: 'author'},
    { path: '/users', component: UsersView, name: 'users'}
]

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    console.log('Navegando a: ', to.name + ", path: " + to.path);
    next();
});

export default router;