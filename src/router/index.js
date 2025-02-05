import { createWebHistory, createRouter } from 'vue-router'


const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
    },
    {
        path: '/team',
        name: 'team',
        component: () => import(/* webpackChunkName: "team" */ '../views/TeamView.vue')
    },
    {
        path: '/timeline',
        name: 'timeline',
        component: () => import(/* webpackChunkName: "timeline" */ '../views/TimelineView.vue')
    },
    {
        path: '/resources',
        name: 'resources',
        component: () => import(/* webpackChunkName: "resources" */ '../views/ResourcesView.vue')
    },
    {
        path: '/gallery',
        name: 'gallery',
        component: () => import(/* webpackChunkName: "gallery" */ '../views/GalleryView.vue')
    },
    {
        path: '/videos',
        name: 'videos',
        component: () => import(/* webpackChunkName: "videos" */ '../views/VideoView.vue')
    },
    { // Catch-all 404 route, should be the last one
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue')
    }
]

function getBasePath() {
    const pathMatch = window.location.pathname.match(/^(\/ece-sr-design\/AY\d{2}\/RamBOTs\/)/);
    return pathMatch ? pathMatch[1] : '/'; // Fallback to root if not matched
}

export default createRouter({
    history: createWebHistory(getBasePath()),
    routes,
})
