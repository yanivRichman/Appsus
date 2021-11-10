
import homePage from './pages/home-page.cmp.js';
import emailPage from './apps/mail/pages/mail-page.cmp.js';
import keepPage from './apps/keep/pages/note-page.cmp.js';

const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/mail',
        component: emailPage
    },
    {
        path: '/keep',
        component: keepPage
    },
];

export const router = new VueRouter({ routes });
