
export default {
    template: `
        <header class="app-header app-main">
            <div class="logo">
                <h3>Appsus</h3>
            </div>
            <nav>
                <router-link to="/" active-class="active-link" exact>Home</router-link> |
                <router-link to="/mail">mail</router-link> |
                <router-link to="/Keep">Keep</router-link>
            </nav>
        </header>
    `,
}