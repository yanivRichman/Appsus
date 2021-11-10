
import homePage from './pages/home-page.cmp.js';
import emailPage from './pages/email-page.cmp.js';
import keepPage from './pages/keep-page.cmp.js';

const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/email',
        component: emailPage
    },
    {
        path: '/keep',
        component: keepPage
    },
];

export const router = new VueRouter({ routes });
