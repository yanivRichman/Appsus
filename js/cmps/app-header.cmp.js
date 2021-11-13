
export default {
    template: `
        <header class="app-header app-main flex space-between">
            <div class="logo">
                <h3>Appsus</h3>
            </div>
            <nav>
                <router-link to="/" active-class="active-link" exact>Home</router-link> |
                <router-link to="/mail" active-class="active-link" exact>mail</router-link> |
                <router-link to="/Keep" active-class="active-link" exact>Keep</router-link>
            </nav>
        </header>
    `,
}