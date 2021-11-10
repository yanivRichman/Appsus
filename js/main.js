import appHeader from './cmps/app-header.cmp.js';
import appFooter from './cmps/app-footer.cmp.js';
import userMsg from './cmps/user-msg.cmp.js';
import bookApp from './pages/book-app.cmp.js';
import { router } from './routes.js';


const options = {
    el: '#app',
    router,
    template: `
      <section>
          <app-header />
          <!-- <user-msg /> -->
          <router-view />
      </section>
    `,
    components: {
        appHeader,
        bookApp,
        userMsg,
    }
};

new Vue(options);