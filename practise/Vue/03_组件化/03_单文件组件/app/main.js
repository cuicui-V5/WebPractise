import app from "./App.vue";

new Vue({
    el: ".root",
    template: `
    <div>
    <app></app>
    </div>
    `,
    components: {
        app,
    },
});
