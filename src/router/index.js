import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
console.log("import.meta.env.BASE_URL",import.meta.env.BASE_URL)
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/about/AboutView.vue'),
        },
        {
            path: '/services',
            name: 'services',
            component: () => import('../views/services/services.vue'),
        },
        {
            path: '/media-inventory',
            name: 'media-inventory',
            component: () => import('../views/media_inventory/MediaInventory.vue'),
        },

        {
            path: '/news-insights',
            name: 'news-insights',
            component: () => import('../views/news_insights/index.vue'),
        },
        {
            path: '/news-insights/:articleId',
            name: 'article-detail',
            component: () => import('../views/news_insights/ArticleDetail.vue'),
            props: true,
            meta: {

            }
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('../views/contact/index.vue'),
        },
    ],
    // 添加 scrollBehavior
    scrollBehavior(to, from, savedPosition) {
        // 如果有保存的滚动位置（例如浏览器后退/前进），恢复到该位置
        if (savedPosition) {
            return savedPosition;
        }
        // 否则，新页面滚动到顶部
        return { top: 0 };
    },
})

export default router
