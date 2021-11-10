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
          <!-- <book-app></book-app> -->
          <app-header />
          <user-msg />
          <router-view />
          <!-- <book-app/> -->
          <app-footer />
      </section>
    `,
    components: {
        appHeader,
        appFooter,
        bookApp,
        userMsg,
    }
};

new Vue(options);