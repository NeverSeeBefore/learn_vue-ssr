import createApp from '../src/app.js';

export default (ctx) => {
    const app = createApp();
    app.$router.push(ctx.url);
    return app;
}